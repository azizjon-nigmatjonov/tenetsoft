"use client";
import { CDriver } from "@/components/CElements/CDivider";
import Header from "../Header";
import HomeBanner from "./Banner";
import { HomeCategories } from "./Categories";
import { HomeDiscounts } from "./Discounts";
import { Products } from "./Products";
import { FooterUI } from "../Footer";
import { TabBar } from "../TabBar";

const HomePage = () => {
  // const ContactRef: any = useRef(null);

  // const handleScroll = (position: string) => {
  //   if (position === "contact") {
  //     const element = ContactRef.current.getBoundingClientRect();

  //     window.scrollTo({
  //       top: element.top - 100,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="home_page">
      <Header />

      <HomeBanner />

      <HomeCategories />

      <CDriver direction="horizantal" classes="my-3 py-1" />

      <HomeDiscounts />

      <CDriver direction="horizantal" classes="my-3 py-1" />

      <Products />

      <TabBar />
      {/* <FooterUI /> */}
    </div>
  );
};

export default HomePage;
