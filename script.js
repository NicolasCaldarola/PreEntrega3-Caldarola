let H2 = document.getElementById ("Titulo");  
H2.innerText= "Formulario" 

let miFormulario = document.getElementById("Formulario") ; 
miFormulario.addEventListener ("submit", validarFormulario); 

function validarFormulario(e){ 
    e.preventDefault();
    console.log("Formulario Enviado");    
}

let input1  = document.getElementById("usuario"); 
let input2  = document.getElementById("contrasenia"); 
let input3  = document.getElementById("email"); 
let input4  = document.getElementById("telefono");

input1.onchange = () => {console.log("valor1")};  
input2.onchange = () => {console.log("valor2")};
input3.onchange = () => {console.log("valor3")};
input4.onchange = () => {console.log("valor4")};


// ARRAY CON LOS DATOS INGRESADOS Y GUARDADOS
let datos = []
// let miFormulario . . . Seteado en linea 4

miFormulario.addEventListener ("submit", agregarDatos );


function agregarDatos(evento) {
    evento.preventDefault(); 
    let Formulario = evento.target.children;

    let infoDatos = {

        usuario: Formulario[1].value,
        contrasenia: Formulario[5].value,
        email: Formulario[9].value,
        telefono: Formulario[13].value,
    }

    let nuevosDatos = document.createElement("li");
    nuevosDatos.innerText = `
                                Usuario: ${infoDatos.usuario},
                                Contrasenia: ${infoDatos.contrasenia},
                                Email: ${infoDatos.email},
                                Teléfono: ${infoDatos.telefono}
    `;

    document.querySelector("#datos").append(nuevosDatos);

    datos.push(infoDatos);

    document.getElementById("reset").click();
}

let btnGuardar = document.getElementById("guardar")

btnGuardar.onclick = () => {
    localStorage.setItem ( "listaDatos", JSON.stringify(datos) );
}








