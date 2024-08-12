"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AddRecord } from './AddRecord';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "./ui/slider";
import { ComboboxDemo } from './ComboboxDemo';
import { ZuunSum } from '@/assets/ZuunSum';
import { BaruunSum } from '@/assets/BaruunSum';
import { Checkbox } from './ui/checkbox';
import { AddCategory } from './AddCategory';

export const Container = () => {
    const [accounts, setAccounts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState([0, 1000]);

    const getData = async () => {
        try {
            const [accountsResponse, categoriesResponse] = await Promise.all([
                axios.get("http://localhost:3001/accounts"),
                axios.get("http://localhost:3001/categories"),
            ]);

            if (Array.isArray(accountsResponse.data)) {
                setAccounts(accountsResponse.data);
            } else {
                console.error("Expected array but got", accountsResponse.data);
            }

            if (Array.isArray(categoriesResponse.data)) {
                setCategories(categoriesResponse.data);
            } else {
                console.error("Expected array but got", categoriesResponse.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleRecordAdded = async () => {
        await getData(); // Refresh data
    };

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const totalIncome = accounts
        .filter(account => account.type === 'Income')
        .reduce((sum, account) => sum + parseFloat(account.amount), 0);

    const totalExpense = accounts
        .filter(account => account.type === 'Expense')
        .reduce((sum, account) => sum + parseFloat(account.amount), 0);

    const balance = totalIncome - totalExpense;
    return (
        <>
            <div className="m-auto bg-[#F3F4F6] pt-6">
                <div className="flex m-auto w-full justify-center gap-6">
                    <div className="w-[282px] bg-white border-[1px] rounded-xl border-[#E5E7EB] flex justify-start flex-col gap-[24px] px-[16px] pt-6">
                        <div className="flex flex-col gap-[24px]">
                            <div><h3 className="font-semibold text-2xl">Records</h3></div>
                            <div>
                                <AddRecord onRecordAdded={handleRecordAdded} categories={categories} />
                            </div>
                        </div>
                        <div><Input placeholder="Search" /></div>
                        <div className="flex flex-col gap-[16px] font-semibold text-base">
                            <div className="">
                                <h3>Types</h3>
                            </div>
                            <div>
                                <RadioGroup defaultValue="All">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="All" id="r1" />
                                        <Label htmlFor="r1">All</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Income" id="r2" />
                                        <Label htmlFor="r2">Income</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Expense" id="r3" />
                                        <Label htmlFor="r3">Expense</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between content-center">
                                <h3 className="font-semibold text-base">Category</h3>
                                <h4 className="opacity-15">Clear</h4>
                            </div>
                            <ul className="flex flex-col gap-2">
                                {categories.map((category, index) => (
                                    <li key={category.id} className="py-2 px-4 flex items-center">
                                        <img src="/eyesicon.png" alt={`Eye icon for ${category.name}`} className="w-6 h-6 mr-2" />
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center gap-[8px] px-3 py-1">
                                <AddCategory />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className="font-semibold text-base">Amount Range</h3>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className='flex gap-4'>
                                    <Button className="bg-[#F3F4F6] border-[1px] w-full text-[#0F172A] font-normal"> {value[0]}</Button>
                                    <Button className="bg-[#F3F4F6] border-[1px] w-full text-[#0F172A] font-normal"> {value[1]}</Button>
                                </div>
                                <Slider value={value} onValueChange={handleChange} min={0} max={1000} step={1} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="w-[894px] h-[80px] flex justify-between items-center">
                            <div className="flex justify-center items-center gap-4">
                                <Button className="bg-[#E5E7EB]"><ZuunSum /></Button>
                                Last 30 Days
                                <Button className="bg-[#E5E7EB]"><BaruunSum /></Button>
                            </div>
                            <ComboboxDemo />
                        </div>
                        <div className=" h-[1080px] overflow-x-scroll flex gap-y-6 flex-col">
                            <div className="h-[980px] w-[894px]">
                                <div className="flex w-full h-[64px] border-[1px] rounded-xl border-[#E5E7EB] justify-between items-center px-6">
                                    <div className='flex flex-row items-center gap-x-4'><Checkbox />Үлдэгдэл</div>
                                    <div className='text-[#94A3B8] font-semibold'>{balance}₮</div>
                                </div>
                                <div className='flex flex-col gap-y-3'>
                                    <div className='font-semibold text-base pt-6'>Today</div>
                                    <ul className="w-full border flex flex-col">
                                        {accounts.map((account, index) => {
                                            const categoryName = categories.find(cat => cat.name === account.category)?.name || "Unknown Category";
                                            const isExpense = account.type === 'Expense';
                                            return (
                                                <li key={account?.note + index} className={`border ${isExpense ? 'bg-red-100' : 'bg-green-100'}`}>
                                                    <div className="w-full flex justify-between items-center">
                                                        <div className={`text-gray-700 ${isExpense ? 'text-red-600' : 'text-green-600'}`}>
                                                            {categoryName}
                                                        </div>
                                                        <div className="font-semibold text-gray-900">{account?.amount}</div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className='w-[894px]'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
