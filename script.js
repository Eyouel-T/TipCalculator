document.querySelector("#calculate").onclick = function() {
    var bill =  document.querySelector("#bill").value;
    var percentage = document.querySelector("#percentage").value;
    var tip = (bill*percentage)/100
    document.querySelector("#tip").innerHTML += `${tip}`
    var total = parseFloat(bill) + parseFloat(tip)
    document.querySelector("#total").innerHTML += `${total}  `

}