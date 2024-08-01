"use client"
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
import { useEffect } from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import axios from "axios"
export const AddRecord = () => {

    const [amount, setAmount] = useState("")
    const [note, setNote] = useState("")
    const [accounts, setAccounts] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://localhost:3001/accounts");
            setAccounts(response.data);
        };
        getData();

    }, [])
    const createAccount = async () => {
        const newAccount = {
            amount,
            note,
        };
        try {
            await axios.post("http://localhost:3001/accounts", newAccount);
            // Refresh account list after adding new account
            const response = await axios.get("http://localhost:3001/accounts");
            setAccounts(response.data);
            // Reset form
            setAmount("");
            setNote("");
        } catch (error) {
            console.error("Error creating account:", error);
        }
    };


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
                            <Input
                                className="border"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <span className="block mb-2">Note</span>
                            <Input
                                placeholder="Write here"
                                className="w-full h-[280px]"
                                value={note}
                                onChange={(event) => setNote(event.target.value)}
                            />
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
                        <ul>
                            {accounts.map((account, index) => (
                                <li key={account.note + index}>
                                    {account.note} - {account.amount}
                                </li>
                            ))}
                        </ul>
                        <Button onClick={createAccount} className="bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center mt-4">
                            Add Record
                        </Button>

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
