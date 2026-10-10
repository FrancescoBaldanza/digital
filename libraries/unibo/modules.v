// =============================================================================
// UniBo Digital Components Verilog Library for DigitalJS
// Compatible with Yosys synthesis, IDE language servers, and DigitalJS preview.
// =============================================================================

`ifndef UNIBO_MODULES_V
`define UNIBO_MODULES_V

// --- Flip-Flops ---

module FFD (
    input  wire clk,
    input  wire d,
    input  wire rst,
    output reg  q,
    output wire qn
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            q <= 1'b0;
        else
            q <= d;
    end
    assign qn = ~q;
endmodule

module FF_D (
    input wire clk,
    input wire d,
    input wire clr,
    input wire rst,
    output reg q,
    output wire qn
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            q <= 1'b0;
        else if (clr)
            q <= 1'b0;
        else
            q <= d;
    end
    assign qn = ~q;
endmodule

module \FF-D (
    input wire CK,
    input wire D,
    input wire RESET,
    input wire CLR,
    input wire SET,
    output reg Q,
    output wire QN
);
    always @(posedge CK or posedge RESET) begin
        if (RESET)
            Q <= 1'b0;
        else if (CLR)
            Q <= 1'b0;
        else if (SET)
            Q <= 1'b1;
        else
            Q <= D;
    end
    assign QN = ~Q;
endmodule

module FFT (
    input wire clk,
    input wire t,
    input wire rst,
    input wire pre,
    output reg q,
    output wire qn
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            q <= 1'b0;
        else if (pre)
            q <= 1'b1;
        else if (t)
            q <= ~q;
    end
    assign qn = ~q;
endmodule

module \FF-T (
    input wire CK,
    input wire T,
    input wire RESET,
    input wire PRE,
    output reg Q,
    output wire QN
);
    always @(posedge CK or posedge RESET) begin
        if (RESET)
            Q <= 1'b0;
        else if (PRE)
            Q <= 1'b1;
        else if (T)
            Q <= ~Q;
    end
    assign QN = ~Q;
endmodule

// --- Latches ---

module LatchD (
    input wire en,
    input wire d,
    output reg q,
    output wire qn
);
    always @(*) begin
        if (en)
            q = d;
    end
    assign qn = ~q;
endmodule

module \Latch-D (
    input wire C,
    input wire D,
    output reg Q,
    output wire QN
);
    always @(*) begin
        if (C)
            Q = D;
    end
    assign QN = ~Q;
endmodule

module LatchSR (
    input wire s,
    input wire r,
    output reg q,
    output wire qn
);
    always @(*) begin
        if (s && !r)
            q = 1'b1;
        else if (!s && r)
            q = 1'b0;
    end
    assign qn = ~q;
endmodule

module \Latch-SR (
    input wire S,
    input wire R,
    output reg Q,
    output wire QN
);
    always @(*) begin
        if (S && !R)
            Q = 1'b1;
        else if (!S && R)
            Q = 1'b0;
    end
    assign QN = ~Q;
endmodule

// --- Registri e Contatori ---

// Standard 7-bit Up/Down Synchronous Counter with asynchronous reset
module Counter (
    input wire clk,
    input wire en,
    input wire ld,
    input wire u_d,
    input wire [6:0] in,
    input wire rst,
    output reg [6:0] q
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            q <= 7'b0;
        else if (ld)
            q <= in;
        else if (en) begin
            if (u_d)
                q <= q + 7'd1;
            else
                q <= q - 7'd1;
        end
    end
endmodule

// 7-bit Counter con solo Enable (nessun reset)
module CounterEn (
    input wire clk,
    input wire en,
    output reg [6:0] q
);
    initial q = 7'b0;
    always @(posedge clk) begin
        if (en)
            q <= q + 7'd1;
    end
endmodule

// 7-bit Counter con solo Reset (nessun enable)
module CounterRst (
    input wire clk,
    input wire rst,
    output reg [6:0] q
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            q <= 7'b0;
        else
            q <= q + 7'd1;
    end
endmodule

// 7-bit Counter con Enable e Reset asincrono prioritario
module CounterEnRst (
    input wire clk,
    input wire en,
    input wire rst,
    output reg [6:0] q
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            q <= 7'b0;
        else if (en)
            q <= q + 7'd1;
    end
endmodule

// 7-bit Counter sincrono con Enable prioritario a Reset
module CounterEnPriorRst (
    input wire clk,
    input wire en,
    input wire rst,
    output reg [6:0] q
);
    always @(posedge clk) begin
        if (en)
            q <= q + 7'd1;
        else if (rst)
            q <= 7'b0;
    end
endmodule

// 7-bit Counter sincrono con Reset prioritario a Enable
module CounterRstPriorEn (
    input wire clk,
    input wire en,
    input wire rst,
    output reg [6:0] q
);
    always @(posedge clk) begin
        if (rst)
            q <= 7'b0;
        else if (en)
            q <= q + 7'd1;
    end
endmodule

module Register (
    input wire clk,
    input wire we,
    input wire [7:0] in,
    input wire rst,
    output reg [7:0] out
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            out <= 8'b0;
        else if (we)
            out <= in;
    end
endmodule

module ShiftRegister (
    input wire clk,
    input wire in,
    input wire rst,
    output reg [7:0] out
);
    always @(posedge clk or posedge rst) begin
        if (rst)
            out <= 8'b0;
        else
            out <= {out[6:0], in};
    end
endmodule

// --- Combinatori ---

module HalfAdder (
    input wire a,
    input wire b,
    output wire s,
    output wire cout
);
    assign s = a ^ b;
    assign cout = a & b;
endmodule

module FullAdder (
    input wire a,
    input wire b,
    input wire cin,
    output wire s,
    output wire cout
);
    wire s1, c1, c2;
    HalfAdder ha1 (.a(a), .b(b), .s(s1), .cout(c1));
    HalfAdder ha2 (.a(s1), .b(cin), .s(s), .cout(c2));
    assign cout = c1 | c2;
endmodule

module Mux2 (
    input  wire d0,
    input  wire d1,
    input  wire sel,
    output wire y
);
    wire not_sel = ~sel;
    wire w0 = d0 & not_sel;
    wire w1 = d1 & sel;
    assign y = w0 | w1;
endmodule

module Adder (
    input wire [7:0] a,
    input wire [7:0] b,
    input wire cin,
    output wire [7:0] s,
    output wire cout
);
    wire [8:0] sum = a + b + cin;
    assign s = sum[7:0];
    assign cout = sum[8];
endmodule

module Decoder (
    input wire [2:0] a,
    output wire [7:0] u
);
    assign u = 8'd1 << a;
endmodule

module ALU (
    input wire [7:0] a,
    input wire [7:0] b,
    input wire [2:0] op,
    output wire [7:0] y,
    output wire [3:0] flag
);
    reg [8:0] res;
    always @(*) begin
        case (op)
            3'b000: res = a + b;
            3'b001: res = a - b;
            3'b010: res = {1'b0, a & b};
            3'b011: res = {1'b0, a | b};
            3'b100: res = {1'b0, a ^ b};
            3'b101: res = {1'b0, ~a};
            3'b110: res = {1'b0, a << 1};
            3'b111: res = {1'b0, a >> 1};
            default: res = 9'b0;
        endcase
    end

    assign y = res[7:0];
    assign flag[0] = (res[7:0] == 8'b0);
    assign flag[1] = res[8];
    assign flag[2] = res[7];
    assign flag[3] = (op == 3'b000 && ((a[7] == b[7]) && (res[7] != a[7]))) ||
                     (op == 3'b001 && ((a[7] != b[7]) && (res[7] != a[7])));
endmodule

// --- Memorie ---

module ROM (
    input wire [2:0] addr,
    output reg [7:0] data
);
    always @(*) begin
        case (addr)
            3'b000: data = 8'h01;
            3'b001: data = 8'h02;
            3'b010: data = 8'h04;
            3'b011: data = 8'h08;
            3'b100: data = 8'h10;
            3'b101: data = 8'h20;
            3'b110: data = 8'h40;
            3'b111: data = 8'h80;
            default: data = 8'h00;
        endcase
    end
endmodule

`endif
