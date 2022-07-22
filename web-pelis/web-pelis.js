const peliculasURL = "https://nohaywebs.com/esm/peliculas-populares.json"
const configuracionURL = "https://nohaywebs.com/esm/configuration.json"


async function fetchJSON(URL) {
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    return datos;

}



async function obtenerDatos() {
    const peliculas = await fetchJSON(peliculasURL);
    const configuracion = await fetchJSON(configuracionURL);
    const baseURL = configuracion.images.base_url;
    const posterSize = configuracion.images.poster_sizes[3];


    document.getElementById("contenedor").innerHTML =
        peliculas.results.map(
            pelicula => `
 <div class="ficha-pelicula">
 <img src = "${baseURL + posterSize + pelicula.poster_path}" alt="">
        <h2> ${pelicula.title}</h2>
        <p>${pelicula.overview}</p>
        </div>`


        ).join("\n");

}

obtenerDatos();
