document.getElementById('btnenviar').addEventListener('click', () => {
    let nombre = document.getElementById('inputnombre').value;
    let apellido = document.getElementById('inputapellido').value;
    let correo = document.getElementById('inputcorreo').value;
    let asunto = document.getElementById('inputasunto').value;
    let mensaje = document.getElementById('inputmensaje').value;

    if(nombre==="" || apellido==="" || correo==="" || asunto==="" || mensaje===""){
        alert("Por favor llenar todos los datos del formulario");
    }else{
        alert("Su mensaje ha sido enviado");
    }

    
});