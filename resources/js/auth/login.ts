import handleClick from './handleClick'
import { disabledAdjacencyElement } from './event'
import { errorSelector } from './constant'

const loginButton = document.getElementById('auth__button--login') || null
const loginForm = document.getElementById('auth__form--login') || null

if(loginForm && loginButton) {
  handleClick(loginForm, loginButton, errorSelector)
   loginButton.addEventListener('click', () => { disabledAdjacencyElement(loginForm) })
}
