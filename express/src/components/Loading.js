import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Loading = () => {
    const [showLoading, setShowLoading] = useState(false);
    const [countdown, setCountdown] = useState(5); // 5 секундийн цаг
    const router = useRouter(); // next/navigation ашиглах

    useEffect(() => {
        let countdownTimer;
        const loadingTimer = setTimeout(() => {
            setShowLoading(true);
            countdownTimer = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(countdownTimer);
                        if (router && typeof router.push === 'function') {
                            router.push('/Select'); // Шилжих хуудасны зам
                        } else {
                            console.error('router.push is not a function');
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000); // 1 секунд
        }, 50); // 5 секунд

        return () => {
            clearTimeout(loadingTimer);
            clearInterval(countdownTimer);
        };
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            {showLoading && (
                <div className="text-center flex flex-col justify-center items-center">
                    <div className="loader"></div>
                    <p className="mt-1">
                        Та түр хүлээнэ үү... {countdown} секунд үлдлээ
                    </p>
                </div>
            )}
            <style jsx>{`
                .loader {
                    border: 8px solid #f3f3f3; /* Хоёрдогч өнгө */
                    border-radius: 50%;
                    border-top: 8px solid #3498db; /* Головчин өнгө */
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;
