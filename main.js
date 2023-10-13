const loginButton = document.querySelector('.login__button');
const containerModal = document.querySelector('.container-modal');
const mainElement = document.querySelector('.main');
const inputElement = document.querySelectorAll('input');
const logarButton = document.querySelector('.logar');
const formModal = document.querySelector('.form__wrapper');
const successModal = document.querySelector('.success__wrapper');

inputElement.forEach(input => {
    input.addEventListener('focus', () => {
        input?.offsetParent?.classList.add('focused')
    })
    input.addEventListener('blur', () => {
        input.value != "" ? input?.offsetParent?.classList.add('focused')
        : input.offsetParent.classList.remove('focused')
    })
})

const handleLogin = () => {
    loginButton.classList.toggle('none');
    containerModal.classList.toggle('open');
    mainElement.classList.toggle('bg');

}

const emailInput = inputElement[0]
const passwordInput = inputElement[1]

const checkFormValidation = () => {
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