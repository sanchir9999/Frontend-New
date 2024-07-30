import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 h-screen">
                <div className="flex flex-col items-center  justify-center bg-white gap-[40px]">
                    <img src="Frame 3.png" className="w-[92px] h-[34px]"></img>
                    <div className="flex flex-col items-center">
                        <h1 className="font-semibold text-2xl">Welcome Back</h1>
                        <span>Welcome back, Please enter your details</span>
                    </div>
                    <div className="flex flex-col justify-center gap-[16px] w-[384px]">
                        <Input placeholder="Email"></Input>
                        <Input placeholder="Password"></Input>
                        <Button className="bg-[#0166FF] rounded-3xl">Log in</Button>
                    </div>
                    <div>
                        <span>Don’t have account?</span>
                        <Link href="/signup">
                            <Button className="bg-[white] text-[#0166FF]">Sign up</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-[#0166FF]"></div>
            </div>
        </>
    )
}
export default Page;