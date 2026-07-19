# Képek elhelyezése

Másold ebbe a mappába (`public/images/`) a fotókat pontosan ezekkel a fájlnevekkel (kisbetűvel, ékezet nélkül):

| Fájlnév         | Hol jelenik meg                          |
| --------------- | ---------------------------------------- |
| `kismama.jpg`   | Munkáim – Kismama kártya + főoldali kollázs |
| `csaladi.jpg`   | Munkáim – Családi kártya                 |
| `eskuvoi.jpg`   | Munkáim – Esküvői kártya + főoldali kollázs |
| `ujszulott.jpg` | Munkáim – Újszülött kártya + főoldali kollázs |
| `paros.jpg`     | Munkáim – Páros kártya                   |
| `kutyas.jpg`    | Munkáim – Kutyás kártya                  |
| `lovas.jpg`     | Munkáim – Lovas kártya                   |
| `rolam.jpg`     | Rólam szekció portréképe                 |

Ha egy kép hiányzik, a helyén elegáns, rózsaszín helykitöltő jelenik meg, az oldal nem törik el.

Ha `.png` vagy más kiterjesztésű a kép, vagy nevezd át `.jpg`-re, vagy írd át az elérési utat az `src/lib/categories.ts` fájlban (és a `rolam.jpg`-t az `src/components/About.tsx`-ben).
