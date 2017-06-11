export const colors = {
  PRIMARY: '#0275d8',
  SECONDARY: '#5cb85c',
  SUCCESS: '#5cb85c',
  INFO: '#5bc0de',
  WARNING: '#ffd500',
  DANGER: '#d9534f'
}

export function hexToRgb (hex, opacity) {
  let result
  hex = hex.replace('#', '')
  let r = parseInt(hex.substring(0, 2), 16)
  let g = parseInt(hex.substring(2, 4), 16)
  let b = parseInt(hex.substring(4, 6), 16)
  if (opacity) {
    result = `rgba(${r}, ${g}, ${b}, ${opacity})`
  } else {
    result = `rgb(${r}, ${g}, ${b})`
  }
  return result
}
