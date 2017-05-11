/*------------------------------------------------------------------------------------
    Variaveis Globais (visivel em toda a pagina)
------------------------------------------------------------------------------------*/
var doc = document;
var btnAdd = doc.querySelector('#btnAdicionar');

btnAdd.addEventListener('click', salvarDados);

//Campos de entrada
var nome = doc.querySelector("input[name='nome']");
var data = doc.querySelector("input[name='AnoNascimento']");

//Objeto Date interno do JS
var hoje = new Date();

//Obtem o numero do ano
var ano_atual = hoje.getFullYear();

function salvarDados() {
    var novaEntrevista = new Entrevista(nome.value, data.value);
    novaEntrevista.mostrar_dados();
    return  false
}


/*------------------------------------------------------------------------------------
    Cria~ção dos objeto (funções object)
------------------------------------------------------------------------------------*/
function  Entrevista(nomeInformado, anoInformado) {
    //Declara uma propriedade 'nome' que receberá o valor do parametro 'nome'
    this.nome = nomeInformado;
    //O mesmo para o ano
    this.ano = anoInformado;

    //Cria um método dentro do objeto
    //this.ano é a propriedade Ano criada acima
    //Com o uso do this, ela esta acessivel em funções anonimas dentro do escopo da função
    this.calcula_idade = function() {
        return ano_atual - this.ano;
    } 

    //Outro metodo apenas para mostrar o resultado no Console do navegador
    this.mostrar_dados = function() {
        console.log('O nome informado é : ' + this.nome +
            'O ano é : ' + this.ano +
            'E a idade calculada é :' + this.calcula_idade());
    };
}
