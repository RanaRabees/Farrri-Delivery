import type { NextPage } from "next";
import Footer from "../components/footer";
import FormSubscribe from "../components/form-subscribe";
import FormContainer from "../components/form-container";
import FormSection from "../components/form-section";
import TestimonialContainer from "../components/testimonial-container";
import FormCounter from "../components/form-counter";
import ServiceSectionContainer from "../components/service-section-container";
import FastestDeliveryCard from "../components/fastest-delivery-card";
import DeliveryCard from "../components/delivery-card";
import DeliveryHeroSection from "../components/delivery-hero-section";
import Header from "../components/header";

const Website: NextPage = () => {
  return (
    <div className="relative bg-theme-colors-white w-full h-[6782px] overflow-hidden">
      <img
        className="absolute top-[3px] left-[0px] w-[1512px] h-[6459px]"
        alt=""
        src="/background.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1512px] h-[6471px]"
        alt=""
        src="/background1.svg"
      />
      <div className="absolute top-[1029px] left-[763.8px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_172,_113,_0.4),_rgba(255,_172,_113,_0))] w-[212.3px] h-[117.5px] [transform:_rotate(93.47deg)] [transform-origin:0_0]" />
      <footer className="absolute top-[6705px] left-[0px] bg-gray1-100 w-[1512px] h-[76px] flex flex-row items-center justify-center gap-[865px] text-left text-smi text-gray-200 font-heading-5-h5">
        <div className="relative font-medium">
          All rights Reserved © Fdcetp, 2023
        </div>
        <div className="relative font-medium text-gainsboro text-right">
          Made with heart by RanaRabees
        </div>
      </footer>
      <Footer />
      <FormSubscribe />
      <FormContainer />
      <FormSection />
      <TestimonialContainer />
      <FormCounter />
      <ServiceSectionContainer />
      <FastestDeliveryCard />
      <DeliveryCard />
      <DeliveryHeroSection />
      <Header />
    </div>
  );
};

export default Website;
