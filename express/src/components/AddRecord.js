import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input"


export const AddRecord = () => {
    return (

        <Dialog>
            <DialogTrigger className="w-full bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center">+ Add</DialogTrigger>
            <DialogContent>
                <div className="flex flex-col items-start justify-center">
                    <div>Add Record</div>
                    <div>
                        <div className="flex">
                            <div className="w-[172px] bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center">Expense</div>
                            <div className="w-[172px] bg-[#F3F4F6] text-black rounded-[20px] h-[40px] flex justify-center items-center">Income</div>
                        </div>
                        <div className="w-[348px] h-[340px] border-indigo-500/75">
                            <div className="h-[268px]">
                                <span>Amount</span>
                                <Input placeholder="₮ 000.00"></Input>
                            </div>
                            <span>Category</span>
                            <div className="">
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Choose" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center">Add Record</div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>


    )
}