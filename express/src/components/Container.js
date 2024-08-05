"use client";

import { useState, useEffect } from 'react';
import axios from 'axios'; // axios импортлох
import { AddRecord } from './AddRecord';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Nemeh } from "@/assets/Nemeh";
import { Slider } from "./ui/slider";
import { ComboboxDemo } from './ComboboxDemo';
import { ZuunSum } from '@/assets/ZuunSum';
import { BaruunSum } from '@/assets/BaruunSum';
import { Checkbox } from './ui/checkbox';



export const Container = () => {
    const [accounts, setAccounts] = useState([]); // useState ашиглах
    const [value, setValue] = useState([0, 1000]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/accounts");
                if (Array.isArray(response.data)) {
                    setAccounts(response.data);
                } else {
                    console.error("Expected array but got", response.data);
                }
            } catch (error) {
                console.error("Error fetching accounts:", error);
            }
        };
        getData();
    }, []); // Зөвхөн анхдагч render-д ажиллах

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className=" m-auto bg-[#F3F4F6] pt-6">
                <div className="flex m-auto w-full justify-center gap-6 ">
                    <div className="w-[282px] bg-white border-[1px] rounded-xl border-[#E5E7EB] flex justify-start flex-col gap-[24px] px-[16px] pt-6 ">
                        <div className="flex flex-col gap-[24px]">
                            <div><h3 className="font-semibold text-2xl ">Records</h3></div>
                            <div>
                                <AddRecord>
                                    + Add
                                </AddRecord>
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

                            <div className="flex items-center gap-[8px] px-3 py-1">
                                <Nemeh />
                                <h3>Add Category</h3>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className="font-semibold text-base">Amount Range</h3>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className='flex gap-4'>
                                    <Button className="bg-[#F3F4F6] border-[1px] w-full  text-[#0F172A] font-normal"> {value[0]}</Button>
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
                                    <div className='flex flex-row items-center gap-x-4'><Checkbox />Select All</div>
                                    <div className='text-[#94A3B8] font-semibold'>- 35,500₮</div>
                                </div>
                                <div className='flex flex-col gap-y-3'>
                                    <div className='font-semibold text-base pt-6'>Today</div>
                                    <ul className="w-full border flex flex-col justify-between">
                                        {
                                            accounts.map((account, index) => (
                                                <li key={account?.note + index} className="border">
                                                    {account?.note} - {account?.amount}
                                                </li>
                                            ))
                                        }
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
