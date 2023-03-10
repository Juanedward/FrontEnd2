/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingresá tu nombre');
  datosPersona.edad = (parseInt(2023) - parseInt(prompt('Ingresá tu año de nacimiento')));
  datosPersona.ciudad = prompt('Ingresá tu ciudad de recidencia');
  const interesJS = confirm('Te interesa JavaScript?');
  function respuestaJS() {if(interesJS){ // crea funcion para cambiar el true/false del boolean a una rta si/no
    return 'Si'
  } else {return'No'}};
  datosPersona.interesPorJs = respuestaJS()

  console.log(datosPersona);// para ver en consola los datos que captura
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector('span');
  nombre.innerHTML = datosPersona.nombre;
  edad.innerHTML = parseInt(datosPersona.edad);
  ciudad.innerHTML = datosPersona.ciudad; 
  javascript.innerHTML = datosPersona.interesPorJs;  
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  listado.forEach(element => {
  const fila = document.getElementById('fila');
  const miTemplate = `
  <div class="caja"> </div>
  <img src= "${listado.imgUrl}" alt="${listado.lenguajes}">
  <p>${listado.bimestre}</p>
  `;
  fila.innerHTML += miTemplate;
  })
  // 1ro tengo que insertar los parrafos con clase 'caja' - con template
  // 2do Francia y Brasil, pero aca tengo que agregar los atributos que estan en el array de objetos 'listado'
};
    




function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 sitio.classList.toggle('dark');
  
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
