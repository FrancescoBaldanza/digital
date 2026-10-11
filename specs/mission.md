# Project Mission: digitaljs

## Vision
Un tool open-source per scrivere, visualizzare e simulare reti logiche tramite Verilog, pensato per studenti universitari che studiano reti logiche e per professori che vogliono adottarlo come strumento didattico moderno.

## Target Audience
- **Primary Users:** Studenti universitari che studiano reti logiche e vogliono scrivere Verilog per visualizzare e simulare i circuiti invece di disegnarli a mano.
- **Secondary Users:** Professori che preparano librerie di moduli personalizzati e vogliono adottare il tool per insegnare, richiedendo agli studenti di consegnare reti logiche via Verilog invece di disegni a matita.
- **Key Beneficiaries / Stakeholders:** La comunità accademica di ingegneria informatica, in particolare l'Università di Bologna (UniBo) dove il progetto nasce.

## Core Value Proposition
- **Scrittura dichiarativa:** Gli studenti scrivono Verilog e vedono immediatamente la rete logica visualizzata, eliminando la necessità di disegni manuali.
- **Librerie modulari:** I professori possono definire librerie di moduli personalizzati con una semplice API OOP, riutilizzabili tra corsi e studenti.
- **Simulazione didattica:** Il tool mostra il comportamento della rete, inclusi metastati e alee, aiutando gli studenti a comprendere i concetti teorici in modo pratico.

## Non-Goals & Scope Boundaries
- **Supporto FPGA/hardware fisico:** Il progetto non programma FPGA né si interfaccia con hardware fisico. I file Verilog sono usati esclusivamente come testo per definire moduli di rete.
- **Linguaggi diversi da Verilog:** Il supporto per altri linguaggi HDL (VHDL, SystemVerilog) arriverà solo dopo che Verilog funziona completamente e soddisfa tutti gli obiettivi.
- **Prime iterazioni senza metastati/alee:** La simulazione di metastati e alee è parte della roadmap ma non è richiesta nelle prime fasi; il prodotto deve essere funzionale prima di proporlo ai professori.

## Guiding Principles & Tone
- **Tone & Style:** Accademico & Minimalista — design pulito e sobrio, focalizzato sulla chiarezza didattica.
- **Design Philosophy:** L'interfaccia deve essere sobria, senza distrazioni visive. La priorità è la leggibilità del codice Verilog, la chiarezza del diagramma della rete e la correttezza della simulazione.
