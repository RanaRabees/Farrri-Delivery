import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Frame4Default from "./frame4-default";

const FormSubscribe: NextPage = () => {
  return (
    <div className="absolute top-[6180.5px] left-[0px] w-[1512px] h-[289.5px] text-left text-lg text-theme-colors-danger font-heading-5-h5">
      <img
        className="absolute top-[15.5px] left-[0px] w-[1512px] h-[274px]"
        alt=""
        src="/rectangle-29.svg"
      />
      <Frame4Default
        contactUs="Subscribe"
        frame4DefaultCursor="pointer"
        frame4DefaultBorder="none"
        frame4DefaultPadding="0"
        frame4DefaultBackgroundColor="transparent"
        frame4DefaultPosition="absolute"
        frame4DefaultTop="210.5px"
        frame4DefaultLeft="1270.5px"
        frame4DefaultWidth="127.1px"
        frame4DefaultHeight="49px"
        frameDivBoxSizing="border-box"
        contactUsDisplay="inline-block"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[144.5px] left-[calc(50%_+_257.3px)]"
        color="primary"
        label="Enter your mail"
        sx={{ width: 337.7 }}
        variant="outlined"
      />
      <div className="absolute top-[37.5px] left-[942.9px] w-[408.5px] h-[93px] text-center font-oxanium">
        <b className="absolute top-[70px] left-[70.3px] inline-block w-[338.1px]">
          SUBSCRIBE TO NEWSLETTER
        </b>
        <img
          className="absolute top-[0.3px] left-[4.7px] rounded-6xs w-[104.6px] h-[53.6px]"
          alt=""
          src="/newsletter-line.svg"
        />
        <img
          className="absolute h-[33.01%] w-[7.03%] top-[32.26%] right-[68.81%] bottom-[34.73%] left-[24.16%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/newsletter-arrow.svg"
        />
      </div>
      <img
        className="absolute h-[97.48%] w-[15.63%] top-[0%] right-[39.09%] bottom-[2.52%] left-[45.28%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/illustration.svg"
      />
      <div className="absolute top-[157.5px] left-[116.5px] text-base leading-[145%] text-gray-300 inline-block w-[438.2px] h-[49px]">
        We ensure that your products safely to your home in a reasonable time..
      </div>
      <h1 className="m-0 absolute top-[100.5px] left-[95.6px] text-20xl leading-[110%] font-extrabold font-inherit text-theme-colors-white inline-block w-[566.8px] h-[45px]">
        <p className="m-0">Get an update every week</p>
      </h1>
      <div className="absolute top-[284.5px] left-[676.2px] rounded-[50%] bg-gray-900 w-[255.1px] h-[5px]" />
    </div>
  );
};

export default FormSubscribe;
