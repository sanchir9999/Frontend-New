// src/components/TimeForm.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import TimePicker from './TimePicker';
import 'react-toastify/dist/ReactToastify.css';

const FormSchema = z.object({
    time: z.date({
        required_error: 'A time is required.',
    }),
});

export function TimeForm() {
    const { register, handleSubmit, setValue, watch } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            time: new Date(),
        },
    });

    const onSubmit = (data) => {
        toast.success(`Selected time: ${data.time.toLocaleTimeString()}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-start">
            <label htmlFor="time">Date</label>
            <div className='h-[40px] border-[1px] rounded-xl border-[#E5E7EB] flex justify-center items-center'  >
                <TimePicker
                    value={watch('time')}
                    onChange={(date) => setValue('time', date)}
                />
            </div>
        </form>
    );
}
