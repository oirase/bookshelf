import * as handleEvent from './event'

export const handleClick = (target: HTMLElement, button: HTMLElement, selector: string)　=> {

    button.addEventListener('click', () => {
      handleEvent.toggleDisplay(target)
    })

    const closeDisplay = () => {
      handleEvent.checkDisplay(target)
    }

    document.body.addEventListener('click', closeDisplay)

    handleEvent.errorCheck(target, selector)
}

export default handleClick
