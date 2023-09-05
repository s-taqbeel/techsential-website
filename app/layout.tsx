import './globals.css'
import "../styles/index.css";
import localFont from "next/font/local";
import type { Metadata } from 'next'


const poppinsRegular = localFont({
  src: "../assets/fonts/PoppinsRegular.ttf",
  variable: "--font-poppins",
});

const poppinsSemiBold = localFont({
  src: "../assets/fonts/PoppinsSemiBold.ttf",
  variable: "--font-poppins-semiBold",
});

const poppinsBold = localFont({
  src: "../assets/fonts/PoppinsBold.ttf",
  variable: "--font-poppins-bold",
});



const poppinsLight = localFont({
  src: "../assets/fonts/PoppinsLight.ttf",
  variable: "--font-poppins-light",
});

const poppinsMedium = localFont({
  src: "../assets/fonts/PoppinsMedium.ttf",
  variable: "--font-poppins-medium",
});


export const metadata: Metadata = {
  title: 'Techsential',
  description: 'Fueling Digital Transformation with Elegant Web and Mobile Solutions. Your Partner for Quality Development Services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable}  ${poppinsLight.variable} bg-black font-poppins`}>{children}</body>
    </html>
  )
}
