"use client";
import CBreadcrumbs from "@/components/CElements/Breadcrumbs";
import SEO from "@/components/CElements/SEO";
import { CityWrapper } from "@/components/UI/City";
import Header from "@/components/UI/Header";
import { useMemo } from "react";

interface CityProps {
  params: {
    name: string;
  };
}

const City = ({ params }: CityProps) => {
  const breadcrumbs = useMemo(() => {
    return [{ label: "Home page", link: "/" }, { label: params.name }];
  }, [params]);
  return (
    <>
      <SEO title={params.name} />
      <Header title={params.name} search={false}></Header>
      <div className="container">
        <CBreadcrumbs items={breadcrumbs} withDefautlIcon={true} />
      </div>
      <CityWrapper id={params.name} />
    </>
  );
};

export default City;
