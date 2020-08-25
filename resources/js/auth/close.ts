import { closeDisplay } from './event'

const formCloseButton =  document.getElementsByClassName('form__button--close') || null

if (formCloseButton) {
  for (let i=0;i<formCloseButton.length;++i) {
    formCloseButton[i].addEventListener('click', (e)=>{closeDisplay(e, formCloseButton, '.form__wrapper')})
  }

}
