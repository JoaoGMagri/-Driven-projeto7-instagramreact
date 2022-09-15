import SugestaoSugestoes from "./SugestaoSugestoes"
import TituloSugestoes from "./TituloSugestoes"
import ObjetoSugestoes from "../../Objetos/ObjetoSugestoes"

export default function SugestoesSidebar() {

    const array = ObjetoSugestoes()
    return (

        <div className="sugestoes">
            <TituloSugestoes />

            {array.map((item, i) => <SugestaoSugestoes
                image={item.image}
                nome={item.nome}
                razao={item.razao}
                key={i} />
            )}

        </div>

    )

}