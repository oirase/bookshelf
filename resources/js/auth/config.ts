import handleClick from './handleClick'
import { toggleDisplay } from './event'
import { errorSelector } from './constant'

const configButton = document.getElementById('auth__button--config') || null
const configForm = document.getElementById('auth__form--config') || null
const modal = document.getElementById('form__modal') || null
const modalButtonOpen = document.getElementById('form__modal--open') || null
const modalButtonClose = document.getElementById('form__modal--close') || null

if(configButton && configForm) {
  handleClick(configForm, configButton, errorSelector)
}

if(modal && modalButtonOpen && modalButtonClose) {
  [modalButtonOpen, modalButtonClose].forEach(ele => ele.addEventListener('click', (e) => { 
    e.preventDefault()
    toggleDisplay(modal, 'flex')
  }))
}
