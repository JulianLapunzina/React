
                                        // Constantes Globales
const usuario1 = 'Pedro'
const contrasenia1 = 'Pedro123'

                                            //Autenticación
let usuario = prompt('Ingrese un Usuario')
while(usuario != usuario1) {
    alert('El usuario ingresado no es correcto, por favor ingrese un Usuario válido')
    usuario = prompt()
}
    alert('Hola Pedro, bienvenido, por favor ingresá tu contraseña')
    contrasenia = prompt()
while(contrasenia != contrasenia1) {
    alert('La contraseña ingresada no es correcta, por favor ingresá nuevamente tu contraseña')
    contrasenia = prompt()
}
                                        // Operaciones

let accion = prompt('¿Qué le gustaría realizar?' + ' ' + 'Opción 1: Sumar' +' '+ 'Opción 2: Restar' + ' ' + 'Opción 3: Multiplicar' + ' ' + 'Opción 4: Dividir')
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
    alert('Ingrese los valores que quiere restar')
    let valor1 = prompt()
    valor1 = parseFloat(valor1)
    let valor2 = prompt()
    valor2 = parseFloat(valor2)
    let resultado = valor1 - valor2
    alert('El resultado de la resta es: ' + resultado)
}
else if (accion == 3) {
    alert('Ingrese los valores que quiere mutiplicar')
    let valor1 = prompt()
    let valor2 = prompt()
    let resultado = valor1 * valor2
    alert('El resultado de la multiplicación es: ' + resultado)
}
else if (accion == 4) {
    alert('Ingrese los valores que quiere dividir')
    let valor1 = prompt()
    let valor2 = prompt()
    let resultado = valor1 / valor2
    alert('El resultado de la división es: '+ resultado)
}
else {
alert('La operación no es válida, por motivos de seguridad deberá volver a autenticarse y ésta vez, procure elegir alguna de las dos opciones válidas (opción 1 - suma, opción 2 - resta)')
}


                                    //DESAFIO N° 2 - Julián Lapunzina


// Pasé las operaciones que hice anteriormente a una función que se llama calculadora. No sé como hacer aún para que el usuario sea el que ingrese los datos que se van a calcular con la función, creo que hasta ahora no lo vimos.


function calculadora (valor1, valor2, operacion) {
    switch(operacion) {
        case '+':
            return valor1 + valor2; 
            break
        case '-': 
            return valor1 - valor2;
            break
        case '*': 
            return valor1 * valor2;
            break
        case '/': 
            return valor1 / valor2;
            break
        default:
            return 0;
            break
    }
}

                    //ejemplo de cálculo

console.log(calculadora(12,12,'*'))

// Como no me gustaba el ejemplo de los bancos y los cálculos, lo que hice fue que el usuario pueda ingresar el registro de un libro y agregué una función que construye un nuevo objeto que contiene la información de cada libro, lo dejo a continuación.


                                // Formulario para Inscripción de un nuevo libro

const nombreDelLibro = prompt('Ingrese el nombre del libro')
const autor = prompt('Ingrese su nombre')
const fechaDePublicacion = prompt('Ingrese la fecha de publicación en el siguiente formato 00/00/0000')
const precio = prompt('Ingrese el precio de su libro')
const categoria = prompt('Ingrese la categoría de su libro: 1) cuentos, 2) poesía, 3) novela')
const id = prompt('Ingrese su número de documento')

let resultado = nombreDelLibro + ', ' + autor + ', ' + fechaDePublicacion + ', ' + precio + ', ' + categoria + ', ' + id

alert('Los datos ingresados son: ' + resultado)


        // Clase con función constructora del libro + comisión de la plataforma igualado al iva

class Libro {
    constructor(nombredelLibro, autor, fechaDePublicacion, precio, categoria,id) {
        this.nombreDelLibro = nombredelLibro
        this.autor = autor
        this.fechaDePublicacion = fechaDePublicacion
        this.precio = precio
        this.categoria = categoria
        this.id = id
    }
    comision() {
        this.precio = this.precio * 1.21
    }
}


// Debajo pongo un ejemplo de cómo crear un nuevo Libro, pasandole los parámetros 
const Libro1 = new Libro("Game of Thrones", "George Martin", "06/08/1996", 4700, 3, 33064675)
Libro1.comision()
console.log(Libro1)

