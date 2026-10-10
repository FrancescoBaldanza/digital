module top (
    input wire clk,
    input wire data_in,
    input wire rst,
    output wire q_out,
    output wire qn_out
);

    FFD FFD (
        .clock(clk),
        .d(data_in),
        .rst(rst),
        .out(q_out),
        .out_n(qn_out)
    );
endmodule