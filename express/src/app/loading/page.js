"use client"
import Loading from "@/components/Loading";

const Page = () => {
    return (
        <>
            <div className="w-[1500px] m-auto flex justify-center h-[700px] items-center">
                <div className="w-[172px] h-[184px] flex flex-col ">
                    <div className="flex flex-col items-center  justify-center bg-white gap-[40px]">
                        <img src="Frame 3.png" className="w-[172px] h-[64px]"></img>
                    </div>

                    <Loading />

                </div>
            </div>
        </>
    )
}
export default Page;