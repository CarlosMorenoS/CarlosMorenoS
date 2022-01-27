const process = require("process");
const funcionesDeTareas = require("./funcionesDeTareas")
let action = process.argv[2];


switch(action){
case "listado" : 
let listaDeTareas = funcionesDeTareas.leerJason()
for(let i = 0; i < listaDeTareas.length; i++){
    console.log("tarea : " + listaDeTareas[i].titulo + " / " +  listaDeTareas[i].estado)
}
break
case undefined:
console.log("tienes que pasr una acción")
break
 default: console.log ("no entiendo lo que quieres hacer")
}
