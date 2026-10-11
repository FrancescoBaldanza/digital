# Phase Requirements: Phase 2 — Moduli Personalizzati

## 1. Scope
### Included
- **OOP API per Moduli Personalizzati:** Implementazione ed esportazione formale delle classi `Module`, `Input`, `Output`, `Shape` in `src/module-api/`, garantendo interoperabilità tra moduli JavaScript e componenti Verilog.
- **Sistema di Registrazione Librerie (Built-in & Custom):** Registro centralizzato (`LibraryRegistry`) capace di indicizzare, validare ed esporre librerie built-in (`src/libraries/`) e librerie utente/progetto esterne.
- **Risoluzione Automatica Cartelle Librerie:** Risolutore filesystem per directory configurabili (es. `./libraries` o percorsi specificati da impostazioni/CLI), fornendo automaticamente i flag di include (`-I`) al backend di sintesi Yosys.
- **Libreria Didattica UniBo:** Correzione e validazione della libreria componenti UniBo (`src/libraries/unibo/`), garantendo moduli Verilog e definizioni OOP sintatticamente e semanticamente validi.
- **Supporto Moduli Multi-File:** Supporto all'inclusione di file multipli (`\`include "..."\``) con corretta propagazione dei sottocircuiti nell'albero del diagramma.
- **Ispezione Gerarchica ("Sbirciare" nel Circuito):** Rendering visivo dei moduli come circuiti integrati (IC) con pin e porte nominate, con possibilità di aprire un overlay/modal interattivo per esplorare il circuito interno senza perdere il contesto primario.
- **Documentazione Didattica:** Guida API chiara per docenti che desiderano creare e distribuire librerie di moduli didattici personalizzati.

### Excluded / Non-Goals for this Phase
- Simulazione dinamica avanzata con metastati, alee statiche/dinamiche e ritardi di propagazione (riservata alla Phase 4).
- Editing grafico drag-and-drop o disegno manuale di circuiti (il flusso rimane Verilog-first e guidato da codice).
- Supporto a formati HDL alternativi (es. VHDL, SystemVerilog completo).

### Data Shape & Contract
| Field / Property | Type | Description | Constraints / Validation |
| :--- | :--- | :--- | :--- |
| `module.name` | `string` | Nome identificativo del modulo (corrispondente al modulo Verilog) | Obbligatorio, identificatore valido (alphanumeric + `_`) |
| `module.inputs` | `Input[]` | Lista delle porte di input con etichetta e larghezza in bit (bus) | Almeno 1 porta, `bits >= 1` |
| `module.outputs` | `Output[]` | Lista delle porte di output con etichetta e larghezza in bit | Almeno 1 porta, `bits >= 1` |
| `module.shape` | `Shape` | Configurazione di rendering e layout (dimensioni, pin layout, IC style) | Dimensioni minime 60x40, etichette pin non sovrapposte |
| `library.name` | `string` | Identificatore univoco del namespace della libreria (es. `"unibo"`) | Univoco nel registro |
| `library.path` | `string` | Percorso assoluto o relativo della cartella sorgente della libreria | Directory valida esistente sul filesystem |
| `library.verilogEntry` | `string` | Percorso del file Verilog master di inclusione (es. `modules.v`) | File Verilog valido |

---

## 2. Key Decisions & Rationale
- **Decision 1: Gerarchia OOP completa (Module, Input, Output, Shape)**
  - *Choice:* Architettura OOP modulare con separazione netta tra metadati delle porte, layout del contenitore (Shape) e logica di connessione.
  - *Rationale:* Fornisce ai professori una sintassi leggibile ed estendibile per definire circuiti complessi mantenendo piena coerenza con i componenti nativi di JointJS e Digital.
- **Decision 2: Directory Resolver automatico integrato con Yosys**
  - *Choice:* Risoluzione basata su cartelle predefinite (`src/libraries/` e directory di workspace `./libraries`) con iniezione trasparente nei percorsi di include di `yosys2digitaljs`.
  - *Rationale:* Elimina frizioni per gli studenti: i file Verilog compilano senza richiedere configurazioni manuali complesse di build, consentendo al contempo ai professori di aggiungere facilmente pacchetti di laboratorio.
- **Decision 3: Ispezione gerarchica tramite IC Box e Preview Modal/Overlay**
  - *Choice:* I moduli custom appaiono nel diagramma di primo livello come circuiti integrati (IC) compatti con porte orientate; un click/doppio-click apre un overlay interattivo dedicato per ispezionare lo schematico interno.
  - *Rationale:* Evita di sovraccaricare il canvas principale con decine di gate interni, preservando l'astrazione a blocchi fondamentale per l'insegnamento universitario delle reti logiche.

---

## 3. Context & Guidance
- **Alignment with Mission:** Rispetta pienamente gli obiettivi di [`specs/mission.md`](../mission.md) per supportare studenti e docenti (UniBo) nell'adozione di Verilog dichiarativo e librerie modulari riutilizzabili.
- **Tech Stack Compliance:** Conforme alle linee guida di [`specs/tech-stack.md`](../tech-stack.md). Utilizzo di ES modules in `src/`, JointJS per il rendering e Jest per i test unitari/integrazione in `tests/`. Nessuna dipendenza non autorizzata.
- **Conventions & Patterns:** Segue il pattern architetturale esistente in `src/module-api/` e `src/libraries/`, estendendo la copertura di test e documentando l'API in `docs/`.
