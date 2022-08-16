// mexendo com inputs


// editando inputs
//pegando o elemento input nome
const inputNome = document.getElementById('nome');

// atribuindo style ao input nome
inputNome.style.backgroundColor = 'whitesmoke';
inputNome.style.border = '1px solid #ccc';
inputNome.style.color = 'red';
inputNome.setAttribute('placeholder', 'Digite seu nome');



//pegando o elemento input email
const inputEmail = document.getElementById('email');

// atribuindo style ao input email
inputEmail.style.backgroundColor = 'whitesmoke';
inputEmail.style.border = '1px solid #ccc';
inputEmail.setAttribute('placeholder', 'Digite seu email');
inputEmail.style.color = 'red';


// eidtando botão
const btnEnviar = document.getElementById('button')

//atribuindo style ao botão
btnEnviar.style.backgroundColor = 'black';
btnEnviar.style.color = 'white';
btnEnviar.style.width = '80px';
btnEnviar.style.cursor = 'pointer';



// pegando a tag form
const form = document.getElementsByTagName('form')[0];

// atrubindo style a tag form
form.style.backgroundColor = 'whitesmoke';
form.style.width = '550px'
form.style.height = '100px'
form.style.textAlignContent = 'center';
form.style.margin = '0 auto'
form.style.border = '1px solid #ccc';
form.style.borderRadius = '5px'
form.style.boxShadow = '0 0 10px #ccc';
form.style.marginTop = "2%";


// pegando o elemento label
const labelNome = document.getElementsByTagName('label')[0];
// atribuindo cor a fonte label nome
labelNome.style.color = 'red';

//pegando o elemento label email
const labelEmail = document.getElementsByTagName('label')[1];
// atribuindo cor a fonte label email
labelEmail.style.color = 'red';


// pegando  o id  elementos do form
const formElements = document.getElementById('form-elements');

// atribuindo style no form elementos
formElements.style.marginTop = "33px"
formElements.style.paddingLeft = "12px"
formElements.style.paddingRight = "12px"




// adicionando elemento no h1
const h1 = document.getElementsByTagName('h1')[0];

//adicionando texto no h1
h1.innerHTML = 'Preencha o formulário de Contato'

//adicionando style no h1
h1.style.fontSize = '26pt';
h1.style.width = '40%';
h1.style.textAlign = 'center';
h1.style.margin = '0 auto';
h1.style.marginTop = '16%';
h1.style.color = 'whitesmoke';



// pegando o body
const body = document.getElementsByTagName('body')[0];

//atribuindo style no body
body.style.backgroundColor = 'black';


// evento de click (ENVIAR)
btnEnviar.addEventListener('click', function enviar() {
    if (inputNome.value == '' || inputEmail.value == '') {
        alert('Preencha todos os campos');
    } else {
        alert('Formulário enviado com sucesso');
    }
})