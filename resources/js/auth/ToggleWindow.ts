
class ToggleWindow {

  ele: Element
  openClass: string
  closeClass: string
  classList: DOMTokenList

  constructor (ele: Element, openClass: string, closeClass:string) {
    this.ele = ele
    this.openClass = openClass
    this.closeClass = closeClass
    this.classList = ele.classList
  }

  open () {
    this.classList.remove(this.closeClass)
    this.classList.add(this.openClass)
  }

  close () {
    this.classList.remove(this.openClass)
    this.classList.add(this.closeClass)
  }

  toggle () {
    if (this.classList.contains(this.openClass)) {
      this.close()
    } else {
      this.open()
    }
  }
}

export default ToggleWindow
