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

