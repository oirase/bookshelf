import { errorClass, openClass } from './config'

const formWrapperList = document.querySelectorAll('.form__wrapper')

const errorCheck = (ele: Element, errorClass: string) => {
  const errorElement = ele.querySelector(`.${errorClass}`)
  if(errorElement) {
      ele.classList.add(openClass)
  }
}

formWrapperList.forEach(ele=>{
  errorCheck(ele, errorClass)
})
