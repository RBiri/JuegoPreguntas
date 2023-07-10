const texto =["Parece que quieres poner a prueba tus conocimientos sobre este mundo. Preparate, la prueba empezara pronto.",
                "Quien es el jugador de futbol con mas titulos?",
                "Cual de los siguientes artistas sigue con vida?",
                "Resuelve la siguiente operacion matematica: 27*3+39/3-2",
                "Cual es el metal mas duro?",
                "Cual de los siguientes actores aparece en la pelicula 'Un ciudadano Ejemplar'",
                "Felicidades. Has conseguido superar mi prueba."
                ]

// La ultima posicion indica la respuesta correcta
const respuestas = [["Has fallado"],
                    ["Messi","Cristiano Ronaldo","Halland",0],
                    ["Kurt Cobain","Tupac Shakur","John Cooper",2],
                    [120,92,94,1],
                    ["Iridio","Tungsteno","Osmio",1],
                    ["Dwayne Johnson","Idris Elba","Gerard Butler",2]
                ]

const imagenes = [["vacio"],
                ["messi.jpg","cristianoRonaldo.jpg","halland.jpg"],
                ["kurtCobain.jpg","tupacShakur.jpg","johnCooper.jpg"],
                ["aqui son mates"],
                ["iridio.jpg","tungsteno.jpg","osmio.jpg"],
                ["dwayneJohnson.jpg","idrisElba.jpg","gerardButler.jpg"]
]

const paginas =["inicio","futbol","musica","mates","ciencia","actores","ganaste"];
let paginaActual = 0;
let tempo;
function anadirTexto(txt,padre){
    let texto = document.createElement("p");
    console.log(texto);
    texto.classList.add("texto");
    texto.innerText = txt;
    console.log(padre);
    padre.appendChild(texto);
}

function crearPagina(){
    let padre = document.createElement("div");
    padre.setAttribute("id",paginas[paginaActual]);
    let caja = document.createElement("div");
    caja.classList.add("caja");
    console.log(caja);
    anadirTexto(texto[paginaActual],caja);
    padre.appendChild(caja);
    document.body.appendChild(padre);
    if(paginaActual>0){
        modalRespuestas()
    }
}

function cambiarPagina(){
    if(paginaActual>0){
        borrarElementos();
    }
    console.log(paginaActual);
    crearPagina()
}

function modalRespuestas(){
    console.log("hola");
    let divModal = document.createElement("div");
    divModal.classList.add("modalRespuesta");
    let divRespuesta = document.createElement("div");
    divRespuesta.classList.add("row");
    for(let i= 0;i<=respuestas[paginaActual].length-2;i++){
        let opcion = document.createElement("div");
        console.log(respuestas[paginaActual][i]);
        opcion.addEventListener("click",()=>responder(respuestas[paginaActual][i]));
        let opcionTexto = document.createElement("p");
        opcionTexto.innerText= respuestas[paginaActual][i];
        opcion.appendChild(opcionTexto);
        if(imagenes[paginaActual].length>1){
                let opcionImagen = document.createElement("img");
                opcionImagen.setAttribute("src","img/"+imagenes[paginaActual][i]);
                opcion.appendChild(opcionImagen);
        }
        opcion.classList.add("col-4","text-center","mt-5",paginas[paginaActual]);
        divRespuesta.appendChild(opcion);
    }
    divModal.appendChild(divRespuesta);
    document.body.appendChild(divModal);
}

function responder(txt){
    console.log(txt);
    let correcta =respuestas[paginaActual][3];
    if(txt===respuestas[paginaActual][correcta]){
        console.log("Acertaste!");
        paginaActual++;
        cambiarPagina();
    }else{
        console.log("Has fallado");
        fallaste();
    }
}

function borrarElementos(){
    while (document.body.firstChild) {
        document.body.removeChild(document.body.lastChild);
      }
}
function fallaste(){
    borrarElementos()
    let fallo = document.createElement("div");
    fallo.classList.add("fallaste")
    let boton = document.createElement("div");
    boton.classList.add("volverAEmpezar");
    boton.innerText= "Volver a la pagina Principal";
    boton.addEventListener("click",volverAlInicio);
    fallo.appendChild(boton);
    document.body.appendChild(fallo);
}

function volverAlInicio(){
    paginaActual=0;
    borrarElementos();
    reset();
    incializar();
}

function incializar(){
    cambiarPagina();
    paginaActual++;
    temporizador();
}

function temporizador(){
    tempo = window.setTimeout(function(){
        console.log("hola1");
        cambiarPagina()}
        ,10000);
    }
function reset(){
    clearTimeout(tempo);
}

incializar();