import CurtiuImagem from "./CurtiuImagem"

export default function ConteudoPost(props) {

    return (

        <div className="conteudo">
            <img onDoubleClick={() => CurtiuImagem(props.id)}src={props.imagepost} alt="" />
        </div>

    )

}