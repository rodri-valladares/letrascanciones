const formularioBuscar = document.querySelector('#formulario-buscar');
const divBuscar = document.querySelector('#buscar');
const divMensajes = document.querySelector('#mensajes');
const divResultado = document.querySelector('#resultado');
const headingResultado = document.querySelector('.letra-resultado h2');


formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        divMensajes.textContent = 'Error... Todos los campos deben ser completados';
    }

    setTimeout(()=>{
        divMensajes.textContent = '';
    }, 3000);
}