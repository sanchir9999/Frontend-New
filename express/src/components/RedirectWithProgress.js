"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '@/components/ProgressBar';

const RedirectWithProgress = ({ duration, target, steps }) => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push(target);
        }, duration);

        return () => clearTimeout(timer);
    }, [router, duration, target]);

    return (
        <div>
            <h1>Түр хүлээнэ үү...</h1>
            <ProgressBar duration={5000} steps={10} />
        </div>
    );
};

export default RedirectWithProgress;
