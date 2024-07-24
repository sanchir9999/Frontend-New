"use client";

import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eyes } from "@/assets/Eyes";
import { Nemeh } from "@/assets/Nemeh";
import { Slider } from "./ui/slider";

const data = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
];

export const Container = () => {
    const [value, setValue] = useState([50]); // Slider-ийн үзүүлэлтийг хадгалах useState

    const handleChange = (newValue) => {
        setValue(newValue); // Slider-ийн үзүүлэлт өөрчлөгдөх үед шинэчилнэ
    };

    return (
        <>
            <div className="w-[1440px] m-auto">
                <div className="flex m-auto w-full justify-between">
                    <div className="w-[282px] h-[1080px] border-4 border-indigo-500/50 flex justify-start flex-col gap-[24px] px-[16px]">
                        <div className="flex flex-col gap-[24px]">
                            <div><h3 className="font-semibold text-2xl">Records</h3></div>
                            <div><Button className="bg-blue-500 w-full">+ Add</Button></div>
                        </div>
                        <div><Input placeholder="search" /></div>
                        <div className="flex flex-col gap-[16px] font-semibold text-base">
                            <div className="">
                                <h3>Types</h3>
                            </div>
                            <div className="">
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
                        <div>
                            <div className="flex justify-between content-center">
                                <h3 className="font-semibold text-base">Category</h3>
                                <h4 className="opacity-15">Clear</h4>
                            </div>
                            <div>
                                <Eyes />
                                {data.map((title, index) => (
                                    <div key={index}>{title}</div>
                                ))}
                                <div className="flex gap-[8px]">
                                    <Nemeh />
                                    <h3>Add Category</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className="font-semibold text-base">Amount Range</h3>
                            </div>
                            <div>
                                <p>Үзүүлэлт: {value}</p>
                                <Slider value={value} onValueChange={handleChange} min={0} max={1000} step={1} />

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[894px] h-[300px] border-4 border-indigo-500/50"></div>
                        <div className="h-[980px] w-[894px] border-4 border-indigo-500/50"></div>
                    </div>
                </div>
            </div>
        </>
    );
};
