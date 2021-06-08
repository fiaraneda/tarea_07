
/******* Arreglo & Objeto para Datos Formulario ********/

var datos = [];
var formulario = new Object();

/*******************************************************/
/********************** Validaciones *******************/
/*******************************************************/

function validaNombre() {
    var nombre = document.getElementById('nombre').value;
    let regex_letras = /^[A-Za-z]+$/;

    if (nombre.length <= 0 || !regex_letras.test(nombre)) {
        alert('Debe Ingresar Nombre Valido');
    } else if (nombre.length <= 1) {
        alert('Nombre no valido');
    } else {
        formulario['Nombre'] = nombre;
        datos.push(formulario);
    }
}

function validaPaterno() {
    var paterno = document.getElementById('paterno').value;
    let regex_letras = /^[A-Za-z]+$/;


    if (paterno.length <= 0 || !regex_letras.test(paterno)) {
        alert('Debe Ingresar Apellido Paterno Valido');
    } else {
        formulario['ApellidoPaterno'] = paterno;
        datos.push(formulario);
    }

}


function validaMaterno() {
    var materno = document.getElementById('materno').value;
    let regex_letras = /^[A-Za-z]+$/;

    if (materno.length <= 0 || !regex_letras.test(materno)) {
        alert('Debe Ingresar Apellido Materno Valido');
    } else {
        formulario['ApellidoMaterno'] = materno;
        datos.push(formulario);
    }
}

function validaCorreo() {
    var correo = document.getElementById('email').value;
    let regex_correo = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if (!regex_correo.test(correo)) {
        alert('Ingrese Correo Valido!');
    } else {
        formulario['Email'] = correo;
        datos.push(formulario);
    }
}

function validaTelefono() {
    var telefono = document.getElementById('telefono').value;
    let regex_celulares = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!regex_celulares.test(telefono)) {
        alert('Ingrese Telefono Valido!');
    } else {
        formulario['Telefono'] = telefono;
        datos.push(formulario);
    }

}

/********************************************************************/
/********************** Muestra Contenido Arreglo *******************/
/********************************************************************/

function guardaFormulario() {
    formulario['Dirección'] = document.getElementById('direccion').value;
    datos.push(formulario);
    console.log(datos);
}