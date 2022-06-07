let nombre = prompt("Bienvenido a ARS Converter. \nIngrese su Nombre y Apellido")
let bienvenida = "Bienvenid@" + " " + nombre +".\nComenzamos?"
alert (bienvenida)

let TipodeCambio = prompt ("Que cotizacion desea calcular? \nDolar \nEuro \nLibra Esterlina");

while (((TipodeCambio != "Dolar") && (TipodeCambio != "Euro") && (TipodeCambio!="Libra Esterlina"))){
    TipodeCambio = prompt("Moneda incorrecta, por favor seleccionar una de las opciones predeterminadas.\nDolar \nEuro \nLibra esterlina");
}
if(TipodeCambio == "Dolar"){
    TipodeCambio = prompt ("Indique la cantidad de pesos que quiere convertir a dolares.");
    alert ("total: USD " + (TipodeCambio * 0.0082 + "."))
}
if(TipodeCambio == "Euro"){
    TipodeCambio = prompt ("Indique la cantidad de pesos que quiere convertir a euros.");
    alert ("total: EUR " + TipodeCambio * 0.0077 + ".")
}
if(TipodeCambio == "Libra Esterlina"){
    TipodeCambio = prompt ("Indique la cantidad de pesos que quiere convertir a libras esterlinas.");
    alert ("total: L " + TipodeCambio * 0.0065 + ".")
}

alert ("ARS Converter agradece tu consulta.")