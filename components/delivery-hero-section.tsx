import type { NextPage } from "next";

const DeliveryHeroSection: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1512px] h-[1024px] text-left text-16xl text-saddlebrown font-heading-5-h5">
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[1024px]">
        <div className="absolute top-[0px] left-[0px] w-[1512px] h-[1024px] font-oxanium">
          <img
            className="absolute top-[4.7px] left-[57.2px] w-[1301.8px] h-[1000.2px] opacity-[0.6]"
            alt=""
            src="/vector-3.svg"
          />
          <img
            className="absolute top-[262px] left-[518px] w-[922px] h-[576px] object-cover"
            alt=""
            src="/chacha@2x.png"
            data-scroll-to="chachaImage"
          />
          <img
            className="absolute top-[629.1px] left-[689.8px] w-[706.8px] h-[353px]"
            alt=""
            src="/vector-2.svg"
          />
          <div className="absolute top-[826px] left-[657px] rounded-[50%] bg-oldlace w-[659px] h-3" />
          <img
            className="absolute top-[387.3px] left-[1085.9px] rounded-4xs w-[160.3px] h-[154.5px] object-cover"
            alt=""
            src="/dabbe-ki-image@2x.png"
          />
          <h1 className="m-0 absolute top-[408px] left-[1119.9px] text-inherit leading-[121.5%] font-semibold font-inherit inline-block w-[157.1px] h-[84.8px] [transform:_rotate(11.85deg)] [transform-origin:0_0]">
            Farrri Delivery
          </h1>
        </div>
        <div className="absolute top-[364px] left-[calc(50%_-_633.9px)] text-gray1-200 inline-block w-[541.8px] h-[113.5px] text-30xl">
          <span>
            <span className="leading-[120%]">A trusted provider of</span>
            <span className="text-[48.83px]">{` `}</span>
          </span>
          <span className="leading-[120%] font-extrabold">
            courier services.
          </span>
        </div>
        <div className="absolute top-[493px] left-[226px] text-xl leading-[120%] text-dimgray inline-block w-[373.8px] h-[54.3px]">
          <p className="m-0">
            Get Your Products Delivered Safely and Quickly with Farrri Delivery
          </p>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[587px] left-[228px] w-[187px] h-[49px]">
          <div className="absolute top-[0.1px] left-[0.1px] rounded-8xs bg-theme-colors-danger w-[186.9px] h-[47.5px]" />
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray1-300 w-[187px] flex flex-row items-start justify-start py-3 px-5 box-border">
            <b className="relative text-xl flex font-oxanium text-theme-colors-white text-center items-center justify-center w-[150px] h-[25px] shrink-0">
              Get started
            </b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DeliveryHeroSection;
