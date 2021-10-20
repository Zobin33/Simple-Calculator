function nginput(value){
     document.getElementById("numberinput").value = (document.getElementById("numberinput").value || null) + value
     return 0
     }
function calculate(){
       let str = document.getElementById("numberinput").value.toString()
       str = str.toLowerCase().replace(/x/g,'*').replace(/\:/g,'/')
       document.getElementById("numberinput").value = eval(str)
     }