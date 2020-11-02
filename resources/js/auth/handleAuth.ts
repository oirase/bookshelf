import { openClass, closeClass, closeButtonClass } from './config'
import ToggleWindow from './ToggleWindow'

const auth = document.querySelector('#auth')

const authButtonLogin = document.querySelector('#auth__button--login')
const authButtonRegister = document.querySelector('#auth__button--register')
const authButtonConfig = document.querySelector('#auth__button--config')

const authFormLogin = document.querySelector('#auth__form--login')
const authFormRegister = document.querySelector('#auth__form--register')
const authFormConfig = document.querySelector('#auth__form--config')

const closeButtonList = document.querySelectorAll(`.${closeButtonClass}`)

if (authButtonLogin &&
    authButtonRegister &&
    authFormLogin &&
    authFormRegister
   ) {

  const toggleWindowLogin = new ToggleWindow(authFormLogin, openClass, closeClass)
  const toggleWindowRegister = new ToggleWindow(authFormRegister, openClass, closeClass)

  authButtonRegister.addEventListener('click', ()=>{
    toggleWindowRegister.toggle()
    toggleWindowLogin.close()
  })

  authButtonLogin.addEventListener('click', ()=>{
    toggleWindowLogin.toggle()
    toggleWindowRegister.close()
  })
}

if (authFormConfig &&
    authButtonConfig
    ) {

  const toggleWindowConfig = new ToggleWindow(authFormConfig, openClass, closeClass)

  authButtonConfig.addEventListener('click', ()=>{
    toggleWindowConfig.toggle()
  })
}

if (auth)　{
  auth.addEventListener('click', (e)=>{
    //e.preventDefault()
    //console.log(e.target.classList)
    if(!(e.target as HTMLElement).classList.contains(closeButtonClass)) {
      e.stopPropagation()
    }
  })
}

if (closeButtonList) {
  closeButtonList.forEach(button=>{
    button.addEventListener('click', (e)=>{
      e.preventDefault()
    })
  })
}

