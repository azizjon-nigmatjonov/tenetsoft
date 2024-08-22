"use client";
import { ContactUI } from "../Contact";
import { FooterUI } from "../Footer";
import Header from "../Header";
import { Banner } from "./Banner";
import { Reputation } from "./Reputation";
import { Services } from "./Services";
import { Team } from "./Team";

const HomePage = () => {
  return (
    <>
      <Header />

      <Banner />

      <Reputation />

      <Team />

      <Services />

      <ContactUI />

      <FooterUI />
    </>
  );
};

export default HomePage;
