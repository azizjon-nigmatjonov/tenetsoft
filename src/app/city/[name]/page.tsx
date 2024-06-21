"use client";
import SEO from "@/components/CElements/SEO";
import { CityWrapper } from "@/components/UI/City";
import { useEffect } from "react";

interface CityProps {
  params: {
    name: string;
  };
}

const City = ({ params }: CityProps) => {
  return (
    <>
      <SEO title={params.name} />
      <CityWrapper id={params.name} />
    </>
  );
};

export default City;
