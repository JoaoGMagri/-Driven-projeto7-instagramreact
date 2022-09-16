import SugestaoSugestoes from "./SugestaoSugestoes"
import ObjetoSugestoes from "../../Objetos/ObjetoSugestoes"

export default function SugestoesSidebar() {

    const array = ObjetoSugestoes()
    return (

        <div className="sugestoes">

            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {array.map((item, i) => <SugestaoSugestoes
                image={item.image}
                nome={item.nome}
                razao={item.razao}
                key={i} />
            )}

        </div>

    )

}