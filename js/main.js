//alert("Esto puede ser una carta de presentacion o un mensaje para que el profe sepa que el cv pertenece al alumno Javier Soria Legajo 113127");
//Esta desactivada la alerta por que no es algo recomendable para un cv
$(document).ready(function () {
$("#contenedor").fadeIn(2500);
$("#flip").click(function () {
$("#panel").slideToggle("slow");
});
});