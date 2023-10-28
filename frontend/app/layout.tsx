import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Providers from "./_providers/Providers";
import ToastProvider from "@/components/shared/ToastProvider";
import "@rainbow-me/rainbowkit/styles.css";
import {NextUIProvider} from "@nextui-org/react";


export const metadata: Metadata = {
  title: "midas",
  description: "midas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-LightForest" suppressHydrationWarning>
        <ToastProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </ToastProvider>
      </body>
    </html>
  );
}
