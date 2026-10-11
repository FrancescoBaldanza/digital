// =============================================================================
// test-library.v
// Circuito di test completo per la verifica utente della libreria UniBo in Digital.
// 
// Include componenti sequenziali e combinatori interconnessi:
// - Counter: Contatore sincrono a 7 bit con enable e reset
// - ALU: Unità Aritmetico-Logica a 8 bit con flag di stato
// - Decoder: Decodificatore 3-to-8
// - Mux2: Multiplexer 2-a-1
// - FFD: Flip-Flop D con reset asincrono
// - FullAdder: Sommatore completo a 1 bit
//
// Istruzioni per la verifica visiva nell'IDE / Web Preview:
// 1. Apri questo file o compilalo nel preview di Digital.
// 2. Osserva i blocchi dei moduli custom renderizzati come Integrated Circuits (IC).
// 3. Fai doppio-click (o clicca sull'icona della lente) su qualsiasi modulo (es. ALU o Counter)
//    per ispezionare ("sbirciare") lo schematico logico interno senza uscire dal canvas principale.
// =============================================================================

`include "unibo.v"

module TestLibrarySystem (
    input  wire        clk,          // Segnale di clock principale
    input  wire        rst,          // Reset globale del sistema
    input  wire        cnt_en,       // Abilitazione contatore
    input  wire [7:0]  data_in,      // Bus dati in ingresso
    input  wire [2:0]  alu_op,       // Codice operazione ALU (000: Add, 001: Sub, 010: AND, ecc.)
    input  wire        mux_select,   // Selettore del multiplexer
    output wire [6:0]  counter_val,  // Valore corrente del contatore a 7-bit
    output wire [7:0]  alu_out,      // Risultato dell'elaborazione ALU
    output wire [3:0]  alu_flags,    // Flag ALU: [0]=Zero, [1]=Carry, [2]=Sign, [3]=Overflow
    output wire [7:0]  decoder_out,  // Uscite del decodificatore 3-to-8
    output wire        latched_zero, // Flag Zero memorizzato nel Flip-Flop D
    output wire        latched_carry,// Flag Carry memorizzato nel Flip-Flop D con identificatore escaped (\FF-D)
    output wire        adder_sum,    // Somma di test a 1-bit
    output wire        adder_cout,   // Riporto di test a 1-bit
    output wire        mux_out       // Uscita del multiplexer 2-a-1
);

    // -------------------------------------------------------------------------
    // 1. Modulo Sequenziale: Contatore a 7-bit con Enable e Reset
    // -------------------------------------------------------------------------
    CounterEnRst u_counter (
        .clk(clk),
        .en(cnt_en),
        .rst(rst),
        .q(counter_val)
    );

    // Estensione del contatore a 8 bit per alimentare l'operando B dell'ALU
    wire [7:0] counter_extended = {1'b0, counter_val};

    // -------------------------------------------------------------------------
    // 2. Modulo Combinatorio Complesso: ALU a 8-bit
    // -------------------------------------------------------------------------
    ALU u_alu (
        .a(data_in),
        .b(counter_extended),
        .op(alu_op),
        .y(alu_out),
        .flag(alu_flags)
    );

    // -------------------------------------------------------------------------
    // 3. Modulo di Memorizzazione: Flip-Flop D per campionare il flag Zero dell'ALU
    // -------------------------------------------------------------------------
    FFD u_ffd_zero (
        .clk(clk),
        .d(alu_flags[0]), // alu_flags[0] è il flag Zero
        .rst(rst),
        .q(latched_zero),
        .qn()             // Uscita complementare non utilizzata
    );

    // Modulo con Identificatore Verilog Escaped (\FF-D) per campionare il flag Carry
    \FF-D u_escaped_ffd (
        .CK(clk),
        .D(alu_flags[1]),
        .RESET(rst),
        .CLR(1'b0),
        .SET(1'b0),
        .Q(latched_carry),
        .QN()
    );

    // -------------------------------------------------------------------------
    // 4. Modulo Combinatorio: Decodificatore 3-to-8 pilotato dal selettore ALU
    // -------------------------------------------------------------------------
    Decoder u_decoder (
        .a(alu_op),
        .u(decoder_out)
    );

    // -------------------------------------------------------------------------
    // 5. Modulo Combinatorio: Sommatore completo a 1-bit (FullAdder)
    // -------------------------------------------------------------------------
    FullAdder u_full_adder (
        .a(data_in[0]),
        .b(counter_val[0]),
        .cin(alu_flags[1]), // Riporto dell'ALU come cin
        .s(adder_sum),
        .cout(adder_cout)
    );

    // -------------------------------------------------------------------------
    // 6. Modulo di Selezione: Multiplexer 2-a-1
    // -------------------------------------------------------------------------
    Mux2 u_mux (
        .d0(alu_out[0]),
        .d1(adder_sum),
        .sel(mux_select),
        .y(mux_out)
    );

endmodule
