# Képek elhelyezése

> **Fontos – képminőség:** a képek hosszabb oldala legalább **1600 px** legyen (ideálisan ~2000 px), különben nagy méretben pixelesek lesznek. A 206×206-os bélyegképek (pl. Facebookról/Messengerből "mentés" helyett a kis előnézet letöltésével) erre nem alkalmasak — az eredeti, teljes méretű fájlokat mentsd ide.

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

## Galériaképek (lightbox)

A Munkáim kártyákra kattintva galéria nyílik, ami kategóriánként 4 képet mutat. A további képeket sorszámozva nevezd el, pl.:

- `kismama.jpg` (ez a kártyán is látszik), `kismama-2.jpg`, `kismama-3.jpg`, `kismama-4.jpg`
- `eskuvoi.jpg`, `eskuvoi-2.jpg`, `eskuvoi-3.jpg`, `eskuvoi-4.jpg`
- …és így tovább minden kategóriánál.

Ha kategóriánként több vagy kevesebb képet szeretnél, az `src/lib/categories.ts` fájlban a `galleryFor(cat.slug)` hívás második paraméterével állíthatod (alapértelmezés: 4).

Ha egy kép hiányzik, a helyén elegáns, rózsaszín helykitöltő jelenik meg, az oldal nem törik el.

Ha `.png` vagy más kiterjesztésű a kép, vagy nevezd át `.jpg`-re, vagy írd át az elérési utat az `src/lib/categories.ts` fájlban (és a `rolam.jpg`-t az `src/components/About.tsx`-ben).
