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
        console.log("Damjiv");
        try {
            const res = await api.post("auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user);
            router.replace("/")
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