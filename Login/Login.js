document.getElementById('btnL').addEventListener('click', ()=>{
    let usr = document.getElementById('inputUsrname').value;
    let pass = document.getElementById('inputpassword').value;

    if(usr === "Wendy" && pass==="123"){
        alert('Sesión iniciada')
        sessionStorage.setItem("login", "true");
    }else{
        alert("Usuario/Contraseña incorrecta")
        sessionStorage.setItem("login", "false");
    }
    let session = sessionStorage.getItem("login");
    console.log(session);
});
