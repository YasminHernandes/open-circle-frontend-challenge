const loginButton = document.querySelector('.login__button');
const containerModal = document.querySelector('.container-modal');
const mainElement = document.querySelector('.main');
const inputElement = document.querySelectorAll('input');
const logarButton = document.querySelector('.logar');

const inputFocused = () => event.target.offsetParent.classList.add('focused') 
const inputBlur = () => {
    event.target.value != "" ? event.target.offsetParent.classList.add('focused') 
    : event.target.offsetParent.classList.remove('focused')
}

const handleOpenForm = () => {
    loginButton.classList.toggle('none');
    containerModal.classList.toggle('open');
    mainElement.classList.toggle('bg');
}


function checkFormValidation(){
    const emailInput = inputElement[0]
    const passwordInput = inputElement[1]

    !emailInput.checkValidity() ? emailInput.offsetParent.classList.add('error')
    : emailInput.offsetParent.classList.remove('error')   
    
    if(emailInput.checkValidity() && passwordInput.checkValidity()) {
        logarButton.removeAttribute("disabled")
        
    } else logarButton.setAttribute('disabled', 'disabled')

}

const handleSubmit = () => {
    event.preventDefault();
    checkFormValidation()
}
