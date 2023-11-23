document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario por defecto

    // Obtener valores de usuario y contraseña
    var usuario = document.getElementsByName("usuario")[0].value;
    var contraseña = document.getElementsByName("contraseña")[0].value;

    // Aquí puedes realizar alguna lógica adicional, como enviar datos a un servidor

    // Redirigir a personas.html
    window.location.href = "/pages/personas.html";
});