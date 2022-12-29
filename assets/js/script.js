const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
  let dateToday = new Date()
  let hr = dateToday.getHours()
  let min = dateToday.getMinutes()
  let s = dateToday.getSeconds()

  if (hr < 10) {
    hr = `0${hr}`
  }

  if (min < 10) min = '0' + min

  if (s < 10) {
    s = `0${s}`
  }

  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = s
})

// add a script to change color when ckicked

var color = [
  '#0db2ac',
  '#333333',
  '#2b5166',
  '#ec5c8d',
  '#ff0099',
  '#66ffff',
  '#f07e13',
  '#98173d',
  '#1c31a5',
  '#fcd9e5'
]
var i = 1
document.getElementById('btn').addEventListener('click', function () {
  i = i <= color.length - 2 ? ++i : 0
  document.querySelector('body').style.background = color[i]
})
