document.addEventListener("DOMContentLoaded", () => {

const fechaObjetivo = new Date(2026, 7, 19, 20, 0, 0).getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const contador = document.getElementById("contador");
const etiquetas = document.getElementById("etiquetas");
const titulo = document.getElementById("tituloContador");

const boton = document.getElementById("btnPistas");
const video = document.getElementById("videoFinal");
const fundido = document.getElementById("fundido");
const musica = document.getElementById("musica");

const fondo = document.getElementById("fondo");
const niebla = document.getElementById("niebla");
const invitacion = document.getElementById("invitacion");
const contenedor = document.getElementById("contadorContainer");
const btnInicio = document.getElementById("btnInicio");

/* CONTADOR */
function actualizarContador(){

    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if(diferencia <= 0){
        contador.style.display = "none";
        etiquetas.style.display = "none";
        titulo.style.display = "none";
        boton.style.display="inline-block";
        clearInterval(intervalo);
        return;
    }

    const d = Math.floor(diferencia/(1000*60*60*24));
    const h = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((diferencia%(1000*60*60))/(1000*60));
    const s = Math.floor((diferencia%(1000*60))/1000);

    dias.textContent = String(d).padStart(2,"0");
    horas.textContent = String(h).padStart(2,"0");
    minutos.textContent = String(m).padStart(2,"0");
    segundos.textContent = String(s).padStart(2,"0");
}

actualizarContador();
const intervalo = setInterval(actualizarContador,1000);

/* 🎬 BOTÓN INICIAL APARECE */
setTimeout(()=>{
    btnInicio.classList.add("mostrar");
},3000);

/* 🚀 CLICK INICIO */
btnInicio.addEventListener("click",()=>{

    // 🔊 AUDIO SOLO AQUÍ (SOLUCIÓN ANDROID)
    musica.volume = 0.35;
    musica.play().catch(err => console.log("Audio bloqueado:", err));

    btnInicio.style.display="none";

    setTimeout(()=>{
        fondo.classList.add("blurActivo");
        niebla.classList.add("activa");
    },5000);

    setTimeout(()=>{
        invitacion.classList.add("mostrar");
        contenedor.classList.add("mostrar");
    },10000);

});

/* 🎥 BOTÓN FINAL */
boton.addEventListener("click",()=>{

    fundido.style.opacity="1";

    setTimeout(()=>{

        invitacion.style.display="none";
        contenedor.style.display="none";

        video.style.visibility="visible";
        video.style.opacity="1";

        fundido.style.opacity="0";

        musica.pause();
        musica.currentTime = 0;

        video.play();

    },1000);
});

/* ❌ ELIMINADO: autoplay que rompe en celular */
/*
window.addEventListener("load",()=>{
    musica.play();
});
*/

});
