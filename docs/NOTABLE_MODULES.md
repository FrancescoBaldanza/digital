# DigitalJS Notable Modules Reference

Concise technical specification and parameter reference for all built-in notable modules with strict type safety and `#F58A3C` visual styling.

---

## 1. Sequential Components

### `CLK` / `Clock`
Clock generator producing a branded `ClockSignal` required by all synchronous elements.
* **Constructor Options / Device Parameters**:
  * `propagation` *(number, default: `100`)*: Clock period / propagation delay in simulation steps.
* **Ports**:
  * `out` *(output, 1-bit, type: `clock`)*: Clock signal output.

---

### `FFD` / `FF_D` / `DFF`
Positive edge-triggered D flip-flop with asynchronous reset/clear options.
* **Constructor Options / Device Parameters**:
  * `clock` *(CLK | ClockSignal, **required**)*: Clock driver (must be an instance of `CLK` or `ClockSignal`).
  * `d` / `in` *(Signal | Port, **required**)*: Data input signal matching `bits`.
  * `bits` *(number, default: `1`)*: Bus width of the data and output lines.
  * `initial` *(string, default: `'x'`)*: Initial state vector (`'0'`, `'1'`, or `'x'`).
  * `clockPolarity` *(boolean, default: `true`)*: Trigger edge (`true` for rising edge).
  * `hasQn` *(boolean, default: `true`)*: Whether inverted output `~Q` is enabled.
  * `rst` / `arst` *(Signal | Port, optional)*: Asynchronous active-high reset (placed at the bottom).
  * `clr` / `set` *(Signal | Port, optional)*: Asynchronous clear/preset (placed at the top).
* **Ports**:
  * `clk` *(input, 1-bit, type: `clock`)*: Clock pin (CK).
  * `in` / `d` *(input, `bits`, type: `signal`)*: D input.
  * `out` / `q` *(output, `bits`, type: `signal`)*: Q output.
  * `out_n` / `qn` *(output, `bits`, type: `signal`)*: Inverted $\overline{\text{Q}}$ output.
  * `rst` *(input, 1-bit)*: Asynchronous reset.
  * `clr` *(input, 1-bit)*: Asynchronous clear.

---

### `FFT` / `FF_T`
Positive edge-triggered T (Toggle) flip-flop.
* **Constructor Options / Device Parameters**:
  * `clock` *(CLK | ClockSignal, **required**)*: Clock driver (enforced `ClockSignal`).
  * `t` *(Signal | Port, **required**)*: 1-bit toggle control input.
  * `initial` *(string, default: `'0'`)*: Initial output value.
  * `arst` / `rst` *(Signal | Port, optional)*: Active-low asynchronous reset (`A_RESET'`).
  * `pre` / `set` *(Signal | Port, optional)*: Active-low asynchronous preset (`PRE'`).
* **Ports**:
  * `clk` *(input, 1-bit, type: `clock`)*: Clock input.
  * `t` *(input, 1-bit)*: Toggle input.
  * `q` *(output, 1-bit)*: Q output.
  * `qn` *(output, 1-bit)*: Inverted $\overline{\text{Q}}$ output.
  * `arst` *(input, 1-bit, optional)*: Active-low reset.
  * `pre` *(input, 1-bit, optional)*: Active-low preset.

---

### `LatchD` / `Latch_D`
Transparent level-sensitive D latch.
* **Constructor Options / Device Parameters**:
  * `c` / `en` *(Signal | Port, **required**)*: 1-bit latch enable / control line.
  * `d` *(Signal | Port, **required**)*: Data input matching `bits`.
  * `bits` *(number, default: `1`)*: Data width.
  * `initial` *(string, default: `'0'`)*: Initial stored state.
* **Ports**:
  * `c` *(input, 1-bit)*: Enable / latch control.
  * `d` *(input, `bits`)*: Data input.
  * `q` *(output, `bits`)*: Q output.
  * `qn` *(output, `bits`)*: Inverted $\overline{\text{Q}}$ output.

---

### `LatchSR` / `Latch_SR`
Basic Set-Reset transparent latch.
* **Constructor Options / Device Parameters**:
  * `s` *(Signal | Port, **required**)*: 1-bit Set input.
  * `r` *(Signal | Port, **required**)*: 1-bit Reset input.
  * `initial` *(string, default: `'0'`)*: Initial output value.
* **Ports**:
  * `s` *(input, 1-bit)*: Set input.
  * `r` *(input, 1-bit)*: Reset input.
  * `q` *(output, 1-bit)*: Q output.
  * `qn` *(output, 1-bit)*: Inverted $\overline{\text{Q}}$ output.

---

