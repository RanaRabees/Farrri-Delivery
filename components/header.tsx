import type { NextPage } from "next";
import { useCallback } from "react";

const Header: NextPage = () => {
  const onSearchContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headingText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='chachaImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headingText1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headingText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onClientsReviewsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='tESTIMONIALHeadingText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="m-0 absolute top-[calc(50%_-_3391px)] left-[3px] w-[1512px] h-[78px] text-left text-3xl text-theme-colors-danger font-oxanium">
      <div className="absolute top-[calc(50%_-_39px)] left-[0px] w-[1512px] h-[78px]">
        <div className="absolute top-[calc(50%_-_39px)] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.7),_rgba(255,_255,_255,_0.15))] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.05)] w-[1512px] h-[78px]" />
        <div className="absolute top-[15px] left-[1245.3px] flex flex-row items-start justify-start gap-[9px]">
          <div
            className="relative w-[49px] h-[49px] cursor-pointer"
            onClick={onSearchContainerClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-md bg-soft-colors-warning-soft w-[49px] h-[49px]" />
            <img
              className="absolute h-[44.9%] w-[44.9%] top-[26.53%] right-[26.53%] bottom-[28.57%] left-[28.57%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon4.svg"
            />
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-soft-colors-danger-soft rounded-8xs flex flex-row items-start justify-start">
            <b className="relative text-xl font-oxanium text-theme-colors-danger text-left">
              Contact us
            </b>
          </button>
        </div>
        <nav className="m-0 absolute top-[35px] left-[572.3px] flex flex-row items-start justify-start gap-[25px] text-left text-base text-theme-colors-dark-text font-heading-5-h5">
          <div
            className="relative font-extrabold text-theme-colors-danger inline-block w-[55px] h-3.5 shrink-0 cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </div>
          <b
            className="relative inline-block w-[76px] h-3.5 shrink-0 cursor-pointer"
            onClick={onAboutUsText1Click}
          >
            About Us
          </b>
          <b
            className="relative inline-block w-[95px] h-[13.8px] shrink-0 cursor-pointer"
            onClick={onServicesText1Click}
          >
            Services
          </b>
          <b
            className="relative inline-block w-32 h-5 shrink-0 cursor-pointer"
            onClick={onClientsReviewsTextClick}
          >
            Clients Reviews
          </b>
        </nav>
        <img
          className="absolute top-[22px] left-[100px] rounded-t-81xl rounded-b-51xl w-[43px] h-[37px] object-cover"
          alt=""
          src="/logo-image@2x.png"
        />
        <div className="absolute top-[calc(50%_-_11px)] left-[150.1px] w-[162.8px] h-[26px]">
          <h3 className="m-0 absolute top-[calc(50%_-_13px)] left-[0px] text-inherit font-semibold font-inherit inline-block w-[162.8px] h-[26px]">
            Farrri Delivery
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Header;
