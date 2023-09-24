import down from "../assets/Caret_Down_MD.png"
import tag from "../assets/tag.png"
import userx from "../assets/User_Close.png"
import good from "../assets/User_Check.png"
import voice from "../assets/User_Voice.png"
const Navbar = () => {
    return (
        <div className="flex flex-row h-14">
            <div className="mt-8 mx-8 gap-8 w-[385px]">
                <h1 className="text-xl font-semibold text-[#1D4ED8] mb-2 ">London Internship Program</h1>
                <p className="text-xs font-light text-start">London</p>
            </div>
            <div className="mt-8 mx-8 gap-16 w-[321px]  ">
                <div className="flex bg-white gap-20 rounded-2xl h-10 items-center mb-2">
                    <div className="px-4">
                        <p className="text-[#1D4ED8] text-base font-medium ">Opportunity Browsing</p>
                    </div>
                    <img src={down} alt="" />
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="mt-8 bg-[#FFFFFF] w-10 h-10 ">
                    <img src={tag} alt="" className="items-center justify-center p-2" />
                </div>
                <div className="mt-8 bg-[#FFFFFF] w-10 h-10 ">
                    <img src={userx} alt="" className="items-center justify-center p-2" />
                </div>
                <div className="mt-8 bg-[#FFFFFF] w-10 h-10 ">
                    <img src={good} alt="" className="items-center justify-center p-2" />
                </div>
                <div className="mt-8 bg-[#FFFFFF] w-10 h-10 ">
                    <img src={voice} alt="" className="items-center justify-center p-2" />
                </div>
                <div className="mt-8 bg-[#FFFFFF] w-10 h-10 gap-4">
                    <img src={tag} alt="" className="items-center justify-center p-2" />
                </div>
                <div className="flex flex-row ">
                    <div className="bg-[#1D5DCD] h-10 mt-8">
                        <p className="text-[white] text-base font-normal px-4 py-2 text-center justify-center ">Move to Video Interview</p>
                    </div>
                    <div className="w-[34px] h-10 px-2 py-3 bg-[#1D5DCD] rounded-tr-lg mt-8 rounded-br-lg justify-start items-center gap-2.5 inline-flex">
                        <img src={down} className="w-4 h-4 relative" style={{ filter: 'brightness(0) invert(1) brightness(100%)' }} />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Navbar