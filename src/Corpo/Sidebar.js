import UsuarioSidebar from "./Sidebar/UsarioSidebar"
import SugestoesSidebar from "./Sidebar/SugestoesSidebar"
import LinksSideBar from "./Sidebar/LinksSidebar"
import CopyRightSidebar from "./Sidebar/CopyRightSidebar"

export default function Sidebar() {

    return (

        <div className="sidebar">
            <UsuarioSidebar />

            <SugestoesSidebar />

            <LinksSideBar />

            <CopyRightSidebar />
        </div>

    )

}