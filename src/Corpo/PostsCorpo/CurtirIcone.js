export default function CurtirIcone(id, objeto) {

    const curtida = objeto.target
    const numcurtida = document.querySelector(`.numcurtidas${id}`);
    
    if(curtida.name === "heart-outline")  {
        
        curtida.name = "heart";
        curtida.classList.add("vermelha");
        numcurtida.innerHTML++;

    } else {

        curtida.name = "heart-outline";
        curtida.classList.remove("vermelha");
        numcurtida.innerHTML--;

    }

}