# Phase Requirements: Phase 3 — Miglioramenti UI

## 1. Scope
### Included
- **Subwindow Ottimizzata e Modernizzata:**
  - Riprogettazione visiva della sottofinestra (subwindow / modal di ispezione del modulo) con card floating moderna, proporzioni compatte ed eliminazione degli spazi bianchi inutilizzati.
  - Header sottile e sobrio con pulsante di chiusura minimalista integrato ("X"), conforme al tono accademico.
  - Adattamento dinamico al contenuto del circuito interno senza overflow antiestetici o margini sovradimensionati.
- **Pulsante Compile con Icona Martello & Ciclo Manuale On-Demand:**
  - Sostituzione dell'icona/pulsante di compilazione con la nuova icona a martello (*hammer*) nella toolbar principale.
  - Rimozione completa dell'auto-compilazione a ogni modifica del sorgente Verilog (`file.v`).
  - Esecuzione della sintesi Verilog → circuito esclusivamente su click manuale del pulsante.
  - Stato visivo "Modificato / Non sincronizzato" (badge o indicatore discreto) nell'editor Verilog quando il testo è stato modificato dopo l'ultima compilazione.
- **Merging Ricorsivo dei Gate Logici & Spaziatura a Distanza Nulla:**
  - Algoritmo di compressione e unificazione ad albero per gate associativi in cascata (XOR, AND, OR, NAND, NOR): quando l'uscita di un gate alimenta l'ingresso del gate successivo dello stesso tipo, i due vengono fusi ricorsivamente in un unico gate multi-input (supporto fino a N ingressi, es. 20+).
  - Supporto per rendering multi-input nativo su JointJS con porte di ingresso equispaziate.
  - Azzeramento della distanza (zero-distance/snapping) tra gate direttamente connessi o in blocchi contigui per una rappresentazione schematica compatta e didattica.
- **Barra Lente & Navigazione Canvas (Pan & Zoom):**
  - Barra strumenti lente fluttuante (*Lens Bar*) posizionata in overlay (in alto a destra nel viewport del circuito).
  - Controlli interattivi dedicati: Zoom In (`+`), Zoom Out (`-`), Zoom Reset (1:1 / `100%`), Adatta alla Vista (`Fit`), e selettore Pan/Drag.
  - Interazione fluida nel canvas: pan tramite trascinamento (mouse drag / space+drag) e zoom continuo tramite rotellina del mouse/trackpad.
- **Layout Ottimizzato per Circuiti Complessi:**
  - Ottimizzazione dei parametri ELK / JointJS per instradamento pulito dei collegamenti e riduzione degli incroci nei circuiti multi-modulo.

### Excluded / Non-Goals for this Phase
- Simulazione di metastati, alee statiche/dinamiche e ritardi di propagazione (esplicitamente riservati alla Phase 4).
- Editor schematico interattivo drag-and-drop con piazzamento manuale di gate (il flusso di creazione rimane Verilog-first e guidato da codice).
- Supporto per HDL differenti da Verilog.

### Data Shape & Contract
| Field / Property | Type | Description | Constraints / Validation |
| :--- | :--- | :--- | :--- |
| `gateMerge.enabled` | `boolean` | Flag di attivazione dell'algoritmo di unificazione ricorsiva | Default `true` |
| `gateMerge.gateTypes` | `string[]` | Tipi di gate soggetti a fusione | `['$xor', '$and', '$or', '$nand', '$nor']` |
| `gateMerge.maxInputs` | `number` | Limite massimo ingressi accorpati per gate | `> 2`, default senza limite pratico (es. fino a 64) |
| `viewNav.zoom` | `number` | Livello di zoom del paper JointJS | Range `[0.1, 5.0]`, step `0.1` |
| `viewNav.pan` | `{ x: number, y: number }` | Offset di traslazione del canvas | Valori finiti in coordinate schermo |
| `compilerState.isDirty` | `boolean` | Indica modifiche nel sorgente Verilog non ancora sintetizzate | Si attiva su `input`, si azzera su `compile` |
| `subwindow.dimensions` | `{ width: number, height: number }` | Dimensioni della card del modulo | Margini interni ridotti (max 12-16px padding) |

---

## 2. Key Decisions & Rationale
- **Decision 1: Estensione del Merging Ricorsivo a Tutti i Gate Associativi**
  - *Choice:* L'algoritmo di unificazione ricorsiva opera in modo uniforme su XOR e sugli altri operatori logici booleani associativi (AND, OR, NAND, NOR) con azzeramento della distanza tra gate in cascata.
  - *Rationale:* Gli studenti e i professori traggono enorme beneficio da schemi logici compatti e standardizzati; una catena di 16 XOR o AND generata da Yosys diventa immediatamente leggibile come un singolo operatore ad albero multi-ingresso anziché una diagonale illeggibile di celle binarie.
- **Decision 2: Subwindow Floating Moderna e Lens Bar Overlay nel Viewport**
  - *Choice:* La subwindow è una card floating semi-trasparente e compatta, con cornice sottile, header con pulsante "X" e spazio bianco ridotto all'essenziale. La Lens Bar è posizionata in alto a destra nel viewport del diagramma come floating HUD elegante.
  - *Rationale:* Evita finestre modali ingombranti e datate che nascondevano il circuito padre, offrendo al contempo un accesso immediato a zoom e pan senza sacrificare lo spazio di lavoro.
- **Decision 3: Compilazione Manuale On-Demand con Icona Martello e Badge Dirty State**
  - *Choice:* La compilazione Verilog avviene esclusivamente premendo il pulsante martello (*hammer*). Quando il codice viene editato, compare un badge sobrio "Modificato" nell'editor, avvisando l'utente che il diagramma mostrato non è sincronizzato.
  - *Rationale:* L'auto-compilazione real-time causava sfarfallii, reset indesiderati dello zoom/pan e overhead computazionale durante la digitazione. La compilazione on-demand ripristina il controllo totale e rispetta il workflow didattico.

---

## 3. Context & Guidance
- **Alignment with Mission:** Rispetta l'obiettivo di [`specs/mission.md`](../mission.md) focalizzato su uno stile *Accademico & Minimalista*, con chiarezza visiva priva di distrazioni e fruizione ottimale per gli studenti universitari.
- **Tech Stack Compliance:** Conforme a [`specs/tech-stack.md`](../tech-stack.md). Utilizzo di JointJS per il rendering e la manipolazione del paper (pan/zoom), elkjs per il layout geometrico, vanilla JS/CSS per i componenti UI (nessuna dipendenza frontend pesante aggiunta), e Jest per i test unitari.
- **Conventions & Patterns:** Segue l'organizzazione modulare in `src/`, estendendo le trasformazioni del circuito in `src/transforms/` (o modulo dedicato per il gate merge) e gli elementi UI nell'applicazione e nel plugin JetBrains.
