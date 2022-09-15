import Story from "./Story/Story";
import Setinha from "./Story/Setinha";
import ObjetoStoryes from "../Objetos/ObjetoStoryes";

export default function Stories() {

    const array = ObjetoStoryes();
    return (

        <div className="stories">
            {array.map((item,i) => <Story
                image={item.image}
                texto={item.texto}
                key={i} />
            )}

            <Setinha />
        </div>

    )

}