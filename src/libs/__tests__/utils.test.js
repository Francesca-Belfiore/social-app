//posso mettere il file di test in una sottocartella chiamata test 
//e chiamarlo con lo stesso nome del file che sto testando, oppure
//crearlo nella stessa cartella e chiamarlo con lo stesso nome del
//file seguito da .test.js (l'inconcina di Js su VS cambia colore), 
//oppure combinare le due cose per avere una cartella con tutti i
//test (più ordinato).

import {greetings} from "../utils";

it("test greetings() function", () => {
    const result = greetings("Salvatore");
    expect(result).toBe("Hello dear Salvatore");
});

it("test greetings() function without parameter", () => {
    const result = greetings();
    expect(result).toBe("Hello dear User");
});

//il toBe vale per valori semplici come stringhe e booleani, per
//testare valori più complessi, tipo gli array, si usa toEqual

it("testing an array", () => {
    const arr = [1,2,3];
    expect(arr).toEqual([1,2,3]);
});

//ci sono dei comandi che in jestjs falliranno sempre, e sono
//tutti quelli legati al browser ed al DOM tipo querySelector,
//fetch ecc perché non esistono queste funzionalità nel server
//che è basato su node. Quando voglio testare una funzionalità
//che non è supportata dall'ambiente node devo usare un'utilità
//che simuli il DOM (in jest se ne occupa Easy Mocking).
//Il creatore originale di Node ha creato "Deno" che è un altro
//linguaggio backend per correggere gli "errori" che ha fatto su
//node, come l'escusione e la gestione delle api legate al DOM.
//(purtroppo è usato davvero poco)