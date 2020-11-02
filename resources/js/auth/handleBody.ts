import { openClass, closeClass } from './config'

const formWrapperList = document.querySelectorAll('.form__wrapper')

const closeWindow = (eleList: NodeListOf<Element>, openClass: string, closeClass: string) => {
  eleList.forEach(ele => {
    ele.classList.remove(openClass)
    ele.classList.add(closeClass)
  })
}

formWrapperList && document.body.addEventListener('click', ()=>{
  closeWindow(formWrapperList, openClass, closeClass)
})
