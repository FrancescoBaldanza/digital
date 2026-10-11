# Guida Docenti: Creazione e Packaging di Moduli e Librerie Custom

Questa guida descrive come i docenti possono definire moduli personalizzati, pacchettizzare librerie didattiche (es. UniBo) e renderle automaticamente accessibili sia all'IDE JetBrains che alla pipeline di sintesi Verilog (`yosys2digitaljs`).

---

## 1. Architettura delle Librerie Custom

Una libreria custom in Digital è composta da due elementi sinergici:
1. **Modello Verilog (`modules.v` o file `.v` dedicati):** la definizione HDL hardware per il sintetizzatore Yosys.
2. **Definizione OOP JavaScript / Manifest (`index.mjs` o `library.json`):** i metadati di interfaccia (porte, bus, lati dei pin, layout e documentazione grafica per il canvas).

### Struttura raccomandata di una cartella di libreria:
```
libraries/mia_libreria/
├── library.json       # Manifest descrittivo (nome, versione, moduli)
├── modules.v          # Codice Verilog dei moduli
└── index.mjs          # (Opzionale) Definizioni OOP avanzate
```

---

## 2. Definizione dei Moduli tramite OOP API

La libreria espone classi formali in `src/module-api/`:

```javascript
import { Module, Input, Output, Side, PinStyle } from 'digital';

// Creazione di un modulo personalizzato (es. FullAdder)
const fullAdder = new Module({
    name: 'FullAdder',
    metadata: {
        category: 'combinational',
        description: 'Sommatore completo a 1-bit con riporto'
    },
    inputs: [
        new Input({ name: 'a', side: Side.Left }),
        new Input({ name: 'b', side: Side.Left }),
        new Input({ name: 'cin', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 's', side: Side.Right }),
        new Output({ name: 'cout', side: Side.Right })
    ]
});

// Validazione formale del modulo
fullAdder.validateOrThrow();
```

### Orientamento dei Pin (`Side`)
- `Side.Left`: ingresso principale (default per `Input`).
- `Side.Right`: uscita principale (default per `Output`).
- `Side.Top`: ingressi di controllo (es. `set`, `clr`, abilitazioni ausiliarie).
- `Side.Bottom`: segnali di controllo globali o asincroni (es. `rst`, `reset`).

### Supporto Bus a n-bit
È possibile specificare l'ampiezza di bus in bit tramite `bits`:
```javascript
new Input({ name: 'data_in', bits: 32, side: Side.Left });
new Output({ name: 'res_out', bits: 32, side: Side.Right });
```

---

## 3. Manifest della Libreria (`library.json`)

Per consentire la discovery automatica senza codice JS:
```json
{
  "name": "UniBo",
  "version": "1.0.0",
  "description": "Libreria di moduli digitali UniBo",
  "author": "UniBo",
  "verilogEntry": "modules.v",
  "modules": [
    "FFD",
    "FFT",
    "Counter",
    "FullAdder",
    "ALU",
    "Decoder"
  ]
}
```

---

## 4. Risoluzione Automatica Filesystem & Sintesi Verilog

Il sistema include un `LibraryResolver` automatico:
- Tutte le cartelle collocate in `./libraries/` o `./src/libraries/` vengono scansionate all'avvio.
- Quando uno studente scrive nel proprio file Verilog:
  ```verilog
  `include "unibo.v"
  // oppure `include "modules.v"
  ```
  la pipeline di compilazione inietta automaticamente i flag `-I` corretti verso la directory della libreria corrispondente.

---

## 5. Ispezione Gerarchica nel Diagramma ("Sbirciare" nei sottomoduli)

Nel canvas del circuito:
1. I moduli della libreria appaiono come **circuiti integrati compatti (IC)**.
2. Cliccando sull'icona della **lente (Lens Bar)** sopra il modulo o facendo **doppio-click** sul blocco, si apre una finestra popup/overlay interattiva che mostra la rete logica interna del modulo senza abbandonare il canvas principale.

---

## 6. Esempio Completo di Riferimento (`test-library.v`)

Nella root del progetto è disponibile il circuito didattico [test-library.v](file:///Users/francescobaldanza/CLionProjects/digital/test-library.v) pronto all'uso come benchmark per studenti e docenti.
Include una combinazione di:
- `CounterEnRst` (sequenziale a 7 bit)
- `ALU` (combinatorio aritmetico-logico a 8 bit con flag)
- `FFD` e `\FF-D` (flip-flop D e gestione escaped identifiers)
- `Decoder` (3-to-8)
- `FullAdder` (sommatore completo 1 bit)
- `Mux2` (multiplexer 2-a-1)

Compilandolo nell'IDE o nel visualizzatore Web, ciascun blocco compare come IC interattivo ispezionabile tramite doppio-click o icona lente.
