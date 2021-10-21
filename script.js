function input(value) {
  let operator = [":",
    "x",
    "+",
    "-",
    "%"]
  let input_value = document.getElementById("input-bang").innerHTML.replace("Masukan Nomor", '')
  let result;
  if (operator.includes(input_value[input_value.length-1]) && operator.includes(value)) {
    result = input_value.slice(0, input_value.length-1) + value
  }
  result = input_value + value
  document.getElementById("input-bang").innerHTML = result
  result = result.replace(/x/g, '*').replace(/\:/g, '/')
  document.getElementById("before-result").innerHTML = eval(result)
}

function reset() {
  document.getElementById('input-bang').innerHTML = 'Masukan Nomor'
  document.getElementById('before-result').innerHTML = ''
}

function result() {
  let str = document.getElementById("input-bang").innerHTML
  str = str.replace(/x/g, '*').replace(/\:/g, '/')
  document.getElementById("input-bang").innerHTML = eval(str)
}