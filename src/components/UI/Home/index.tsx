"use client";
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
    </>
  );
};

export default HomePage;
