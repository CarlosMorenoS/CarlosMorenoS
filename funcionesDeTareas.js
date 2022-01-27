const fs = require("fs");


let funcionesDeTareas ={
leerJason : function (){
let tareasJson = fs.readFileSync ('./tareas.json', 'utf-8'); //leemos el archivo .json
let tareasParseadas = JSON.parse (tareasJson);
return tareasParseadas
}
}


module.exports = funcionesDeTareas