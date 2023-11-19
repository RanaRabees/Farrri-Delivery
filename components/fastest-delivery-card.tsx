import type { NextPage } from "next";

const FastestDeliveryCard: NextPage = () => {
  return (
    <div className="absolute top-[1906px] left-[calc(50%_-_700px)] w-[1400px] h-[598px] text-center text-[31.25px] text-theme-colors-danger font-oxanium">
      <img
        className="absolute top-[0px] left-[calc(50%_-_700px)] rounded-2xl w-[1400px] h-[598px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
      />
      <div className="absolute top-[140.2px] left-[0px] w-[1037.8px] h-[428.8px]">
        <div className="absolute top-[0px] left-[364.8px] flex flex-col items-center justify-center gap-[19px]">
          <img
            className="relative w-[115px] h-[116px]"
            alt=""
            src="/icon3.svg"
          />
          <div className="flex flex-col items-center justify-start gap-[28px]">
            <b className="relative inline-block w-[351px] h-[25px] shrink-0">
              FASTEST DELIVERY
            </b>
            <h3 className="m-0 relative text-6xl leading-[120%] font-normal font-heading-5-h5 text-theme-colors-white inline-block w-[673px] h-[98px] shrink-0">
              <p className="m-0">
                {" "}
                You can get your valuable item in the fastest period of
              </p>
              <p className="m-0"> time with safety. Because your emergency</p>
              <p className="m-0"> is our first priority.</p>
            </h3>
          </div>
        </div>
        <img
          className="absolute top-[125.3px] left-[13.1px] w-[386.5px] h-[284.3px]"
          alt=""
          src="/vector2.svg"
        />
      </div>
    </div>
  );
};

export default FastestDeliveryCard;
