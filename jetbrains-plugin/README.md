# DigitalJS Verilog Preview Plugin for JetBrains IDEs

Plugin JetBrains per l'anteprima interattiva in tempo reale di codice Verilog (`.v`, `.sv`) basata su **DigitalJS** e **Yosys**, con layout split-editor in stile Markdown.

---

## Caratteristiche

*   **Split Editor (Stile Markdown Preview):** Quando apri un file `.v` o `.sv`, l'editor visualizza la barra superiore con le modalità:
    *   **Editor only** (Solo codice)
    *   **Split (Editor & Preview)** (Codice a sinistra, simulazione a destra)
    *   **Preview only** (Solo simulazione a tutto schermo)
*   **Live Simulation & Reattività:**
    *   Ogni modifica al file Verilog viene sintetizzata automaticamente con debounce di 400ms.
    *   I segnali si aggiornano in tempo reale.
*   **Controlli Interattivi integrati:**
    *   Pulsanti ▶️ Run, ⏸️ Pause, 🔄 Reset
    *   Zoom In (+), Zoom Out (-), ⛶ Fit to Screen
    *   Modalità Fixed / Draggable dei componenti
    *   Stato di compilazione (🟢 Ready, 🟡 Synthesizing..., 🔴 Syntax Error con banner dettagliato)
*   **Zero configurazione:**
    *   Rileva automaticamente `node` e `yosys` installati nel sistema (Homebrew, `/opt/homebrew/bin`, `/usr/local/bin`, o `PATH`).

---

## Installazione e Test Rapido

### 1. Build & Installazione Automatica
Dal terminale nella root del repository `digitaljs`:
```bash
npm run build-plugin
```
Questo comando compila il plugin e lo copia automaticamente nella cartella plugin delle installazioni locali di **WebStorm 2026.2** e **CLion 2026.2**:
*   `~/Library/Application Support/JetBrains/WebStorm2026.2/plugins/digitaljs-preview`
*   `~/Library/Application Support/JetBrains/CLion2026.2/plugins/digitaljs-preview`

### 2. Test in WebStorm o CLion
1. Riavvia WebStorm (o fai *File -> Invalidate Caches / Restart*).
2. Apri `examples/test_circuit.v`.
3. In alto a destra dell'editor appariranno i tasti di split preview.
4. Clicca sull'icona **Split**: vedrai il circuito del Flip-Flop D con clock oscillante, ingressi CLR, RESET, D e uscite Q, ~Q pronte per l'interazione!
