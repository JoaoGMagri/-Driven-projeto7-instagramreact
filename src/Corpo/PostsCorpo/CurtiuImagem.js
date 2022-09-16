export default function CurtirImagem(id) {

    const curtida = document.querySelector(`.curtida${id}`);
    const numcurtida = document.querySelector(`.numcurtidas${id}`);
    console.log(numcurtida.innerHTML);
    if(curtida.name === "heart-outline")  {
        
        curtida.name = "heart";
        curtida.classList.add("vermelha");
        numcurtida.innerHTML++;
    } else {

        return

    }

}