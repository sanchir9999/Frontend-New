"use client"
import React, { useState, useEffect } from 'react';

const ProgressBar = ({ duration, steps }) => {
    const [progress, setProgress] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = duration / steps;

        const timeout = setTimeout(() => {
            if (step < steps) {
                setProgress((prevProgress) => prevProgress + (100 / steps));
                setStep((prevStep) => prevStep + 1);
            }
        }, interval);

        return () => clearTimeout(timeout);
    }, [step, duration, steps]);

    return (
        <div style={{ width: '100%', backgroundColor: '#f3f3f3', height: '10px' }}>
            <div
                style={{
                    width: `${progress}%`,
                    height: '100%',
                    backgroundColor: '#4caf50',
                    transition: `width ${duration / steps}ms linear`,
                }}
            />
        </div>
    );
};

export default ProgressBar;
