document.addEventListener("DOMContentLoaded", function () {
    let projetos = document.querySelectorAll(".projeto");

    projetos.forEach(projeto => {
        projeto.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#e6d7e1"; // Cor alterada ao passar o mouse
        });

        projeto.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#edd7e9"; // Cor original ao sair do mouse
        });
    });
});

function highlightProject(element) {
    element.style.transform = "scale(1.1)";
}

function resetProject(element) {
    element.style.transform = "scale(1)";
}