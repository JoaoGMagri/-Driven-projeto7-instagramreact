import TopoPost from "./TopoPost"

import FundoPost from "./FundoPost"

export default function Post(props) {

    return (

        <div className="post">
            <TopoPost
                image={props.image}
                texto={props.texto} />

            <FundoPost
                imagepost={props.imagepost}
                imagecurtida={props.imagecurtida}
                ultimacurtida={props.ultimacurtida}
                totaldecuridas={props.totaldecuridas} />
        </div>

    )

}