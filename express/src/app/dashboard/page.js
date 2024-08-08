"use client"
import { Navbar } from "@/components/Navbar";
const Page = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#F3F4F6] m-auto">
                <div className="w-[1200px] m-auto flex flex-col h-screen border-2 gap-[24px] pt-8">
                    <div class=" flex flex-row gap-[24px]">
                        <div class="w-[384px] h-[216px] bg-orange-700 rounded-xl"></div>
                        <div class="w-[384px] h-[216px] bg-orange-700 rounded-xl"></div>
                        <div class="w-[384px] h-[216px] bg-orange-700 rounded-xl"></div>
                    </div>
                    <div class="flex gap-6">
                        <div class="w-[588px] h-[216px] bg-orange-700 rounded-xl"></div>
                        <div class="w-[588px] h-[216px] bg-orange-700 rounded-xl"></div>
                    </div>
                    <div class="w-[1200px] h-[456px] bg-orange-700 rounded-xl"></div>
                </div>
            </div>
        </>
    )
}
export default Page;