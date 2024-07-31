import { Tugrug } from "@/assets/Tugrug"
import ProgressBar from "@/components/ProgressBar"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectItem } from "@/components/ui/select"
import Link from "next/link"
const Page = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-[141px]">
                <div>
                    <img src="Frame 3.png" className="w-[107px] h-[40px]"></img>
                    <div><ProgressBar duration={5000} steps={10} /></div>
                </div>
                <div className="w-[384px] h-[308px] flex flex-col gap-[12px]">
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex flex-col justify-center gap-[16px] items-center">
                                <Tugrug />
                                <h2 className="font-semibold text-2xl">Select base currency</h2>
                            </div>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="MNT - Mongolian Tugrukh" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">USA - Dollar</SelectItem>
                                        <SelectItem value="dark">India - Rubi</SelectItem>
                                        <SelectItem value="system">SUNG - Dollar</SelectItem>
                                        <SelectItem value="system">CHINA - YON</SelectItem>
                                        <SelectItem value="system">JPN - YEN</SelectItem>
                                        <SelectItem value="system">KOREA - WON</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <span>
                            <div>
                                Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one
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
