import handleClick from './handleClick'
import { errorSelector } from './constant'

const configButton = document.getElementById('auth__button--config') || null
const configForm = document.getElementById('auth__form--config') || null

if(configButton && configForm) {
  handleClick(configForm, configButton, errorSelector)
}
