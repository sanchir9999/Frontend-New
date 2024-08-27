"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();

    // `user` болон `setUser` функцийг useState-аар тодорхойлж байна
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    const login = async (email, password) => {
        try {
            const res = await api.post("auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user);  // `user` state-ийг шинэчлэх
            setIsLoggedIn(true);
            router.replace("/");
        } catch (error) {
            console.log(error.response?.data);
            toast.error(error.response?.data?.message || "Login failed");
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
        <AuthContext.Provider value={{ isLoggedIn, user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
