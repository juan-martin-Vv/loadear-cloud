const boton=document.getElementById('boton');
const nube=document.getElementById('nube');


boton.addEventListener('click',()=>{
    nube.showModal();
})
nube.addEventListener('click',()=>{
    nube.close();
});