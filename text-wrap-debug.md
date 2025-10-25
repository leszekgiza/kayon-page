# Analiza problemu z zawijaniem tekstu w GreenSection

## Problem
Na mobile tekst w kartach "Nasi klienci" nie zawija się i powoduje, że karty wychodzą poza szerokość ekranu.

## Wykonane próby (wszystkie NIEUDANE)

### Próba 1: Dodanie `break-words` do Tailwind classes
```tsx
<h3 className="break-words text-lg font-semibold">{card.title}</h3>
<p className="break-words text-sm leading-relaxed text-primary/80 md:text-base">{card.description}</p>
```
**Wynik**: Tekst dalej się nie zawija.

### Próba 2: Dodanie `min-w-0` i `overflow-hidden`
```tsx
<div className="min-w-0 flex-shrink-0 overflow-hidden rounded-[32px] bg-white px-6 py-8 text-primary shadow-lg">
  <div className="min-w-0 space-y-4">
```
**Wynik**: Tekst dalej się nie zawija.

### Próba 3: Zmiana szerokości karty na viewport-based (vw)
```tsx
const mobileWidth = '85vw';
const tabletWidth = '45vw';
const desktopWidth = '30vw';
return {
  width: visibleCount === 1 ? mobileWidth : visibleCount === 2 ? tabletWidth : desktopWidth
};
```
**Wynik**: Jeszcze gorzej - całkowicie zepsuło layout.

### Próba 4: Inline styles z wszystkimi word-breaking properties
```tsx
style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word', hyphens: 'auto' }}
```
**Wynik**: Tekst się zawija, ale karta dalej wychodzi poza ekran.

### Próba 5: Zmiana szerokości karty na podstawie visibleCount
```tsx
const gapsInView = (visibleCount - 1) * GAP_SIZE;
return {
  width: `calc((100% - ${gapsInView}px) / ${visibleCount})`
};
```
**Wynik**: Jeszcze gorzej.

## Obecny stan kodu

### trackStyle (linie 59-66)
```tsx
const trackStyle = useMemo(() => {
  const translatePercent = (index * 100) / extendedLength;
  const totalGaps = (extendedLength - 1) * GAP_SIZE;
  return {
    width: `calc(${(extendedLength * 100) / visibleCount}% + ${totalGaps}px)`,
    transform: `translateX(-${translatePercent}%)`,
  };
}, [index, extendedLength, visibleCount]);
```

### cardStyle (linie 68-73)
```tsx
const cardStyle = useMemo(() => {
  const totalGaps = (extendedLength - 1) * GAP_SIZE;
  return {
    width: `calc((100% - ${totalGaps}px) / ${extendedLength})`
  };
}, [extendedLength]);
```

### Struktura kart (linie 116-137)
```tsx
{extendedCards.map((card, cardIndex) => (
  <div
    key={`${card.title}-${cardIndex}`}
    style={cardStyle}
    className="flex-shrink-0 rounded-[32px] bg-white px-6 py-8 text-primary shadow-lg"
  >
    <div className="space-y-4">
      <h3
        className="text-lg font-semibold"
        style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word', hyphens: 'auto' }}
      >
        {card.title}
      </h3>
      <p
        className="text-sm leading-relaxed text-primary/80 md:text-base"
        style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word', hyphens: 'auto' }}
      >
        {card.description}
      </p>
    </div>
  </div>
))}
```

## Analiza problemu

### Kluczowe wartości na mobile:
- `baseLength` = liczba oryginalnych kart (prawdopodobnie 5)
- `extendedCards` = `[...baseCards, ...baseCards, ...baseCards]` = 15 kart
- `extendedLength` = 15
- `visibleCount` = 1 (na mobile)
- `GAP_SIZE` = 24px

### Obliczenia szerokości:

**trackStyle width:**
```
width: calc((15 * 100) / 1% + (14 * 24)px)
     = calc(1500% + 336px)
```
To jest OGROMNA szerokość - 1500% + 336px!

