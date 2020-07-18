const auth = document.getElementById('auth') || null
const registerButton = document.getElementById('auth__button--register') || null
const registerForm = document.getElementById('auth__form--register') || null
const loginButton = document.getElementById('auth__button--login') || null
const loginForm = document.getElementById('auth__form--login') || null

const toggleDisplay = (mainElement: HTMLElement, subElement: HTMLElement) => {
  const mainStyle = window.getComputedStyle(mainElement, null).display
  const subStyle = window.getComputedStyle(subElement, null).display
  mainElement.style.display = mainStyle === 'block' ? 'none' : 'block'
  if (subStyle === 'block') {
    subElement.style.display = 'none'
  } 
}

const checkDisplay = (ele: HTMLElement) => {
  const eleStyle = window.getComputedStyle(ele, null).display
  if (eleStyle === 'block') {
    ele.style.display = 'none'
  } 
}

if(registerButton && registerForm && loginButton && loginForm) {
  registerButton.addEventListener('click', () => {
    toggleDisplay(registerForm, loginForm)
  })
  loginButton.addEventListener('click', () => {
    toggleDisplay(loginForm, registerForm)
  })

  const closeDisplay = () => {
    checkDisplay(registerForm)
    checkDisplay(loginForm)
  }

  document.body.addEventListener('click', closeDisplay)
}

auth && auth.addEventListener('click', (e) => { 
e.stopPropagation()
})

const form = document.getElementsByClassName("form") || null
const inputType = ["text", "password", "email", "textarea"]

const defaultColor = "#FF9900"
const focusColor = "#5ACAD5"
type ColorType = typeof defaultColor | typeof focusColor

const changeFormColor = (e: Event, color: ColorType) => {
  let focusEvent = e.target as HTMLInputElement
  if(inputType.includes(focusEvent.type)) {
    focusEvent.style.borderColor = color as ColorType
    (focusEvent.previousElementSibling as HTMLElement).style.backgroundColor = color
  }
}

if (form) {
  for(let i=0; i<form.length; ++i) {
    form[i].addEventListener('focusin', (e: Event)=>{changeFormColor(e, focusColor)})
    form[i].addEventListener('focusout', (e: Event)=>{changeFormColor(e, defaultColor)})
  }
}
