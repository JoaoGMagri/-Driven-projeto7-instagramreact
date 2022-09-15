export default function TopoPost(props) {

    return (

        <div className="topo">

            <div className="usuario">
                <img src={props.image} alt="" />
                {props.texto}
            </div>

            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

        </div>

    )

}