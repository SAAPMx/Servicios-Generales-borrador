
import{
    onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
  getTasks,
  saveExt,
  saveInt,
} from "./firebase.js";

const extForm = document.getElementById("ext-form");
const intForm = document.getElementById("int-form");



/*  CÓDIGO PARA FORMULARIO DE EXTERIOR */
extForm.addEventListener("submit", async (e) => { //Agrega nuevas entradas
e.preventDefault();
//EMISOR
const NombreEmisor = extForm["ext-nombre-emisor"];
const UbicacionEmisor = extForm["ext-ubicacion-emisor"];
const Celular = extForm["ext-cel"];
const Correo = extForm["ext-mail"];
//RECEPTOR
const NombreReceptor = extForm["ext-nombre-receptor"];
const EstadoReceptor = extForm["ext-pais-estado-receptor"];
const ColoniaReceptor = extForm["ext-colonia-receptor"];
const CalleReceptor = extForm["ext-calle-receptor"];
const CPReceptor = extForm["ext-cp-receptor"];
//GENERAL
const Descripcion = extForm["ext-descripcion"];

try{
    await saveExt( NombreEmisor.value, 
        UbicacionEmisor.value, Celular.value, Correo.value,
        NombreReceptor.value, EstadoReceptor.value, ColoniaReceptor.value,
        CalleReceptor.value, CPReceptor.value, Descripcion.value);

    extForm.reset(); //Vacias los inputs una vez que se ha guardado la información
    NombreEmisor.focus(); //regresar el cursor al inicio
}catch (error) {
    console.log(error);
}
})



/*  CÓDIGO PARA FORMULARIO DE INTERIOR */
intForm.addEventListener("submit", async (e) => { //Agrega nuevas entradas
    e.preventDefault();
    //EMISOR
    const NombreEmisor = intForm["int-nombre-emisor"];
    const UbicacionEmisor = intForm["int-ubicacion-emisor"];
    const Celular = intForm["int-cel"];
    const Correo = intForm["int-mail"];
    //RECEPTOR
    const NombreReceptor = intForm["int-nombre-receptor"];
    const UbicacionReceptor = intForm["int-ubicacion-receptor"];
    //GENERAL
    const Descripcion = intForm["int-descripcion"];
    
    try{
        await saveInt( NombreEmisor.value, 
            UbicacionEmisor.value, Celular.value, Correo.value,
            NombreReceptor.value, UbicacionReceptor.value, Descripcion.value);
    
        intForm.reset(); //Vacias los inputs una vez que se ha guardado la información
        NombreEmisor.focus(); //regresar el cursor al inicio
    }catch (error) {
        console.log(error);
    }
    })






    
/* CÓDIGO PARA MODAL EXTERNA*/
const openModal = document.querySelector('.active-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_x');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});


/* CÓDIGO PARA MODAL INTERNA   */
const openModalInt = document.querySelector('.active-modalInt');
const modalInt = document.querySelector('.modalInt');
const closeModalInt = document.querySelector('.modal_xInt');

openModalInt.addEventListener('click', (e)=>{
    e.preventDefault();
    modalInt.classList.add('modal--showInt');
});

closeModalInt.addEventListener('click', (e)=>{
    e.preventDefault();
    modalInt.classList.remove('modal--showInt');
});