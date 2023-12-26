


//let entrada = prompt("Ingrese una letra");
//let salida = entrada + " " + "ingresada";
//alert(salida);

/*var parrafo = document.createElement("p");

var contenido = document.createTextNode("Hola Mundo");

parrafo.appendChild(contenido);

document.body.appendChild(parrafo);*/




/*if (nombre == "Sebastian") {

    let frase = `Hola ${nombre}`
    document.write(frase);

}

else if(nombre == "Manuel") {
    let frase = `Hola Re pelotudo`
    document.write(frase);
}

else {
    let frase = `Hola pelotudo`
    document.write(frase);

}*/
class Persona {
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}




function saludo(nombre){
    var titulo = document.getElementById("titulo");
    
    
    if (nombre == "Sebastian") {
        titulo.innerHTML = `
            <h1>Hola ${nombre}</h1>`
            ;
    }
    
    else {
        titulo.innerHTML = `
            <h1>Hola salame</h1>`
            ;
    }
}


function mostrar_pers(persona){
    var datos = document.getElementById("datos");
    if (persona.nombre == "Sebastian") {
        datos.innerHTML = `
            <h1>Hola ${persona.nombre}</h1>`
            ;
    }
    
    else {
        datos.innerHTML = `
            <h1>Hola salame</h1>`
            ;
    }
    datos.innerHTML += `
        <h1>Caja de datos</h1>
        <p>Nombre: ${persona.nombre}</p>
        <p>Edad: ${persona.edad}</p>   
        <p>Ciudad: ${persona.ciudad}</p>`
        ;
}

function def_persona(){
    let persona = []
    let nombre = "Sebastian";
    let edad = "24";
    let ciudad = "Cordoba";
    persona = new Persona(nombre, edad, ciudad);
    mostrar_pers(persona);
}



def_persona()









