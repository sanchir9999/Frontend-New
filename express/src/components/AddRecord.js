import { useState } from "react";
import axios from "axios";
import { CalendarForm } from "@/components/CalendarForm";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { TimeForm } from "./TimeForm";
import { Button } from "./ui/button";

export const AddRecord = () => {
    const [amount, setAmount] = useState("");
    const [selectedType, setSelectedType] = useState("Income"); // Эхний утга "Income"
    const [category, setCategory] = useState(""); // Категорийн утгыг хадгалах стэйт

    const handleClick = (type) => {
        // Сонгогдсон төрлийг шинэчлэх
        setSelectedType(type);
    };

    const createAccount = async () => {
        const newAccount = { amount, category, type: selectedType }; // Сонгогдсон төрлийг нэмсэн
        try {
            await axios.post("http://localhost:3001/accounts", newAccount);
            // Дахин бүх accounts-ийг авах
            const response = await axios.get("http://localhost:3001/accounts");
            if (Array.isArray(response.data)) {
                // setAccounts(response.data); // Та өөрийн `accounts` стэйтийг нэмэх шаардлагатай болно
            } else {
                console.error("", response.data);
            }
        } catch (error) {
            console.error("", error);
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
                    <div className="w-full">
                        <div className="flex mb-4 border-[1px] rounded-[20px] border-[#E5E7EB]">
                            <div
                                className={`w-full text-white rounded-[20px] h-[40px] flex justify-center items-center cursor-pointer ${selectedType === 'Expense' ? 'bg-blue-500' : 'bg-gray-300'}`}
                                onClick={() => handleClick('Expense')}
                            >
                                Expense
                            </div>
                            <div
                                className={`w-full text-white rounded-[20px] h-[40px] flex justify-center items-center cursor-pointer ${selectedType === 'Income' ? 'bg-green-500' : 'bg-gray-300'}`}
                                onClick={() => handleClick('Income')}
                            >
                                Income
                            </div>
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
                            <span className="block mb-2">Category</span>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choose" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Light">Light</SelectItem>
                                    <SelectItem value="Dark">Dark</SelectItem>
                                    <SelectItem value="System">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <CalendarForm />
                            </div>
                            <div>
                                <TimeForm />
                            </div>
                        </div>
                        <Button
                            onClick={createAccount}
                            className="bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center mt-4"
                        >
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
        </Dialog>
    );
};
