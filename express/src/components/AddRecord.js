import { CalendarForm } from "@/components/CalendarForm"
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
import { TimeForm } from "./TimeForm"
import { Link } from "lucide-react"
import CatergoryButton from "@/components/CategoryButton"
export const AddRecord = () => {
    return (
        <Dialog>
            <DialogTrigger className="w-full bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center">
                + Add
            </DialogTrigger>
            <DialogContent className="w-[792px] flex flex-row items-start justify-between">

                <div className="flex flex-col">
                    <div>Add Record</div>
                    <div className="w-full ">
                        <div className="flex mb-4 border-[1px] rounded-xl border-[#E5E7EB]">
                            <div className="w-[172px] bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center">Expense</div>
                            <CatergoryButton />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mb-4">
                            <span className="block mb-2">Amount</span>
                            <Input placeholder="₮ 000.00" />
                        </div>
                        <div className="mb-4">
                            <span className="block mb-2">Category</span>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choose" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className=" grid grid-cols-2 gap-4">
                            <div >
                                <CalendarForm />
                            </div>
                            <div >
                                <TimeForm />
                            </div>
                        </div>
                        <div className="bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center mt-4">
                            Add Record
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[396px]">
                        <span>Payee</span>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Write here" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <span>Note</span>
                            <Input placeholder="Write holder" className="w-full h-[280px]" />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}
