# Lista prób naprawy zawijania tekstu w ProductsSection

## Problem
Nagłówek "Produkty wyznaczające nowy standard pomiarów" nie zawija się na węższych ekranach.

## Aktualna struktura (linie 32-45)
```tsx
<div className="flex flex-col justify-between lg:w-[477px] lg:h-[631px]">
  <h2 className="text-3xl font-bold text-white md:text-[40px] md:leading-[52px]">
    {products.heading}
  </h2>
  <div className="w-[467px] rounded-[30px] border-2 border-[#747171] p-10">
    ...
  </div>
  <p className="w-[437px] text-base font-bold leading-[22.4px] text-white">{products.footnote}</p>
</div>
```

## Próby które NIE ZADZIAŁAŁY ❌

### Próba 1: Dodanie w-full i break-words
- Dodano `w-full` do kontenera głównego
- Dodano `break-words` do h2
- Status: ❌ NIE DZIAŁA

### Próba 2: Zmiana szerokości na max-w z w-full
- Zmieniono `w-[467px]` → `w-full max-w-[467px]`
- Zmieniono `w-[437px]` → `w-full max-w-[437px]`
- Status: ❌ NIE DZIAŁA

### Próba 3: Zmiana układu na gap-8
- Dodano `gap-8` do kontenera
- Zmieniono szerokości na `lg:w-[...]`
- Status: ❌ NIE DZIAŁA

### Próba 4: Skopiowanie wzoru z OfferSection
- Zmieniono `flex flex-col justify-between` → `space-y-6 lg:space-y-10`
- Dodano `leading-tight` do h2
- Użyto `max-w-[...]` zamiast `w-[...]`
- Status: ❌ NIE DZIAŁA

## Co DZIAŁA ✅
- Nawigacja przyciski: `flex flex-wrap items-center justify-start gap-4 lg:justify-between` ✅

## Możliwe następne próby 🔄

### Opcja 5: Sprawdzić overflow w kontenerze rodzica
- Problem może być w `lg:grid-cols-[477px_minmax(0,1fr)]` - stała szerokość 477px
- Spróbować zmienić na: `lg:grid-cols-[minmax(0,477px)_minmax(0,1fr)]`

### Opcja 6: Dodać overflow-wrap
- Dodać do h2: `overflow-wrap: break-word` lub `word-break: break-word`

### Opcja 7: Zmienić na flex zamiast grid
- Główny kontener zmienić z `grid` na `flex flex-col lg:flex-row`

### Opcja 8: Usunąć justify-between
- `justify-between` może rozciągać elementy i blokować zawijanie
- Spróbować `space-y-8` zamiast `justify-between`

### Opcja 9: Sprawdzić czy h2 nie ma white-space: nowrap
- Może być odziedziczone z globals.css lub Montserrat font

### Opcja 10: Całkowicie usunąć stałe szerokości
- Usunąć wszystkie `w-[...]` i `lg:w-[...]`
- Pozwolić kontenerowi samodzielnie się dostosować
