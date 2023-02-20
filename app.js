window.onload = function () {
    // Variables
    const IMAGENES = [
        'media/images/enfermeria1.png',
        'media/images/enfermeria2.png',
        'media/images/logo.png',
        'media/images/cumple.png',
        'media/images/imagen14.png',
        'media/images/imagen17.png',
        'media/images/imagen18.png'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
    let posicionActual = 0;
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

       /**
     * Funcion que cambia la foto en la anterior posicion
     */
       function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

      // Eventos
      $botonAvanzar.addEventListener('click', pasarFoto);
      $botonRetroceder.addEventListener('click', retrocederFoto);
    /**
     * Para el autoplay de la imagen
     */
    
    // Iniciar
    renderizarImagen();
    playIntervalo();
} 

/*
*Funcion para mostrar y esconder el texto en Servicios.
*/
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if (hideText.classList.contains('show')) {
        hideText_btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    }else{
        hideText_btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    }
}

/*Boton TOP */
window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show-top')
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show-top')
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
   