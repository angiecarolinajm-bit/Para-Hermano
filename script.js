const botonLeer = document.getElementById("leerCarta");
const carta = document.getElementById("carta");

const musica = document.getElementById("musica");
const controlMusica = document.getElementById("controlMusica");
const iconoMusica = document.getElementById("iconoMusica");
const textoMusica = document.getElementById("textoMusica");

botonLeer.addEventListener("click", async () => {
  controlMusica.hidden = false;

  try {
    await musica.play();
    actualizarControl(true);
  } catch (error) {
    actualizarControl(false);
    console.error("No se pudo iniciar la música:", error);
  }

  carta.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

controlMusica.addEventListener("click", async () => {
  if (musica.paused) {
    try {
      await musica.play();
      actualizarControl(true);
    } catch (error) {
      console.error("No se pudo reanudar la música:", error);
    }
  } else {
    musica.pause();
    actualizarControl(false);
  }
});

function actualizarControl(reproduciendo) {
  if (reproduciendo) {
    iconoMusica.textContent = "Ⅱ";
    textoMusica.textContent = "Pausar música";
    controlMusica.setAttribute("aria-label", "Pausar música");
  } else {
    iconoMusica.textContent = "▶️";
    textoMusica.textContent = "Reanudar música";
    controlMusica.setAttribute("aria-label", "Reanudar música");
  }
}