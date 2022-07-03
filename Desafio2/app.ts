enum Trabalho{
    Atriz,
    Padeiro,
    Programador,
    Secretaria,
    Jardineiro
};
type Humano = {
    nome:string,
    idade:number,
    profissao?:Trabalho
};
let pessoa1:Humano = {
   nome:"Maria",
   idade:25,
   profissao:Trabalho.Secretaria
};

let pessoa2:Humano = {
    nome:"Roberto",
    idade:18,
    profissao:Trabalho.Padeiro
};

let pessoa3:Humano = {
    nome: "Laura",
    idade: 32,
    profissao:Trabalho.Programador
};

let pessoa4:Humano = {
    nome:"Carlos",
    idade:27,
    profissao:Trabalho.Jardineiro
};
let pessoa5:Humano = {
    nome:"Joao",
    idade:21
};

function getNomes(lista:string[]){
    for(const item of lista){
       console.log(" - ",item);
    }
}
function calcularMediaIdades(lista:number[]){
    let soma = 0;
    let media = 0;
    for(const item of lista){
        soma+=item;
    }
    media = soma/lista.length;
    return media;
}
let nomes = [pessoa1.nome,pessoa2.nome,pessoa3.nome,pessoa4.nome,pessoa5.nome];
let idades = [pessoa1.idade,pessoa2.idade,pessoa3.idade,pessoa4.idade,pessoa5.idade];
console.log(getNomes(nomes));
console.log("Media das idades: ",calcularMediaIdades(idades));