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

import SEO from "@/components/CElements/SEO";
import { TeamMembers } from "./TeamMembers";
import { ServicesAllInOne } from "./Services/All";

const HomePage = () => {
  const ContactRef: any = useRef(null);

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
      <SEO title="Home page" />
      <Header />

      <Banner handleScroll={handleScroll} />

      <Services />

      <Team />

      <ServicesAllInOne />

      {/* <Reputation /> */}

      <Feedback />

      <OurValues />

      <ContactUI ContactRef={ContactRef} />


      {/* <TeamMembers /> */}
      {/* <OurStaff /> */}

      <FooterUI />
    </>
  );
};

export default HomePage;
