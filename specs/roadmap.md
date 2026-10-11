# Project Roadmap: Digital

High-level implementation order split into small, independently testable phases.
Each phase contains an atomic checklist of deliverables.

## Phase 1: MVP — Fondazione
Obiettivo: creare la base del progetto con struttura `specs/`, pulizia del codice, estensione JetBrains base e interfaccia a 3 colonne con compilazione manuale.

- [x] Creare struttura `specs/` con costituzione del progetto (mission, tech-stack, roadmap)
- [x] Pulire il progetto: rimuovere file duplicati tra `libraries/` e `src/libraries/`
- [x] Controllare la cartella `review/`: spiegare a cosa serve ogni file e chiedere all'utente se può essere eliminato
- [x] Generare una nuova icona moderna per il progetto che simboleggi le reti logiche digitali
- [x] Spostare esempi da `examples/` in `tests/` come unica cartella per istanze di demo
- [x] Aggiungere `unibo.v` e librerie UniBo a `.gitignore`
- [x] Creare estensione JetBrains base con preview del circuito
- [x] Implementare interfaccia a 3 colonne: File Explorer, Editor Verilog, Visualizzazione circuito
- [x] Implementare compilazione manuale con bottone Compile (non real-time)
- [x] Verificare che la conversione Verilog → circuito funzioni con yosys2digitaljs
- [x] Verificare che i test esistenti passino (`npm test`)

## Phase 2: Moduli Personalizzati
Obiettivo: API OOP per definire moduli custom, sistema librerie (built-in + custom), libreria UniBo corretta.

- [x] Definire API OOP per moduli: classi Module, Input, Output, Shape
- [x] Implementare sistema librerie con supporto per librerie built-in e custom
- [x] Creare meccanismo di caricamento librerie da directory utente
- [x] Implementare libreria UniBo corretta con moduli validi
- [x] Supportare moduli multi-file con inclusione nel diagramma
- [x] Implementare navigazione tra moduli inclusi (possibilità di "sbirciare" nel diagramma)
- [x] Scrivere test per il sistema librerie e API moduli
- [x] Documentare l'API per i professori che creano librerie custom

## Phase 3: Miglioramenti UI
Obiettivo: migliorare l'interfaccia utente con subwindow ottimizzata, gate rendering migliorato, barra lente e XOR ricorsivo.
Guarda [appunti](../docs/notes/request/note.md).

- [x] Implementare subwindow ottimizzata e modernizzata per dettagli del modulo
- [x] Stilizzare il bottone Compile in modo coerente con il tono accademico
- [x] Migliorare il rendering dei gate: distanza nulla tra gate connessi, multi-input support
- [x] Implementare barra lente sopra il modulo per zoom e navigazione
- [x] Implementare merging ricorsivo dei gate XOR per visualizzazione compatta
- [x] Migliorare il layout automatico dei circuiti complessi
- [x] Assicurare che l'interfaccia rispetti il tono accademico & minimalista
- [x] Testare l'UI con circuiti complessi multi-modulo
- [x] Navigazione dell'area di lavoro tramite pan (trascinamento) e zoom (ingrandimento)

## Phase 4: Simulazione Avanzata
Obiettivo: simulazione di metastati, alee (statiche e dinamiche), ritardi di propagazione e calcolo voltaggio.

- [ ] Implementare rilevamento di metastati nei flip-flop
- [ ] Implementare rilevamento di alee statiche
- [ ] Implementare rilevamento di alee dinamiche
- [ ] Aggiungere ritardi di propagazione configurabili per i gate
- [ ] Implementare calcolo del voltaggio basato sui ritardi
- [ ] Visualizzare i metastati e le alee nel diagramma del circuito
- [ ] Scrivere test per la simulazione avanzata con casi noti
- [ ] Documentare le feature di simulazione avanzata per uso didattico
