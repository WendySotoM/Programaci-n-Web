
document.getElementById('btnR').addEventListener('click', ()=>{
    let nom = document.getElementById('inputnombre').value;
    let apellido = document.getElementById('inputapellido').value;
    let usuario = document.getElementById('inputusu').value;
    let correo = document.getElementById('inputcore').value;
    let contraseña = document.getElementById('inputpassword').value;

    if(nom === "Wendy" && apellido === "Soto" && usuario==="wendy" && correo==="200100059@upve.edu.mx" && contraseña==="123"){
        alert('Se ha registrado exitosamente')
        sessionStorage.setItem("login", "true");
    }else{
        alert("Campo vacio o incorrecto")
        sessionStorage.setItem("login", "false");
    }
    let session = sessionStorage.getItem("login");
    console.log(session);
});
