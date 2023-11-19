import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent from "./frame-component";

const FormSection: NextPage = () => {
  return (
    <section className="absolute w-[88.19%] top-[calc(50%_+_1311px)] right-[5.66%] left-[6.15%] h-[786px] text-center text-6xl text-gray-500 font-heading-5-h5">
      <FrameComponent
        contactUs="Send Message  "
        frameDivPadding="12px 20px"
        frameDivPosition="absolute"
        frameDivWidth="47.45%"
        frameDivTop="calc(50% + 246.3px)"
        frameDivRight="3.17%"
        frameDivLeft="49.38%"
        frameDivHeight="78.8px"
        frameDivBoxSizing="border-box"
        contactUsFontFamily="Oxanium"
        contactUsDisplay="inline-block"
      />
      <img
        className="absolute top-[639.3px] left-[1076.8px] w-[125.2px] h-[79.2px]"
        alt=""
        src="/scooter.svg"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[357px] left-[calc(50%_-_34.7px)]"
        color="primary"
        label="Message "
        size="large"
        sx={{ width: 701.4 }}
        variant="outlined"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[243px] left-[calc(50%_-_34.7px)]"
        color="primary"
        label="Email"
        sx={{ width: 701.4 }}
        variant="outlined"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[131.3px] left-[calc(50%_-_35.1px)]"
        color="primary"
        label="Name"
        sx={{ width: 701.4 }}
        variant="outlined"
      />
      <div className="absolute top-[20.3px] left-[0px] w-[630.4px] h-[765.7px] overflow-hidden text-left">
        <h3 className="m-0 absolute top-[634.7px] left-[23px] text-inherit leading-[120%] font-semibold font-inherit inline-block w-[359px]">
          Monday to Friday, 9am-5pm.
        </h3>
        <h1 className="m-0 absolute top-[539.7px] left-[27px] text-20xl leading-[110%] font-extrabold font-inherit text-gray1-100 inline-block w-[422px]">
          We will contact in the shortest time.
        </h1>
        <h3 className="m-0 absolute top-[489.7px] left-[23px] text-5xl font-bold font-oxanium text-theme-colors-danger inline-block w-[263px]">
          REQUEST A CALLBACK
        </h3>
        <img
          className="absolute top-[46px] left-[54px] w-[490.4px] h-[447.4px]"
          alt=""
          src="/illustration1.svg"
        />
      </div>
      <h1 className="m-0 absolute top-[41.8px] right-[520.9px] text-20xl leading-[110%] font-extrabold font-inherit text-gray1-100 inline-block w-[441.8px] h-[53.5px]">
        Contact us easily...
      </h1>
      <b className="absolute top-[0px] left-[765.1px] text-[31.25px] inline-block font-oxanium text-theme-colors-danger w-[150.9px] h-[41.8px]">
        Meet Us
      </b>
    </section>
  );
};

export default FormSection;
