                                // Constantes Globales
const usuario1 = 'Pedro'
const contrasenia1 = 'Pedro123'

                                //Autenticación
let usuario = prompt('Ingrese un Usuario')
while(usuario != usuario1) {
    alert('El usuario ingresado no es correcto, por favor ingrese un Usuario válido')
    usuario = prompt()
}
if (usuario == usuario1) {
    alert('Hola Pedro, bienvenido, por favor ingresá tu contraseña')
    contrasenia = prompt()
while(contrasenia != contrasenia1) {
    alert('La contraseña ingresada no es correcta, por favor ingresá nuevamente tu contraseña')
    contrasenia = prompt()
}
if (contrasenia == contrasenia1) {
    alert('¡Hola Pedro, bienvenido a su cuenta!')
}
}

                // Operaciones : "Suma o Resta" (no agrego más porque es sólo para ejemplificar)

let accion = prompt('¿Qué le gustaría realizar?' + ' ' + 'Opción 1: Sumar' +' '+ 'Opción 2: Restar')
if (accion == 1) {
    alert('Ingrese los valores que quiere sumar')
    let valor1 = prompt()
    valor1 = parseFloat(valor1)
    let valor2 = prompt()
    valor2 = parseFloat(valor2)
    let resultado = valor1 + valor2
    alert('El resultado de la suma es: ' + resultado)
}
else if (accion == 2) {
    alert('Ingrese los valres que quiere restar')
    let valor1 = prompt()
    valor1 = parseFloat(valor1)
    let valor2 = prompt()
    valor2 = parseFloat(valor2)
    let resultado = valor1 - valor2
    alert('El resultado de la suma es: ' + resultado)
}
else {
alert('La operación no es válida, por motivos de seguridad deberá volver a autenticarse y ésta vez, procure elegir alguna de las dos opciones válidas (opción 1 - suma, opción 2 - resta)')
}
