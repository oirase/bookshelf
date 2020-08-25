import handleClick from './handleClick'
//import { disabledAdjacencyElement } from './event'
import { disabledNextElement } from './event'
import { errorSelector } from './constant'

const registerButton = document.getElementById('auth__button--register') || null
const registerForm = document.getElementById('auth__form--register') || null

if(registerForm && registerButton) {
  handleClick(registerForm, registerButton, errorSelector)
  registerButton.addEventListener('click', () => { disabledNextElement(registerForm) })
}

