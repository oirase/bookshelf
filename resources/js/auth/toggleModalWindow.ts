import { openClass, closeClass } from './config'
import ToggleWindow from './ToggleWindow'

const modal = document.querySelector('#form__modal')
const modalButtonOpen = document.querySelector('#form__modal--open')
const modalButtonClose = document.querySelector('#form__modal--close')

if(modal && modalButtonOpen && modalButtonClose) {
  const toggleModalWindow = new ToggleWindow(modal, openClass, closeClass)
  const modalButtonList = [modalButtonOpen, modalButtonClose]
  modalButtonList.forEach((ele: Element) => ele.addEventListener('click', (e: Event) => {
    e.preventDefault()
    toggleModalWindow.toggle()
  }))
}

