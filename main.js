const loginButton = document.querySelector('.login__button');
const containerModal = document.querySelector('.container-modal');
const mainElement = document.querySelector('.main');
const inputElement = document.querySelectorAll('input');
const logarButton = document.querySelector('.logar');
const formModal = document.querySelector('.form__wrapper');
const successModal = document.querySelector('.success__wrapper');
const modalServerError = document.querySelector('.internal-server-error__modal');
const token = localStorage.getItem('token');

const emailInput = inputElement[0]
const passwordInput = inputElement[1]

inputElement?.forEach(input => {
    input.addEventListener('focus', () => {
        input?.offsetParent?.classList.add('focused')
    });
    input.addEventListener('blur', () => {
        input.value != "" ? input?.offsetParent?.classList.add('focused')
        : input?.offsetParent?.classList.remove('focused')
    });
})

const handleLogin = () => {
    if(token != null) {
        addElement(containerModal, 'open')
        addElement(successModal, 'open')
        addElement(mainElement, "bg")
        return;
    }
    
    addElement(loginButton, "closed")
    addElement(containerModal, 'open');

    if(containerModal.classList.contains('open')) {
        addElement(mainElement, "bg")
        addElement(formModal, 'open')
    }
    
    inputElement?.forEach(input => input?.offsetParent?.classList.remove('focused'))
}

const handleCloseModal = () => {
    resetModal()
    removeElement(loginButton, "closed")
    clearFields()
}

const resetModal = () => {
    removeElement(containerModal, "open")
    removeElement(formModal, "open")
    removeElement(mainElement, "bg")
    removeElement(successModal, "open")
    removeElement(modalServerError, "open")
}

const removeElement = (modal, className) => {
    modal.classList.remove(className)
}

const addElement = (modal, className) => {
    modal.classList.add(className)
}

const clearFields = () => {
    emailInput.value = ''
    passwordInput.value = ''
}

const checkFormValidation = () => {
    !emailInput.checkValidity() ? emailInput.offsetParent.classList.add('error')
    : emailInput.offsetParent.classList.remove('error')
    
    if(emailInput.checkValidity() && passwordInput.checkValidity()) logarButton.removeAttribute("disabled");
    else logarButton.setAttribute('disabled', 'disabled');

}

const handleSubmit = () => {
    event.preventDefault();
    checkFormValidation();
    executeLogin(emailInput.value, passwordInput.value);
}

const executeLogin = (email, password) => {
    const fields = {
        email: email,
        password: password
    }

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields)
    }

    fetch("http://localhost:3000/v1/auth", options)
        .then(response => {
            if(response.status == 200) return response.json()
            if(response.status == 401) {
              window.location.replace('/pages/unauthorized')
              return;
            }
           
            return setInterval(addElement(modalServerError, 'flex'), 1000)
        })
        .then(data => {
            localStorage.setItem('token', data.token)
            removeElement(formModal, 'open')
            addElement(successModal, 'open')
        })
        .catch(error => {
            addElement(modalServerError, 'open')
            removeElement(formModal, 'open')
            console.error(error)
        })
        .finally(() => clearFields())
}