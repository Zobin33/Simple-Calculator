function input(value) {
  let operator = ["÷",
    "×",
    "+",
    "-",
    "%"]
  let input_value = document.getElementById("input-bang").innerHTML.replace("Masukan Nomor", '')
  let result;
  if (operator.includes(input_value[input_value.length-2]) && operator.includes(value.slice(1, 2))) {
    result = input_value.slice(0, input_value.length-3) + value
  } else {
    result = input_value + value
  }
  document.getElementById("input-bang").innerHTML = result
  result = result.replace(/×/g, '*').replace(/\:/g, '/').replace(/\,/g, '.')
  document.getElementById("before-result").innerHTML = eval(result)
}

function reset() {
  document.getElementById('input-bang').innerHTML = 'Masukan Nomor'
  document.getElementById('before-result').innerHTML = '  '
}

function result() {
  let str = document.getElementById("input-bang").innerHTML
  str = str.replace(/×/g, '*').replace(/\:/g, '/').replace(/\,/g, '.')
  document.getElementById("input-bang").innerHTML = eval(str)
  document.getElementById('before-result').innerHTML = '  '
}

function delete_input() {
  let value = document.getElementById('input-bang').innerHTML.toString()
  let clear = value.slice(0, value.length-1)
  document.getElementById('input-bang').innerHTML = clear
  let akhir = clear.replace(/×/g, '*').replace(/\:/g, '/').replace(/\,/g, '.')
  document.getElementById('before-result').innerHTML = eval(akhir) || ' '
}