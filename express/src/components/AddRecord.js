import { useState } from "react";
import axios from "axios";
import { CalendarForm } from "@/components/CalendarForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { TimeForm } from "./TimeForm";
import { Button } from "./ui/button";

export const AddRecord = ({ onRecordAdded, categories }) => {
    const [amount, setAmount] = useState("");
    const [selectedType, setSelectedType] = useState("Income");
    const [category, setCategory] = useState("");
    const [calendarValue, setCalendarValue] = useState("");
    const [timeValue, setTimeValue] = useState("");

    const handleClick = (type) => {
        setSelectedType(type);
    };

    const createAccount = async () => {
        const newAccount = { amount, category, type: selectedType, date: calendarValue, time: timeValue };
        try {
            await axios.post("http://localhost:3001/accounts", newAccount);
            if (onRecordAdded) {
                onRecordAdded(); // Мэдээллийг дахин ачаалах
            }
        } catch (error) {
            console.error("Бичлэг нэмэхэд алдаа гарлаа:", error);
        }
    };

    const createCategory = async () => {
        const newCategory = { name: category };
        try {
            await axios.post("http://localhost:3001/categories/create", newCategory);
            if (onRecordAdded) {
                onRecordAdded(); // Мэдээллийг дахин ачаалах
            }
        } catch (error) {
            console.error("Категори нэмэхэд алдаа гарлаа:", error);
        }
    };

    const handleSubmit = async () => {
        await createAccount();
        await createCategory();
    };

    return (
        <Dialog>
            <DialogTrigger className="w-full bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center">
                + Add
            </DialogTrigger>
            <DialogContent className="w-[792px] flex flex-row items-start justify-between">
                <div className="flex flex-col">
                    <div>Нэмэх</div>
                    <div className="w-full">
                        <div className="flex mb-4 border-[1px] rounded-[20px] border-[#E5E7EB]">
                            <div
                                className={`w-full text-white rounded-[20px] h-[40px] flex justify-center items-center cursor-pointer ${selectedType === 'Expense' ? 'bg-red-500' : 'bg-gray-300'}`}
                                onClick={() => handleClick('Expense')}
                            >
                                Зарлага
                            </div>
                            <div
                                className={`w-full text-white rounded-[20px] h-[40px] flex justify-center items-center cursor-pointer ${selectedType === 'Income' ? 'bg-green-500' : 'bg-gray-300'}`}
                                onClick={() => handleClick('Income')}
                            >
                                Орлого
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mb-4">
                            <span className="block mb-2">Дүн</span>
                            <Input
                                placeholder="₮ 000.00"
                                className="border"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <span className="block mb-2">Категори</span>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Сонгох" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Food & Drinks">Food & Drinks</SelectItem>
                                    <SelectItem value="Shopping">Shopping</SelectItem>
                                    <SelectItem value="Transportation">Transportation</SelectItem>
                                    <SelectItem value="Vehicle">Vehicle</SelectItem>
                                    <SelectItem value="Life & Entertainment">Life & Entertainment</SelectItem>
                                    <SelectItem value="Communication, PC">Communication, PC</SelectItem>
                                    <SelectItem value="Financial expenses">Financial expenses</SelectItem>
                                    <SelectItem value="Investments">Investments</SelectItem>
                                    <SelectItem value="Income">Income</SelectItem>
                                    <SelectItem value="Others">Others</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <CalendarForm
                                    value={calendarValue} onValueChange={setCalendarValue} />
                            </div>
                            <div>
                                <TimeForm
                                    value={timeValue} onValueChange={setTimeValue} />
                            </div>
                        </div>
                        <Button
                            onClick={handleSubmit}
                            className="bg-[#0166FF] text-white rounded-[20px] h-[40px] flex justify-center items-center mt-4"
                        >
                            Бичлэг нэмэх
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
