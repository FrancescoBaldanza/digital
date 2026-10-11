# Project Roadmap: digitaljs

High-level implementation order split into small, independently testable phases.
Each phase contains an atomic checklist of deliverables.

## Phase 1: MVP — Fondazione
Obiettivo: creare la base del progetto con struttura `specs/`, pulizia del codice, estensione JetBrains base e interfaccia a 3 colonne con compilazione manuale.

- [x] Creare struttura `specs/` con costituzione del progetto (mission, tech-stack, roadmap)
- [ ] Pulire il progetto: rimuovere file duplicati tra `libraries/` e `src/libraries/`
- [ ] Controllare la cartella `review/`: spiegare a cosa serve ogni file e chiedere all'utente se può essere eliminato
- [ ] Generare una nuova icona moderna per il progetto che simboleggi le reti logiche digitali
- [ ] Spostare esempi da `examples/` in `tests/` come unica cartella per istanze di demo
- [ ] Aggiungere `unibo.v` e librerie UniBo a `.gitignore`
- [ ] Creare estensione JetBrains base con preview del circuito
- [ ] Implementare interfaccia a 3 colonne: File Explorer, Editor Verilog, Visualizzazione circuito
- [ ] Implementare compilazione manuale con bottone Compile (non real-time)
- [ ] Verificare che la conversione Verilog → circuito funzioni con yosys2digitaljs
- [ ] Verificare che i test esistenti passino (`npm test`)

## Phase 2: Moduli Personalizzati
Obiettivo: API OOP per definire moduli custom, sistema librerie (built-in + custom), libreria UniBo corretta.

- [ ] Definire API OOP per moduli: classi Module, Input, Output, Shape
- [ ] Implementare sistema librerie con supporto per librerie built-in e custom
- [ ] Creare meccanismo di caricamento librerie da directory utente
- [ ] Implementare libreria UniBo corretta con moduli validi
- [ ] Supportare moduli multi-file con inclusione nel diagramma
- [ ] Implementare navigazione tra moduli inclusi (possibilità di "sbirciare" nel diagramma)
- [ ] Scrivere test per il sistema librerie e API moduli
- [ ] Documentare l'API per i professori che creano librerie custom

## Phase 3: Miglioramenti UI
Obiettivo: migliorare l'interfaccia utente con subwindow ottimizzata, gate rendering migliorato, barra lente e XOR ricorsivo.

- [ ] Implementare subwindow ottimizzata e modernizzata per dettagli del modulo
- [ ] Stilizzare il bottone Compile in modo coerente con il tono accademico
- [ ] Migliorare il rendering dei gate: distanza nulla tra gate connessi, multi-input support
- [ ] Implementare barra lente sopra il modulo per zoom e navigazione
- [ ] Implementare merging ricorsivo dei gate XOR per visualizzazione compatta
- [ ] Migliorare il layout automatico dei circuiti complessi
- [ ] Assicurare che l'interfaccia rispetti il tono accademico & minimalista
- [ ] Testare l'UI con circuiti complessi multi-modulo

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
