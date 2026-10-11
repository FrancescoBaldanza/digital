# Validation Criteria: Phase 2 — Moduli Personalizzati

Defines how to verify the implementation succeeded before merging into the main branch.

---

## 1. Automated Verification
Run the following automated commands in the project root:

| Check | Command | Expected Outcome |
| :--- | :--- | :--- |
| **Test Suite** | `npm test` | All test suites pass (including new tests for Module API and Library Registry) |
| **Transpilation Build** | `npm run build-lib` | Clean Babel build from `src/` to `lib/` without syntax or resolution errors |
| **Bundle Build** | `npm run prod` | Clean Webpack production build generating `dist/` bundles without warnings |

### Specific Test Assertions
- [ ] **OOP Module API:** Creazione di un modulo con input, output e shape personalizzata; verifica che `module.serialize()` e la validazione dei pin sollevino errori per configurazioni incoerenti o nomi mancanti.
- [ ] **Library Registry:** Registrazione di una libreria da directory esterna; verifica che il resolver trovi correttamente i moduli esportati e fornisca i corretti include path per la sintesi.
- [ ] **UniBo Components:** Sintesi Verilog e istanziazione corretta dei componenti UniBo in `src/libraries/unibo/modules.v` senza errori di parsing Yosys.
- [ ] **Multi-File Includes:** Compilazione di un circuito Verilog che include file multipli tramite `\`include\`` e generazione corretta della gerarchia nel modello Digital.
- [ ] **Subcircuit Inspector:** Verifica che la selezione o ispezione di un modulo IC esponga i dati del sottocircuito interno pronti per il rendering in overlay.

---

## 2. Manual Walkthrough & Acceptance Tests
Step-by-step instructions for human or agent verification:

1. **Step 1: Verifica Librerie Built-in ed Esterne**
   - Eseguire l'applicazione o il bundle web (`npm run dev` / apertura `index.html` o preview plugin).
   - Verificare che i componenti della libreria `unibo` compaiano tra i moduli disponibili e possano essere istanziati nel codice Verilog.

2. **Step 2: Sintesi e Rendering IC del Modulo Custom**
   - Nel Verilog editor, scrivere un circuito che istanzia un modulo personalizzato (es. da libreria UniBo o da file incluso).
   - Premere **Compile**: verificare che il modulo appaia nel canvas come IC compatto con porte nominate e connesse.

3. **Step 3: Ispezione Gerarchica ("Sbirciare" nel Circuito)**
   - Fare click o doppio-click sul blocco del modulo custom nel diagramma.
   - Verificare che si apra l'overlay/modal interattivo mostrando lo schematico interno dettagliato del componente senza perdere lo stato del canvas principale.
   - Chiudere l'overlay e verificare che la simulazione / interazione sul circuito principale continui normalmente.

4. **Step 4: Gestione Errori e Casi Limite**
   - Testare l'inclusione di una libreria inesistente o di un modulo malformato; verificare che l'interfaccia mostri un messaggio d'errore chiaro e didattico senza crash dell'applicazione.

---

## 3. Definition of Done
The phase is considered complete when:
- [ ] Tutti i task in [`plan.md`](file:///Users/francescobaldanza/CLionProjects/digital/specs/2026-10-11-custom-modules/plan.md) sono completati e contrassegnati con `[x]`
- [ ] La suite di test `npm test` passa con 0 errori
- [ ] Le build `npm run build-lib` e `npm run prod` terminano con successo
- [ ] La guida didattica per professori (`docs/custom-libraries.md`) è scritta e chiara
- [ ] I criteri di accettazione manuale sopra elencati sono verificati
- [ ] Nessun file temporaneo non tracciato nel repository (`git status` pulito)
