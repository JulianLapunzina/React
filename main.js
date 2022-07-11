/*
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


*/

/*
                    // Desafío complementario N°2 - Julián Lapunzina


        // Array de almacenamiento de usuarios + Clase con función constructora de Usuario

const usuarios = []

class Usuario {
    constructor(nombreDeUsuario, contrasenia) {
        this.nombreDeUsuario = nombreDeUsuario
        this.contrasenia = contrasenia
    }
}

const registrarUsuario = (nombredeUsuario, contrasenia) => {
    nombreDeUsuario = prompt('Ingrese el nuevo nombre de Usuario')
    contrasenia = prompt('Ingrese su nueva contraseña')
    let usuarioNuevo = new Usuario (nombreDeUsuario, contrasenia)
    usuarios.push(usuarioNuevo)
}

// Usuarios ya creados que se almacenan para verificar si coincide o no con los que ingresa el usuario en un futuro

const usuarioRuben = new Usuario ("Ruben", 12345)
usuarios.push(usuarioRuben)
const ususarioFernanda = new Usuario ("Fernanda",12345)
usuarios.unshift(ususarioFernanda)


console.log(usuarios)

// Registro de usuario
let bienvenida = alert('Bienvenido a Vean, para comenzar necesitamos que cree un nuevo Usuario')
registrarUsuario()

        // Clase con función constructora del libro + comisión de la plataforma igualado al iva

alert('Perfecto, ahora comencemos a cargar los datos de su libro')

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

// Array de almacenamiento de Libros + Función que pide los datos y construye el libro

let Libros = []

const registrarLibro = () => {
    let nombreDelLibro = prompt('Ingrese el nombre del libro')
    let autor = prompt('Ingrese el nombre de autoría que desea registar')
    let fechaDePublicacion = prompt('Ingrese la fecha de publicación del libro')
    let precio = parseFloat(prompt('Ingrese el valor del libro'))
    let categoria = prompt('Ingrese en qué categoría se encuentra su libro: cuento, novela, poesía, otros' )
    let id = prompt('Ingrese su número de documento para registrar el libro')
    let libroNuevo = new Libro (nombreDelLibro, autor, fechaDePublicacion, precio, categoria, id)
    Libros.push(libroNuevo)
    Libros.join(',')
    let accion = confirm ('¡Felicitaciones! Su libro ha sido registrado exitosamente. ¿Desea verificar los datos? Si continua, al finalizar, por favor acepte en caso de que sus datos sean correctos o cancele para volver a realizar el proceso nuevamente')
    //el condicional de abajo lo que hace es que si el usuario confirma que los datos que ingresó están mal, vuelve a llamar a la función para que pueda agregarlos nuevamente, y además elimina los datos que ingresó viejos.
    if(accion != false) {
        let accion2 = confirm(JSON.stringify(libroNuevo,null,3));
        if(accion2 != true) {
            Libros.splice(0,7)
            registrarLibro()
        }
    }
    
}

registrarLibro ()

console.log(Libros)

const librosyusuarios = usuarios.concat(Libros)
console.log(librosyusuarios)

*/