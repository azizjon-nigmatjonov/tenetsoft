"use client";
import { useRef } from "react";
import { ContactUI } from "../Contact";
import { FooterUI } from "../Footer";
import Header from "../Header";
import { Banner } from "./Banner";
import { Reputation } from "./Reputation";
import { Services } from "./Services";
import { Team } from "./Team";
import { Feedback } from "./Feedback";
import { OurValues } from "./OurValues";
import { useScreenSize } from "@/hooks/useMobile";

const HomePage = () => {
  const ContactRef: any = useRef(null);
  const isMobile: any = useScreenSize("mobile");

  const handleScroll = (position: string) => {
    if (position === "contact") {
      const element = ContactRef.current.getBoundingClientRect();

      window.scrollTo({
        top: element.top - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />

      <Banner handleScroll={handleScroll} />

      <Reputation />

      <Team />

      <Services />

      <Feedback />

      <OurValues />

      <ContactUI ContactRef={ContactRef} />

      {/* <OurStaff /> */}

      <FooterUI handleScroll={handleScroll} />
    </>
  );
};

export default HomePage;
