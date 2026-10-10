// Circuito di test dimostrativo:
// Combina porte logiche native Verilog (AND, OR, NOT, XOR)
// e moduli custom della libreria UniBo (FFD, FullAdder).

`include "unibo.v"

module test (
    input  wire clk,
    input  wire in_a,
    input  wire in_b,
    input  wire in_c,
    input  wire rst,
    output wire and_out,
    output wire or_out,
    output wire xor_out,
    output wire sum_out,
    output wire carry_out,
    output wire q_out,
    output wire qn_out
);

    // 1. Connessioni logiche native Verilog (Porte elementari)
    assign and_out = in_a & in_b;
    assign or_out  = in_b | in_c;
    assign xor_out = in_a ^ in_c ^ in_b;

    // 2. Modulo custom UniBo: FullAdder
    //    Somma in_a, in_b e in_c con generazione di somma e riporto
    FullAdder adder_inst (
        .a(in_a),
        .b(in_b),
        .cin(in_c),
        .s(sum_out),
        .cout(carry_out)
    );

    // 3. Modulo custom UniBo: Flip-Flop D (FFD)
    //    Campiona il risultato dell'AND sul fronte di salita del clock
    FFD dff_inst (
        .clk(clk),
        .d(and_out),
        .rst(rst),
        .q(q_out),
        .qn(qn_out)
    );

endmodule
