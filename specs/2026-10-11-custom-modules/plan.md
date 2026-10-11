# Implementation Plan: Phase 2 — Moduli Personalizzati

Detailed sequence of independently executable and verifiable task groups.

---

### Task Group 1: OOP Module API & Shape Hierarchy
- [x] 1.1 Consolidare e formalizzare le classi `Module`, `Input`, `Output`, `Shape` in `src/module-api/` con supporto per bus n-bit e orientamento porte
- [x] 1.2 Implementare la validazione delle definizioni dei moduli (nomi duplicati, porte disconnesse, shape non valida)
- [x] 1.3 Esportare l'API OOP in modo pulito tramite `src/module-api/index.mjs` con supporto TypeScript typedef / JSDoc completo
- [x] 1.4 Scrivere unit test per le classi `Module`, `Input`, `Output` e `Shape`

### Task Group 2: Library Registry & Directory Resolver
- [ ] 2.1 Rafforzare `LibraryRegistry` in `src/libraries/registry.mjs` per gestire sia librerie built-in (`src/libraries/`) che esterne
- [ ] 2.2 Implementare il resolver di filesystem per directory configurabili (scansione automatica di `./libraries/` e percorsi utente)
- [ ] 2.3 Integrare i percorsi di include risolti nel compilatore Verilog / pipeline `yosys2digitaljs`
- [ ] 2.4 Scrivere unit test per registrazione, discovery e risoluzione dei percorsi delle librerie

### Task Group 3: UniBo Library & Multi-file Verilog Support
- [ ] 3.1 Verificare e correggere tutti i componenti della libreria UniBo in `src/libraries/unibo/` (multiplexer, decodificatori, registri, ALU)
- [ ] 3.2 Garantire la compatibilità e validità della sintassi Verilog (`modules.v`) sia per Yosys che per l'IDE
- [ ] 3.3 Testare l'inclusione multi-file (`\`include\``) in circuiti gerarchici complessi
- [ ] 3.4 Scrivere test di integrazione per la corretta sintesi e istanziazione dei componenti UniBo

### Task Group 4: Subcircuit Hierarchy & IC Inspection ("Sbirciare")
- [ ] 4.1 Definire il rendering visivo compatto dei moduli personalizzati come Integrated Circuit (IC box con pin layout e label)
- [ ] 4.2 Implementare l'evento di interazione (click/doppio-click o pulsante "Inspect") sul blocco del modulo nel diagramma
- [ ] 4.3 Creare il componente overlay/modal di anteprima per visualizzare lo schematico interno del sottomodulo senza abbandonare il canvas principale
- [ ] 4.4 Verificare l'interazione grafica e il re-rendering dei circuiti annidati

### Task Group 5: Automated Verification & Documentation
- [ ] 5.1 Redigere la guida documentale per i docenti (`docs/custom-libraries.md`) sull'uso dell'API OOP e packaging delle librerie
- [ ] 5.2 Eseguire l'intera suite di test con `npm test` garantendo 0 fallimenti e copertura dei nuovi moduli
- [ ] 5.3 Eseguire la build completa (`npm run build-lib` e `npm run prod`)
- [ ] 5.4 Eseguire walkthrough manuale su circuiti demo multi-modulo con ispezione gerarchica
