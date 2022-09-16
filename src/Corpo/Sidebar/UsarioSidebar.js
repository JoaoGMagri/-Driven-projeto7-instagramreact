import React, {useState} from "react"

export default function UsuarioSidebar() {

    const[nomeDoUsuario, setNomeDoUsuario] = useState("Catana")
    const[imagemDoUsuario, setImagemDoUsuario] = useState("assets/img/catanacomics.svg")

    function editarNome() {

        const nomeUsuario = prompt('Qual nome de usuario deseja colocar?');
        setNomeDoUsuario(nomeUsuario);
        
    }

    function editarImagem() {

        const imageUsuario = prompt('Qual imagem de usuario deseja colocar?');
        setImagemDoUsuario(imageUsuario);
        
    }

    return (

        <div className="usuario">
            <img onClick={editarImagem}src={imagemDoUsuario} alt=""/>
            <div className="texto">
                <strong>catanacomics</strong>
                <div>
                    <span>{nomeDoUsuario}</span>
                    <div className="editar">
                        <ion-icon onClick={editarNome} name="pencil-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>

    )

}