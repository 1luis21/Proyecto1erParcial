const guardar_datosLogin = () =>{
    
}

const login = () => {
    let tel = document.getElementById("txtTelefono").value;
    let pw  = document.getElementById("txtPassword").value;

    if (tel == 3121983578 && pw == 321){
        alert("Logged in");
        window.location.href = "pagina1.html";
    }

    else{
        alert("Error");
    }
};


//AQUI COMIENZA EL CÓDIGO PARA GRABAR EN LOCALSTORAGE LOS DATOS/USUARIOS QUE SON DEUDORES