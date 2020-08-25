import { ColorType } from './constant'

const inputAttrType = ["text", "password", "email", "textarea"]

export const toggleDisplay = (Element: HTMLElement, value: string = 'block') => {
  const eleStyle = (()=>window.getComputedStyle(Element, null).display)()
  Element.style.display = eleStyle === 'none' ? value : 'none'
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

export const checkDisplay = (ele: Element) => {
  const display = window.getComputedStyle(ele, null).display
  if (display !== 'none') {
    (ele as HTMLElement).style.display = 'none'
  }
}

export const disabledNextElement = (ele: HTMLElement) => {

  const next = ele.nextElementSibling || null
  next && checkDisplay(next)

}

export const disabledPreviousElement = (ele: HTMLElement) => {

  const previous = ele.previousElementSibling || null
  previous && checkDisplay(previous)
}

export const closeDisplay = (e: Event, colletion: HTMLCollection, wrapper: string) => {
  e.preventDefault()
  if(e.target) {
    if(Array.prototype.includes.call(colletion, e.target)) {
          const ele = (e.target as Element).closest(wrapper)
          ele && checkDisplay(ele as HTMLElement)
    }
  }
}

