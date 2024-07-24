import { Button } from "./ui/button"

export const Navbar = () => {
    return (
        <>
            <div className="lg:w-[1440px] m-auto border-4 border-indigo-500/50 h-[72px] flex justify-between">
                <div className="flex justify-center items-center gap-[24px]">
                    <img className="w-[40px] h-[40px]" src="/dashboard.png"></img>
                    <h3 className="font-normal text-base">Dashboard</h3>
                    <h3 className="font-semibold">Records</h3>
                </div>
                <div className="flex justify-center items-center gap-[24px]">
                    <Button> + Record</Button>
                    <img className="w-[40px] h-[40px]" src="/Placeholder.png"></img>
                </div>
            </div>
        </>
    )
}