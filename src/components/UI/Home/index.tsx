"use client";
import { useRef } from "react";
import { ContactUI } from "../Contact";
import { FooterUI } from "../Footer";
import Header from "../Header";
import { Banner } from "./Banner";
import { Reputation } from "./Reputation";
import { Services } from "./Services";
import { Team } from "./Team";

const HomePage = () => {
  const ContactRef: any = useRef(null);
  const handleScroll = (position: string) => {
    if (position === "contact") {
      const element = ContactRef.current.getBoundingClientRect();

      window.scrollTo({
        top: element.top,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Header handleScroll={handleScroll} />

      <Banner handleScroll={handleScroll} />

      <Reputation />

      <Team />

      <Services />

      <ContactUI ContactRef={ContactRef} />

      <FooterUI />
    </>
  );
};

export default HomePage;
