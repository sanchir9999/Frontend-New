import { Tugrug } from "@/assets/Tugrug"
import ProgressBar from "@/components/ProgressBar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
const Page = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-[141px]">
                <div>
                    <img src="Frame 3.png" className="w-[107px] h-[40px]"></img>
                    <div><ProgressBar duration={500} steps={10} /></div>
                </div>
                <div className="w-[384px] h-[308px] flex flex-col gap-[12px]">
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex flex-col justify-center gap-[16px] items-center">
                                <Tugrug />
                                <h2 className="font-semibold text-2xl"></h2>
                            </div>
                            <div>
                                <Input placeholder="Email"></Input>
                            </div>
                        </div>
                        <span>
                            <div>
                                How much cash do you have in your wallet?
                            </div>
                        </span>
                    </div>
                    <Link href="/Select2">
                        <div><Button className="bg-[#0166FF] rounded-3xl w-full">Confirm</Button></div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Page
