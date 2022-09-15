import TopoPost from "./TopoPost"
import ConteudoPost from "./ConteudoPost"
import FundoPost from "./FundoPost"

export default function Post(props) {

    return (

        <div className="post">
            <TopoPost image={props.image} texto ={props.texto}/>

            <ConteudoPost imagepost={props.imagepost} />

            <FundoPost imagecurtida={props.imagecurtida} ultimacurtida ={props.ultimacurtida}  totaldecuridas={props.totaldecuridas}/>
        </div>

    )

}