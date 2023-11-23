// Obtener los elementos necesarios para manejar el menú desplegable y la búsqueda
var dropdownContent = document.getElementById("myDropdown");
var searchOption = document.getElementById("searchOption");
var searchField = document.getElementById("searchField");

// Agregar un event listener para cerrar el menú si se hace clic fuera de él
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
        dropdownContent.classList.remove('show');
    }
});

// Función para mostrar u ocultar el campo de búsqueda al hacer clic en "Buscar"
function performSearch(event) {
    event.stopPropagation(); // Evitar el cierre del menú al hacer clic en la opción de búsqueda
    searchField.classList.toggle("show-search");
    dropdownContent.classList.add("show"); // Mostrar el menú desplegable mientras se busca
}

// Event listener para el botón de búsqueda
searchOption.addEventListener("click", performSearch);

// Event listener para el botón del menú desplegable
document.querySelector('.dropbtn').addEventListener("click", function(event) {
    event.stopPropagation(); // Evitar el cierre al hacer clic en el botón del menú
    dropdownContent.classList.toggle("show");
    searchField.classList.remove("show-search"); // Ocultar el campo de búsqueda al cerrar el menú
});

// Event listener para el campo de búsqueda
searchField.addEventListener("click", function(event) {
    event.stopPropagation(); // Evitar el cierre al hacer clic en el campo de búsqueda
});