**cardStyle width:**
```
width: calc((100% - 336px) / 15)
     = calc((100% - 336px) / 15)
```

**Problem**:
1. Track ma szerokość 1500% kontenera
2. Każda karta ma szerokość `(100% track - 336px) / 15`
3. Ale 100% tutaj odnosi się do szerokości TRACK'a, nie kontenera
4. Więc każda karta ma szerokość około `(1500% - 336px) / 15 ≈ 100% viewport`

Ale to jest obliczane względem track'a, który ma `position` i `transform`, co komplikuje sprawę.

## Możliwe rozwiązania do wypróbowania

### Rozwiązanie 1: Zmiana całej logiki carousel'a
Przebudować cały system tak, aby nie używać extendedCards, tylko normalny carousel z klonowaniem.

### Rozwiązanie 2: Dodanie max-width do karty
Ustawić `max-width: 100%` na kontenerze overflow i kartach.

### Rozwiązanie 3: Użycie flexbox bez calc()
Zamiast `width: calc(...)` użyć `flex: 0 0 auto` i stałej szerokości w px lub vw.

### Rozwiązanie 4: Dodanie padding do kontenera
Może problem jest w kontenerze - dodać `px-4` lub podobne do kontenera overflow.

### Rozwiązanie 5: Sprawdzić czy to nie jest problem z container-custom
Może `.container-custom` ma jakieś padding/margin które psują kalkulacje.

### Rozwiązanie 6: Dodać white-space i text-overflow
```tsx
style={{
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
  whiteSpace: 'normal',
  textOverflow: 'clip'
}}
```

### Rozwiązanie 7: Box-sizing
Upewnić się że wszystkie elementy mają `box-sizing: border-box`.

## Dodatkowe próby wykonane

### Próba 6: max-width na kontenerze overflow
```tsx
<div className="max-w-full overflow-hidden">
```
**Wynik**: Bez efektu.

### Próba 7: maxWidth i boxSizing na kartach
```tsx
style={{ ...cardStyle, maxWidth: '100%', boxSizing: 'border-box' }}
```
**Wynik**: Bez efektu.

### Próba 8: Zmiana trackStyle (niepotrzebna zmienna)
```tsx
const cardWidth = 100 / visibleCount;
const translatePixels = index * (cardWidth + (GAP_SIZE * visibleCount / 100));
```
**Wynik**: Bez efektu, właściwie to samo co wcześniej.

### Próba 9: cardStyle z 100vw jako bazą
```tsx
const containerPadding = 32; // 16px * 2
const gapsInView = (visibleCount - 1) * GAP_SIZE;
return {
  width: `calc((100vw - ${containerPadding}px - ${gapsInView}px) / ${visibleCount})`
};
```
**Wynik**: Nie dało efektu jaki oczekiwano.

## Pozostałe rozwiązania do wypróbowania

### Rozwiązanie 8: Zmienić cardStyle aby używał px zamiast calc z %
```tsx
const cardStyle = useMemo(() => {
  // Get actual container width somehow and use fixed px
  return {
    width: '320px' // or whatever makes sense
  };
}, []);
```

### Rozwiązanie 9: Dodać overflow-wrap: anywhere
```tsx
style={{ overflowWrap: 'anywhere' }}
```

### Rozwiązanie 10: Sprawdzić container-custom width
Może problem jest w samym kontenerze - sprawdzić jego max-width i padding na różnych breakpointach.

### Rozwiązanie 11: Użyć CSS Grid zamiast Flexbox
Zmienić cały track z flex na grid.

### Rozwiązanie 12: Dodać width: 0 do parent divs
```tsx
<div className="space-y-8" style={{ width: 0 }}>
```

### Rozwiązanie 13: Zmienić track width aby był w px
Zamiast używać % dla track, użyć stałych px bazując na szerokości karty.

### Rozwiązanie 14: Dodać min-width: 0 na wszystkich poziomach
Od kontenera overflow w dół do tekstu.
