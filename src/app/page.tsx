import HomePage from "@/components/UI/Home";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sotuvchi website",
  description: "Ajoyib tovarlar bizda mavjud",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HomePage />

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
