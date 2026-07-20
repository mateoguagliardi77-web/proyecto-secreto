* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: black;
  font-family: 'Cinzel', serif;
  overflow: hidden;
}

#escena {
  position: relative;
  width: 100vw;
  height: 100vh;
}

/* 🔥 BOTÓN SIEMPRE VISIBLE */
#btnInicio {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  padding: 15px 25px;
  font-size: 18px;
  background: black;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}

/* fondo */
#fondo {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 1;
}

/* invitación */
#invitacion {
  position: absolute;
  width: 80%;
  max-width: 400px;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

/* humo video */
#humo {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 3;
  pointer-events: none;
}

/* contador */
#contadorContainer {
  position: absolute;
  bottom: 10%;
  width: 100%;
  text-align: center;
  z-index: 4;
  color: white;
}

#tituloContador {
  font-size: 16px;
  margin-bottom: 5px; /* 🔥 MENOS ESPACIO */
}

#contador {
  font-size: 28px;
  letter-spacing: 3px;
}

#etiquetas {
  display: flex;
  justify-content: center;
  gap: 25px;
  font-size: 10px;
  margin-top: 5px; /* 🔥 MENOS ESPACIO */
}

/* botón pistas */
#btnPistas {
  margin-top: 15px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid white;
  color: white;
  cursor: pointer;
}

/* video final */
#videoFinal {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 5;
  display: none;
}

/* fundido */
#fundido {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 6;
  opacity: 0;
  pointer-events: none;
}

/* 📱 RESPONSIVE (CELULAR) */
@media (max-width: 768px) {

  #invitacion {
    width: 90%;
    top: 15%;
  }

  #contador {
    font-size: 22px;
  }

  #tituloContador {
    font-size: 14px;
  }

  #etiquetas {
    gap: 15px;
    font-size: 9px;
  }

}
