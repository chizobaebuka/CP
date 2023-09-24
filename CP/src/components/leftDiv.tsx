import search from "../assets/Search_Magnifying_Glass.png"
import warning from "../assets/Circle_Warning.png"
import file from "../assets/File_Document.png"
import down from "../assets/Caret_Down_MD.png"


const leftDiv = () => {
    return (
        <div>
            <div className="flex flex-col mt-10 px-8">
                <div className="flex flex-row w-[385px] border justify-between rounded-lg bg-white" >
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={search} alt="" />
                        </div>
                        <p className="text-sm text-[#9AA6AC] py-4 justify-center gap-4">Search by name, edu, exp or #tag</p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={warning} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] border justify-between rounded-lg bg-white mt-6" >
                    <div className="w-[385px] h-[58px] px-4 py-[18px] justify-between items-center inline-flex">
                        <p className="text-neutral-950 text-sm font-medium leading-snug">Filters</p>
                        <div></div>
                        <p className="text-neutral-950 text-xs font-light leading-snug">0 Selected</p>
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white" >
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">Personal Information</p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white" >
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">Education</p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white" >
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">Work Experience</p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white" >
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">Activity Filter</p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white" >
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">Advanced Filter</p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default leftDiv