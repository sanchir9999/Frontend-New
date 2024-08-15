"use context"
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/Providers/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
      <ToastContainer />

    </html>
  );
}