### `Counter`
Synchronous modulo-$M$ binary up/down counter with parallel load.
* **Constructor Options / Device Parameters**:
  * `clock` *(CLK | ClockSignal, **required**)*: Clock driver.
  * `bits` *(number, default: `7`)*: Counter bitwidth ($k$).
  * `modulo` *(number, default: $2^k$)*: Modulo count limit ($1 \le M \le 2^k$). Throws `ConstraintViolationError` if $M > 2^k$.
  * `en` *(Signal | Port, optional)*: Count enable (1 bit).
  * `ld` *(Signal | Port, optional)*: Parallel load enable (1 bit).
  * `ud` / `u_d` *(Signal | Port, optional)*: Up/Down direction (`1` = Up, `0` = Down).
  * `in` *(Signal | Port, optional)*: $k$-bit parallel data load input.
  * `arst` / `rst` *(Signal | Port, optional)*: Active-low asynchronous reset (`A_RESET'`).
* **Ports**:
  * `clk` *(input, 1-bit, type: `clock`)*: Clock input.
  * `en` *(input, 1-bit)*: Count enable.
  * `ld` *(input, 1-bit)*: Synchronous load enable.
  * `u_d` *(input, 1-bit)*: Direction control.
  * `in` *(input, `bits`)*: Parallel load vector `IN[k-1..0]`.
  * `arst` *(input, 1-bit)*: Active-low reset `A_RESET'`.
  * `q` *(output, `bits`)*: Counter output vector `Q[k-1..0]`.

---

### `Register`
Parallel-in parallel-out (PIPO) storage register with write enable.
* **Constructor Options / Device Parameters**:
  * `clock` *(CLK | ClockSignal, **required**)*: Clock driver.
  * `bits` *(number, default: `8`)*: Data bus bitwidth ($k$).
  * `we` *(Signal | Port, **required**)*: Write enable control (1 bit).
  * `in` *(Signal | Port, **required**)*: $k$-bit input vector (throws `BitwidthMismatchError` if width $\ne k$).
  * `arst` / `rst` *(Signal | Port, optional)*: Asynchronous reset (1 bit).
* **Ports**:
  * `clk` *(input, 1-bit, type: `clock`)*: Clock input.
  * `we` *(input, 1-bit)*: Write enable.
  * `in` *(input, `bits`)*: Data input vector `IN[k-1..0]`.
  * `arst` *(input, 1-bit)*: Asynchronous reset.
  * `out` *(output, `bits`)*: Stored data output vector `OUT[k-1..0]`.

---

### `ShiftRegister`
Serial-in parallel-out (SIPO) shift register.
* **Constructor Options / Device Parameters**:
  * `clock` *(CLK | ClockSignal, **required**)*: Clock driver.
  * `bits` *(number, default: `8`)*: Shift depth / output bitwidth ($k$).
  * `in` *(Signal | Port, **required**)*: Serial bit input (1 bit).
  * `arst` / `rst` *(Signal | Port, optional)*: Asynchronous reset (1 bit).
* **Ports**:
  * `clk` *(input, 1-bit, type: `clock`)*: Clock input.
  * `in` *(input, 1-bit)*: Serial data bit.
  * `arst` *(input, 1-bit)*: Asynchronous reset.
  * `out` *(output, `bits`)*: Parallel output vector `OUT[k-1..0]`.

---

## 2. Combinational & Arithmetic Components

### `Decoder`
$n$-to-$2^n$ one-hot address decoder.
* **Constructor Options / Device Parameters**:
  * `n` *(number, default: `3`)*: Number of address select bits ($n$).
  * `inputs` *(Array<Signal | Port>, optional)*: Array of $n$ address input signals.
  * `outputs` *(Array<Signal>, optional)*: Array of $2^n$ outputs. Throws `ConstraintViolationError` if length $\ne 2^n$.
* **Ports**:
  * `a0` .. `a{n-1}` *(inputs, 1-bit each)*: Address lines.
  * `u0` .. `u{2^n-1}` *(outputs, 1-bit each)*: Decoded one-hot lines.

---

### `Multiplexer` / `NotableMux` / `MUX`
$2^s$-to-1 trapezoidal data multiplexer.
* **Constructor Options / Device Parameters**:
  * `selBits` *(number, default: `1`)*: Number of select bits ($s$).
  * `bits` *(number, default: `1`)*: Bitwidth of each data input and the output.
  * `sel` *(Signal | Port, optional)*: $s$-bit selection bus or 1-bit signal.
  * `inputs` *(Array<Signal | Port>, optional)*: Array of data inputs. Throws `ConstraintViolationError` if length $\ne 2^s$.
  * `in0`, `in1` *(Signal | Port, optional)*: Convenience direct inputs for 2:1 multiplexers.
