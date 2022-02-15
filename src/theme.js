import { css } from 'styled-components'

const font = 'sans-serif'

// Color palette
const black = '#000000'
const white = '#ffffff'


const coloredThemeBackground = '#c06c84'
const lightThemeBackground = '#e5e5e5'
const darkThemeBackground = '#ffe5e5'

const Colored = '#ffe5e5'
const Dark = '#434343'
const Light = '#e5e5e5'

const error = '#c86464'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'
const primary = '#434343'
const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    Colored,
    Dark,
    Light,
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
  },
}
