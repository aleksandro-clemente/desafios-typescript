"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
    Trabalho[Trabalho["Programador"] = 2] = "Programador";
    Trabalho[Trabalho["Secretaria"] = 3] = "Secretaria";
    Trabalho[Trabalho["Jardineiro"] = 4] = "Jardineiro";
})(Trabalho || (Trabalho = {}));
;
let pessoa1 = {
    nome: "Maria",
    idade: 25,
    profissao: Trabalho.Secretaria
};
let pessoa2 = {
    nome: "Roberto",
    idade: 18,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Trabalho.Programador
};
let pessoa4 = {
    nome: "Carlos",
    idade: 27,
    profissao: Trabalho.Jardineiro
};
let pessoa5 = {
    nome: "Joao",
    idade: 21
};
function getNomes(lista) {
    for (const item of lista) {
        console.log(" - ", item);
    }
}
function calcularMediaIdades(lista) {
    let soma = 0;
    let media = 0;
    for (const item of lista) {
        soma += item;
    }
    media = soma / lista.length;
    return media;
}
let nomes = [pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome];
let idades = [pessoa1.idade, pessoa2.idade, pessoa3.idade, pessoa4.idade, pessoa5.idade];
console.log(getNomes(nomes));
console.log("Media das idades: ", calcularMediaIdades(idades));
