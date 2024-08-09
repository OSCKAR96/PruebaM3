import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(document).ready(function() {
    $(".hola").click(function() {
        alert("Envío exitoso");
    });
});