let currentDiv = null;

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
  // 2. Si ya estamos en esa página, no hacemos nada (pero solo si no es la primera carga)
  if (index === currentDiv) {
    return; 
  }

  const divs = document.querySelectorAll(".content");
  
  // 3. Solo intentamos quitar "active" si ya hay una sección seleccionada
  if (currentDiv !== null) {
    divs[currentDiv].classList.remove("active");
    divs[currentDiv].style.display = "none";
  }

  const activeDiv = divs[index];
  activeDiv.style.display = "block";
  
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
  showDiv(0); 
});