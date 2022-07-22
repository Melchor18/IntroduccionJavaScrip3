/*fetch("./assets/date/datos-personas.json")
.then(
    respuesta => {
        respuesta.json()
        .then(
            datos => {
                console.log(datos);
            }
        )

    }
);
console.log("hola");

*/

async function obtenerDatos (){
    const respuesta = await fetch("./assets/date/datos-personas.json");
    const datos = await respuesta.json();
    console.log(datos);
    document.getElementsByTagName("body")[0].innerHTML +=
     datos.map(
        x => `<div>${x.first_name}</div>`
       
        ).join("\n");
        


}

obtenerDatos();