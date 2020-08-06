import { ColorType } from './constant'

const inputAttrType = ["text", "password", "email", "textarea"]

export const checkDisplay = (ele: HTMLElement) => {
  const eleStyle = window.getComputedStyle(ele, null).display
  if (eleStyle === 'block') {
    ele.style.display = 'none'
  } 
}

export const toggleDisplay = (Element: HTMLElement) => {
  const eleStyle = window.getComputedStyle(Element, null).display
  Element.style.display = eleStyle === 'block' ? 'none' : 'block'
}


export const errorCheck = (ele: HTMLElement, errorSelector: string) => {
  const errorElement = ele.querySelectorAll(errorSelector)
  if( errorElement.length > 0) {
      ele.style.display = 'block'
  }
}

export const changeFormColor = (e: Event, color: ColorType) => {
  let focusEvent = e.target as HTMLInputElement
  if(inputAttrType.includes(focusEvent.type)) {
    focusEvent.style.borderColor = color as ColorType
    (focusEvent.previousElementSibling as HTMLElement).style.backgroundColor = color
  }
}

const disabledElment = (ele: Element) => {
  const display = window.getComputedStyle(ele, null).display
  if (display === 'block') {
    (ele as HTMLElement).style.display = 'none'
  }
}

export const disabledAdjacencyElement = (ele: HTMLElement) => {
  
  const previous = ele.previousElementSibling || null
  const next = ele.nextElementSibling || null
  previous && disabledElment(previous)
  next && disabledElment(next)

}
