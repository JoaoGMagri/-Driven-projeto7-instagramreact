export default function EditarImagem() {

    const imageUsuario = prompt('Qual imagem de usuario deseja colocar?');
    const imageAtual = document.querySelector('.imagemdousuario');
    imageAtual.setAttribute('src', imageUsuario);
    
}