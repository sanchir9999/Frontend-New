"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    const login = async (email, password) => {
        console.log(email, password);
        try {

            console.log(email, password);

            const response = await api.post("/auth/login", { email, password });

            toast.success(response.data.message);
            setIsLoggedIn(true);
            localStorage.setItem("token", "token");
            router.push("/");
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) setIsLoggedIn(true);

        setIsChecking(false);
    }, []);

    useEffect(() => {
        if (isChecking) return;
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn, isChecking]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);