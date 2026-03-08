let currentDiv = 0;

function updateMenu(index) {
  const links = document.querySelectorAll("nav a");
  
  links.forEach((link, i) => {
    // Solo aplicamos a los primeros 4 links (que son tus secciones)
    // El link de "Descarga mi CV" no debería marcarse como activo
    if (i < 4) { 
      if (i === index) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}

// 1. FUNCIÓN AUXILIAR PARA ACTUALIZAR LOS PUNTOS
function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  // Quitamos la clase activa a todos los puntos
  dots.forEach(dot => dot.classList.remove("active-dot"));
  
  // Se la ponemos solo al punto actual (si existe)
  if (dots[index]) {
    dots[index].classList.add("active-dot");
  }
}

// 2. FUNCIÓN PARA MOSTRAR EL DIV SELECCIONADO
function showDiv(index) {
  const divs = document.querySelectorAll(".content");
  
  // 1. Quitamos la clase active de todos
  divs.forEach(div => {
    div.classList.remove("active");
    div.style.display = "none"; // Forzamos el cierre
  });

  // 2. Activamos el nuevo div
  const activeDiv = divs[index];
  activeDiv.style.display = "block"; // Lo ponemos en el layout
  
  // Usamos un pequeño delay (ms) para que el navegador procese el cambio 
  // y la animación de CSS se dispare correctamente
  setTimeout(() => {
    activeDiv.classList.add("active");
  }, 10);

  currentDiv = index;
  updateDots(index);
  updateMenu(index);
}
// 3. FUNCIONES DE NAVEGACIÓN (Simplificadas para usar showDiv)
function nextDiv() {
  const divs = document.querySelectorAll(".content");
  let nextIndex = (currentDiv + 1) % divs.length;
  showDiv(nextIndex);
}

function prevDiv() {
  const divs = document.querySelectorAll(".content");
  let prevIndex = (currentDiv - 1 + divs.length) % divs.length;
  showDiv(prevIndex);
}

// --- RESTO DE TU CÓDIGO (Menú y Swipes) ---

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
    if (diffX > 50) {
      onSwipeRight();
    } else if (diffX < -50) {
      onSwipeLeft();
    }
  }
});

function onSwipeRight() {
  prevDiv();
}

function onSwipeLeft() {
  nextDiv();
}

// Inicializar el primer punto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  updateDots(0);
});

document.addEventListener("DOMContentLoaded", () => {
  // Forzamos el estado inicial
  showDiv(0); 
});