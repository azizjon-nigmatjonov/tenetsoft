import SEO from "@/components/CElements/SEO";
import HomePage from "@/components/UI/Home";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <SEO title="Home page" />
      <HomePage />

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
