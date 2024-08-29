const props = {
    nome: 'Renan',
    idade: 40,
    soma: (v1, v2) => { return v1+v2}
}

const props2 = {
    end: {
        rua: "Dos Bobos",
        numero: 0
    },
    itensCompra: ["PC", "Monitor", "Placa Mãe"],
    "Outros Itens": ["Teclado", "Mouse", "Placa de Rede"]
}                 

//adicionar nova propriedade no objeto
props.teste = "Olá"

//delete uma propriedade do objeto
delete props.teste

//const idade = props.idade
//const nome = props.nome

//Destruct - Desestruturção
const {idade, nome} = props

const [peca, parte] = props2.itensCompra

//Spread - Espalhamento 
const propsTudo = {...props, ...props2}

console.log(parte)