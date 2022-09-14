import Stories from "./Corpo/Stories";
import Posts from "./Corpo/Posts";
import Sidebar from "./Corpo/Sidebar";


export default function Corpo() {

    return (

        <div class="corpo">
            <div class="esquerda">
                <Stories />

                <Posts />
            </div>

            <Sidebar />

        </div>

    )

}