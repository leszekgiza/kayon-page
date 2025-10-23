$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("D:\kayon-page\teksty\20251022_g0754_SYSTEMY - teksty do zakładki - Final (RP).docx")
$text = $doc.Content.Text
$doc.Close()
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
Write-Output $text
