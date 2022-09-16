import CurtirIcone from "./CurtirIcone"
import SalvouPost from "./SalvouPost"

export default function FundoPost(props) {

    const id = `curtida${props.id}`;
    const idcurtida = `numcurtidas${props.id}`
    return (

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon onClick={CurtirIcone.bind(this,props.id)} class={id} name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon onClick={SalvouPost.bind()} name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.imagecurtida} alt="" />
                <div className="texto">
                    Curtido por <strong>{props.ultimacurtida}</strong> e <strong>outras <span className={idcurtida}>{props.totaldecuridas}</span> pessoas</strong>
                </div>
            </div>
        </div>

    )

}