import { formFocusClass, labelFocusClass, inputAttrType } from './config'

const changeFormColor = (e: Event, formFocusClass: string, labelFocusClass:string) => {
  const focusElement = e.target as HTMLInputElement
  if (focusElement && focusElement.previousElementSibling) {
    if (inputAttrType.includes(focusElement.type)) {
      focusElement.classList.toggle(formFocusClass)
      focusElement.previousElementSibling.classList.toggle(labelFocusClass)
    }
  }
}

const form = document.querySelectorAll('.form')

if (form) {
  form.forEach(ele=>{
    ele.addEventListener('focusin', (e: Event)=>{changeFormColor(e, formFocusClass, labelFocusClass)})
    ele.addEventListener('focusout', (e: Event)=>{changeFormColor(e, formFocusClass, labelFocusClass)})
  })
}