* **Ports**:
  * `sel` *(input, `selBits`)*: Select line `A`.
  * `in0` .. `in{2^s-1}` *(inputs, `bits` each)*: Data inputs $I_0 \dots I_{2^s-1}$.
  * `out` *(output, `bits`)*: Selected data output $Z$.

---

### `HalfAdder`
1-bit Half Adder cell.
* **Constructor Options / Device Parameters**:
  * `a` *(Signal | Port, optional)*: First 1-bit operand.
  * `b` *(Signal | Port, optional)*: Second 1-bit operand.
* **Ports**:
  * `a` *(input, 1-bit)*: Input operand $a$.
  * `b` *(input, 1-bit)*: Input operand $b$.
  * `s` *(output, 1-bit)*: Sum output ($a \oplus b$).
  * `r` *(output, 1-bit)*: Carry output ($a \cdot b$).

---

### `FullAdder`
1-bit Full Adder with carry-in.
* **Constructor Options / Device Parameters**:
  * `a` *(Signal | Port, optional)*: First 1-bit operand.
  * `b` *(Signal | Port, optional)*: Second 1-bit operand.
  * `cin` / `rin` *(Signal | Port, optional)*: Carry-in bit.
* **Ports**:
  * `a` *(input, 1-bit)*: Input operand $a_i$.
  * `b` *(input, 1-bit)*: Input operand $b_i$.
  * `cin` *(input, 1-bit)*: Carry-in $r_i$.
  * `s` *(output, 1-bit)*: Sum output $s_i$.
  * `cout` *(output, 1-bit)*: Carry-out $r_{i+1}$.

---

### `Adder` / `NotableAdder`
$n$-bit Ripple-carry Adder with carry-in and carry-out.
* **Constructor Options / Device Parameters**:
  * `bits` *(number, default: `8`)*: Word bitwidth ($n$).
  * `a` *(Signal | Port, optional)*: $n$-bit operand $A$ (validated against `bits`).
  * `b` *(Signal | Port, optional)*: $n$-bit operand $B$ (validated against `bits`).
  * `cin` *(Signal | Port, optional)*: 1-bit carry-in.
* **Ports**:
  * `a` *(input, `bits`)*: Vector $A[n-1..0]$.
  * `b` *(input, `bits`)*: Vector $B[n-1..0]$.
  * `cin` *(input, 1-bit)*: Carry-in $c_{in}$.
  * `s` *(output, `bits`)*: Sum vector $S[n-1..0]$.
  * `cout` *(output, 1-bit)*: Carry-out $c_{out}$.

---

### `ALU`
Arithmetic Logic Unit with classic V-notch symbol and condition flags.
* **Constructor Options / Device Parameters**:
  * `bits` *(number, default: `8`)*: Data width ($n$).
  * `opBits` *(number, default: `3`)*: Op-code bitwidth (default: 3 bits for 8 operations).
  * `a` *(Signal | Port, optional)*: $n$-bit operand $A$.
  * `b` *(Signal | Port, optional)*: $n$-bit operand $B$.
  * `op` *(Signal | Port, optional)*: $k$-bit op-code.
* **Operations**:
  * `0`: ADD ($A + B$)
  * `1`: SUB ($A - B$)
  * `2`: AND ($A \ \& \ B$)
  * `3`: OR ($A \ | \ B$)
  * `4`: XOR ($A \oplus B$)
  * `5`: NOT A ($\sim A$)
  * `6`: SLL ($A \ll 1$)
  * `7`: SRL ($A \gg 1$)
* **Ports**:
  * `a` *(input, `bits`)*: Operand $A$ (top-left).
  * `b` *(input, `bits`)*: Operand $B$ (top-right).
  * `op` *(input, `opBits`)*: Control op-code (right).
  * `y` *(output, `bits`)*: ALU result vector $Y$ (bottom-left).
  * `flag` *(output, 4-bit)*: Status flags `[Zero, Carry, Overflow, Negative]` (bottom-right).

---

### `ROM`
Read-Only Memory ($2^n \times k$) matrix.
* **Constructor Options / Device Parameters**:
  * `addrBits` *(number, default: `3`)*: Address bitwidth ($n$). Capacity is $2^n$ words.
  * `dataBits` *(number, default: `8`)*: Word bitwidth ($k$). Max word value is $2^k - 1$.
  * `contents` *(Array<number>, default: `[]`)*: Array of stored numeric words. Throws `ConstraintViolationError` if `length > 2^addrBits` or if any entry $> 2^{dataBits} - 1$.
  * `addr` *(Signal | Port, optional)*: $n$-bit address signal.
* **Ports**:
  * `addr` *(input, `addrBits`)*: Address vector $A[n-1..0]$.
  * `data` *(output, `dataBits`)*: Output data vector $D[k-1..0]$ (placed at bottom).
