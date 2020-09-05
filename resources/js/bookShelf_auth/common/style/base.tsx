import { css } from 'styled-components'

export const baseStyle = css`

div, img, label, p, a, button, input {
  box-sizing: border-box;
}

a {
  text-decoration: none;

}

h2, h3, p, a, li, button, label {
  letter-spacing: 0.25rem;
}

h2, h3 {
  font-weight: normal;
}

html {
  font-size: 62.5%;
}

ul {
  list-style: none;
}

body {
  font-size: 1.6rem;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  min-height: 100vh;
}

img {
  vertical-align: bottom;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

select {
  appearance: none;
  border: none;
  outline: none;
}

`

export default baseStyle
