let currentDiv = 0;

        // Función para mostrar el div seleccionado
        function showDiv(index) {
            const divs = document.querySelectorAll('.content');
            divs[currentDiv].classList.remove('active'); // Oculta el div actual
            divs[index].classList.add('active'); // Muestra el nuevo div
            currentDiv = index; // Actualiza el índice actual
        }

        // Función para mostrar el siguiente div
        function nextDiv() {
            const divs = document.querySelectorAll('.content');
            divs[currentDiv].classList.remove('active');
            currentDiv = (currentDiv + 1) % divs.length;
            divs[currentDiv].classList.add('active');
        }

        // Función para mostrar el div anterior
        function prevDiv() {
            const divs = document.querySelectorAll('.content');
            divs[currentDiv].classList.remove('active');
            currentDiv = (currentDiv - 1 + divs.length) % divs.length;
            divs[currentDiv].classList.add('active');
        }

const hambur = document.getElementsByClassName("hambur")[0];
const menu = document.getElementsByClassName("menu")[0];

hambur.addEventListener("click", () => {
    menu.classList.toggle("menu--show");
});
        