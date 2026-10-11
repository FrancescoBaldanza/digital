# Implementation Plan: Phase 3 — Miglioramenti UI

Detailed sequence of independently executable and verifiable task groups.

---

### Task Group 1: Recursive Gate Merging & Zero-Distance Layout
- [x] 1.1 Implementare l'algoritmo di unificazione ricorsiva (`mergeAssociativeGates`) per gate associativi in cascata (XOR, AND, OR, NAND, NOR)
- [x] 1.2 Aggiornare la definizione dei componenti grafici per supportare ingressi multipli dinamici (da 3 fino a 20+ pin) con etichettatura ed equispaziatura
- [x] 1.3 Configurare l'azzeramento della distanza tra gate connessi direttamente in serie o blocchi contigui
- [x] 1.4 Scrivere unit test per la trasformazione del netlist e l'accorpamento ricorsivo delle connessioni

### Task Group 2: Manual Compilation Flow & Hammer Button Styling
- [ ] 2.1 Disabilitare l'auto-compilazione continua su digitazione nell'editor Verilog (`file.v`)
- [ ] 2.2 Sostituire il vecchio pulsante di compilazione con la nuova icona a martello (*hammer*) nella toolbar principale
- [ ] 2.3 Implementare l'indicatore di stato "Modificato" / dirty state quando il codice sorgente subisce modifiche non ancora sintetizzate
- [ ] 2.4 Verificare che la sintesi Verilog avvenga esclusivamente su pressione esplicita del pulsante o combinazione rapida

### Task Group 3: Subwindow Optimization & Modernization
- [ ] 3.1 Riprogettare il layout della sottofinestra (subwindow di ispezione modulo), eliminando lo spazio bianco eccedente a favore di una card floating moderna e compatta
- [ ] 3.2 Implementare header sottile e pulito con titolo del modulo e pulsante di chiusura "X" minimalista
- [ ] 3.3 Garantire il calcolo ottimale del viewport interno (bounding box automatico) per evitare margini vuoti
- [ ] 3.4 Preservare lo stato di simulazione e interazione del canvas principale durante l'apertura e chiusura della sottofinestra

### Task Group 4: Lens Bar (Zoom/Pan HUD) & Canvas Navigation
- [ ] 4.1 Creare il componente floating Lens Bar (barra lente) posizionato in overlay in alto a destra nel canvas del circuito
- [ ] 4.2 Implementare i controlli dedicati: Zoom In (`+`), Zoom Out (`-`), Zoom Reset (1:1 / `100%`), Adatta alla Vista (`Fit`), e selettore Pan
- [ ] 4.3 Abilitare la navigazione fluida tramite mouse drag (pan) e rotellina del mouse / gesture (zoom continuo) sul paper JointJS
- [ ] 4.4 Applicare lo stile visuale sobrio e coerente con il design accademico e minimalista

### Task Group 5: Complex Circuits Testing & Automated Verification
- [ ] 5.1 Creare test di integrazione e circuiti di prova multi-modulo con cascate estese di XOR per validare leggibilità e performance
- [ ] 5.2 Eseguire la suite di test completa (`npm test`) garantendo 0 errori o regressioni
- [ ] 5.3 Eseguire la build completa del progetto (`npm run build-lib` e `npm run prod`)
- [ ] 5.4 Eseguire il walkthrough manuale completo dei criteri di accettazione
