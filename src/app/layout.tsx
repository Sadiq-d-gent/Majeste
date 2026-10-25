import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Majesté — A Mark of Distinction", description: "The art of being invited. A private world for exceptional celebrations." };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
