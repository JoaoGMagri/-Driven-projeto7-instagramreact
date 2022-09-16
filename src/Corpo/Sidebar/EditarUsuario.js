export default function EditarNome() {

    const nomeUsuario = prompt('Qual nome de usuario deseja colocar?');
    const nomeAtual = document.querySelector('.nomedousuario');
    nomeAtual.innerHTML = nomeUsuario;
    
}