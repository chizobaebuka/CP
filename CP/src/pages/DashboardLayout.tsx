import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const DashboardLayout = () => {
    return (
        // <div className="">
        //     <Sidebar />
        //     <Navbar />
        // </div>

        <div className="flex flex-row w-screen h-screen overflow-hidden ">
            <div className="">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full bg-indigo-50">
                <Navbar />
            </div>
        </div>
    )
}
export default DashboardLayout