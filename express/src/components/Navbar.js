import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = () => {
    return (
        <>

            <div className="lg:w-[1200px] m-auto h-[72px] flex justify-between ">
                <div className="flex justify-center items-center gap-[24px]">
                    <Link href="/login">
                        <img className="w-[40px] h-[40px]" src="/dashboard.png" alt="Dashboard" />
                    </Link>
                    <Link href="/dashboard">
                        <h3 className="font-normal text-base">Dashboard</h3>
                    </Link>
                    <Link href="">
                        <h3 className="font-semibold">Records</h3>
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-[24px]">
                    <Button className="bg-blue-500 rounded-3xl w-[99px] h-[32px]">+ Record</Button>
                    <img className="w-[40px] h-[40px]" src="/Placeholder.png" alt="Placeholder" />
                </div>
            </div>
        </>
    );
};
