alert("Esta a punto de ver la entrega de Javier Soria Legajo 113127 Para la materia Programacion III de la tecnicatura universitara en programacion, esta alerta no es recomdendable para esta clase de web solo es con fines de mostrar la alerta");

$(document).ready(function () {
$("#contenedor").fadeIn(2500);
$("#flip").click(function () {
$("#panel").slideToggle("slow");
});
});