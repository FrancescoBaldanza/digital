# Validation Criteria: Phase 3 — Miglioramenti UI

Defines how to verify the implementation succeeded before merging into the main branch.

---

## 1. Automated Verification
Run the following automated commands in the project root:

| Check | Command | Expected Outcome |
| :--- | :--- | :--- |
| **Test Suite** | `npm test` | All test suites pass (including new unit/integration tests for recursive gate merging and pin mapping) |
| **Transpilation Build** | `npm run build-lib` | Clean Babel build from `src/` to `lib/` without syntax or resolution errors |
| **Bundle Build** | `npm run prod` | Clean Webpack production build generating `dist/` bundles without warnings or errors |

### Specific Test Assertions
- [ ] **Recursive Gate Merging:** Data una sequenza di gate XOR concatenati (es. 3 gate binari a cascata), la trasformazione produce un unico gate XOR a 4 ingressi con i segnali di ingresso originali preservati nell'ordine corretto.
- [ ] **Large Gate Chaining (20+ inputs):** Una cascata estesa (es. 20 ingressi) viene accorpata in un unico gate con 20 ingressi geometricamente equispaziati e collegamenti coerenti.
- [ ] **Associative Gates Compatibility:** L'algoritmo opera correttamente anche su catene di gate AND, OR, NAND, NOR senza alterare la semantica logica né generare loop.
- [ ] **Zero-Distance Layout:** Verifica che la distanza tra gate collegati direttamente o in cascata sia impostata a 0 pixel, garantendo continuità visiva.
- [ ] **Compiler Dirty State Management:** La modifica di un buffer Verilog imposta il flag `isDirty = true` ed emette l'evento per la UI; l'invocazione di `compile()` esegue la sintesi e reimposta `isDirty = false`.
- [ ] **Lens Bar Zoom Bounds:** Le operazioni di zoom applicate al canvas JointJS rimangono entro i limiti consentiti (`0.1` min, `5.0` max) e l'operazione `fitToScreen` centra correttamente il bounding box del circuito.

---

## 2. Manual Walkthrough & Acceptance Tests
Step-by-step instructions for human or agent verification:

1. **Step 1: Verifica Bottone Martello & Compilazione On-Demand**
   - Aprire l'applicazione nel browser (`npm run dev` o bundle `dist/`).
   - Verificare che il pulsante di compilazione nella toolbar mostri la nuova icona a martello (*hammer*).
   - Modificare il codice Verilog nell'editor: verificare che il circuito **non** si ricompili automaticamente e che compaia il badge o indicatore "Modificato".
   - Cliccare sul pulsante martello: verificare che la compilazione parta, il diagramma si aggiorni e il badge di modifica scompaia.

2. **Step 2: Verifica Subwindow Ottimizzata**
   - Aprire un circuito contenente moduli o istanziare un modulo personalizzato.
   - Fare doppio click su un modulo per aprire la sottofinestra di ispezione.
   - Verificare che la subwindow si presenti come una card floating moderna con header compatto, pulsante di chiusura "X" pulito e che non vi sia spazio bianco vuoto eccedente attorno al circuito interno.
   - Chiudere la sottofinestra tramite la "X" e verificare la corretta chiusura.

3. **Step 3: Verifica Merging Ricorsivo XOR & Multi-Input Gates**
   - Inserire un file Verilog che definisce una cascata di XOR (es. `assign out = a ^ b ^ c ^ d ^ e;` o istanziazioni multiple).
   - Compilare con il pulsante martello.
   - Verificare sul diagramma che la cascata sia rappresentata da un unico gate XOR compatto con tutti gli ingressi collegati, a distanza zero tra blocchi collegati.

4. **Step 4: Verifica Barra Lente & Navigazione Canvas (Pan/Zoom)**
   - Individuare la floating Lens Bar in alto a destra nel viewport del circuito.
   - Testare i pulsanti Zoom In (`+`), Zoom Out (`-`), Reset (`100%`) e Adatta (`Fit`).
   - Trascinare il canvas con il mouse per verificare il pan fluido.
   - Utilizzare la rotellina del mouse/gesture per verificare lo zoom continuo.

---

## 3. Definition of Done
The phase is considered complete when:
- [ ] Tutti i task in [`plan.md`](file:///Users/francescobaldanza/CLionProjects/digital/specs/2026-10-11-ui-improvements/plan.md) sono completati e contrassegnati con `[x]`
- [ ] La suite di test `npm test` passa con 0 errori
- [ ] Le build `npm run build-lib` e `npm run prod` terminano con successo
- [ ] I criteri di accettazione manuale sopra elencati sono verificati
- [ ] Il codice rispetta lo stile accademico e minimalista
- [ ] Nessun file temporaneo non tracciato nel repository (`git status` pulito)
