function nginput(value) {
  document.getElementById("numberinput").innerHTML = (document.getElementById("numberinput").innerHTML == 'Masukan Nomor' ? null: document.getElementById("numberinput").innerHTML) + value
}

function reset() {
  document.getElementById('numberinput').innerHTML = 'Masukan Nomor'
}

function calculate() {
  let str = document.getElementById("numberinput").innerHTML.toString()
  str = str.toLowerCase().replace(/x/g, '*').replace(/\:/g, '/')
  document.getElementById("numberinput").innerHTML = eval(str)
}