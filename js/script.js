const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');


form.addEventListener('submit', (event) => {
    event.preventDefault();

//verificar se o nome está vazio
if(nameInput.value === "") {
    alert('Por favor, preencher o seu nome');
    return;
}

//verificar se o email está preenchido e se é válido
if(emailInput.value === "" || !isMailValid(emailInput.value)) {
    alert('Por favor, preencher o seu E-mail');
    return;
}

//verificar se a senha ta preenchida
if(!validatePassword(passwordInput.value)) {
    alert('A senha precisa ter no mínimo 8 dígitos');
    return;
}

// verificar se a situação foi selecionada
if(jobSelect.value === "") {
    alert('Por favor, selecione a sua situação');
    return;
}

//verificar  se a mensagem foi preenchida
if(messageTextarea.value === "") {
    alert('Por favor, escreva uma mensagem');
    return;
}


//função que valida o e-mail
function isMailValid(email) {
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        //delimitar a regex com duas barras
        //usuario12@hotmail.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}

//função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        //senha válida
        return true;
    }

    //senha inválida
    return false;
}





//se todos os campos estiverem preenchdios, enviar o formulário
form.submit();

})