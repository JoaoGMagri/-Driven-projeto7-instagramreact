import EditarNome from "./EditarUsuario"
import EditarImagem from "./EditarImagem"

export default function UsuarioSidebar() {

    return (

        <div className="usuario">
            <img onClick={EditarImagem} className="imagemdousuario"src="assets/img/catanacomics.svg" alt=""/>
            <div className="texto">
                <strong>catanacomics</strong>
                <div>
                    <span className="nomedousuario">Catana</span>
                    <div className="editar">
                        <ion-icon onClick={EditarNome} name="pencil-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>

    )

}