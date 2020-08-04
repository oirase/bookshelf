import { changeFormColor } from './event'
import { defaultColor, focusColor } from './constant'

const auth = document.getElementById('auth') || null
const form = document.getElementsByClassName("form") || null

if (form) {
  for(let i=0; i<form.length; ++i) {
    form[i].addEventListener('focusin', (e: Event)=>{changeFormColor(e, focusColor)})
    form[i].addEventListener('focusout', (e: Event)=>{changeFormColor(e, defaultColor)})
  }
}

auth && auth.addEventListener('click', (e) => { e.stopPropagation() } )
