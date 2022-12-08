import React, { useEffect } from "react";
import BookWithStaff from "../components/BookWithStaff";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import SectionWrapper from "../assets/Wrappers/SectionWrapper";
import Services from "../components/Services";
import TopSection from "../components/TopSection";
import Venues from "../components/Venues";
import TreatYourself from "../components/TreatYourself";
import Footer from "../components/Footer";
import FixedFooter from "../components/FixedFooter";

export default function Landing() {
  
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="max-w-pMaxW w-full flex flex-col">
        <main className="flex flex-col items-center w-full ">
          <section className="w-full">
            <TopSection />
          </section>
          <section className="w-full">
            <Services />
          </section>
          <section className="w-full ">
            <BookWithStaff />
          </section>
          <SectionWrapper>
            <Reviews />
          </SectionWrapper>
          <div className="bg-secondaryBg w-full">
            <SectionWrapper>
              <Venues />
            </SectionWrapper>
            <SectionWrapper>
              <TreatYourself />
            </SectionWrapper>
          </div>
        </main>
        <SectionWrapper>
          <Footer />
        </SectionWrapper>
      </div>
      <FixedFooter landingpage={true}/>
    </div>
  );
}
