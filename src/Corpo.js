import Stories from "./Corpo/Stories";
import Posts from "./Corpo/Posts";
import Sidebar from "./Corpo/Sidebar";


export default function Corpo() {

    return (

        <div className="corpo">
            <div className="esquerda">
                <Stories />

                <Posts />
            </div>

            <Sidebar />

        </div>

    )

}