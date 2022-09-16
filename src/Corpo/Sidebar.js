import UsuarioSidebar from "./Sidebar/UsarioSidebar"
import SugestoesSidebar from "./Sidebar/SugestoesSidebar"

export default function Sidebar() {

    return (

        <div className="sidebar">

            <UsuarioSidebar />

            <SugestoesSidebar />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>


            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>

        </div>

    )

}