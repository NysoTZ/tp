let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let textarea = document.getElementById("textarea");
let btn= document.getElementById("btn");
let informacion = [];

telefono.addEventListener("keypress", (e) => {
    const expre =/[0-9]/;
    if(!expre.test(e.key)) e.preventDefault();

})

btn.addEventListener("click", (e) => {
    e.preventDefault(); // prevenir la acción del formulario de actualizar la página

    if (nombre.value === ""  ||apellido.value === ""  ||email.value === ""  ||telefono.value === ""  ||textarea.value === "") {
        alert("Por favor, complete todos los campos."); // Mostrar un mensaje si algún campo está vacío
        return; // Detener la ejecución si hay campos vacíos
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return; //      PATROCINADO POR CHATGPT 
    }

    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = textarea.value;

    console.log("Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}");

    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "contact.txt");

    console.log(blob);
});
