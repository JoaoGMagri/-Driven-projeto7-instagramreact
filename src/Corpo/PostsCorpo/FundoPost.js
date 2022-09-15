export default function FundoPost(props) {

    return (

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.imagecurtida} alt="" />
                <div className="texto">
                    Curtido por <strong>{props.ultimacurtida}</strong> e <strong>outras {props.totaldecuridas} pessoas</strong>
                </div>
            </div>
        </div>

    )

}