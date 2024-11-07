let currentDiv = 0;

// Función para mostrar el div seleccionado
function showDiv(index) {
  const divs = document.querySelectorAll(".content");
  divs[currentDiv].classList.remove("active"); // Oculta el div actual
  divs[index].classList.add("active"); // Muestra el nuevo div
  currentDiv = index; // Actualiza el índice actual
}

// Función para mostrar el siguiente div
function nextDiv() {
  const divs = document.querySelectorAll(".content");
  divs[currentDiv].classList.remove("active");
  currentDiv = (currentDiv + 1) % divs.length;
  divs[currentDiv].classList.add("active");
}

// Función para mostrar el div anterior
function prevDiv() {
  const divs = document.querySelectorAll(".content");
  divs[currentDiv].classList.remove("active");
  currentDiv = (currentDiv - 1 + divs.length) % divs.length;
  divs[currentDiv].classList.add("active");
}

const hambur = document.getElementsByClassName("hambur")[0];
const menu = document.getElementsByClassName("menu")[0];

hambur.addEventListener("click", () => {
  menu.classList.toggle("menu--show");
});

let startX;
let startY;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  const diffX = endX - startX;
  const diffY = endY - startY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // Gestos horizontales
    if (diffX > 50) {
      // Deslizar a la derecha
      onSwipeRight();
    } else if (diffX < -50) {
      // Deslizar a la izquierda
      onSwipeLeft();
    }
  } else {
    // Gestos verticales
    if (diffY > 50) {
      // Deslizar hacia abajo
      onSwipeDown();
    } else if (diffY < -50) {
      // Deslizar hacia arriba
      onSwipeUp();
    }
  }
});

function onSwipeRight() {
  console.log("Deslizaste a la derecha");
  // Llama aquí a tu función específica
  prevDiv();
}

function onSwipeLeft() {
  console.log("Deslizaste a la izquierda");
  // Llama aquí a tu función específica
  nextDiv();
}
