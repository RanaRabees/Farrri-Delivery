import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="absolute top-[6470px] left-[0px] w-[1512px] h-[235px] text-left text-xl text-theme-colors-white font-oxanium">
      <div className="absolute top-[0px] left-[0px] bg-gray-900 w-[1512px] h-[235px]" />
      <div className="absolute top-[52px] left-[1223.3px] w-[151.9px] h-32">
        <b className="absolute top-[0px] left-[0px] inline-block w-[151.9px]">
          Customer Care
        </b>
        <div className="absolute top-[50px] left-[0px] w-[94.8px] h-[78px] text-base text-gray-500 font-heading-5-h5">
          <div className="absolute top-[0px] left-[0px] leading-[22px] font-semibold inline-block w-[75.4px]">
            About Us
          </div>
          <div className="absolute top-[28px] left-[0px] leading-[22px] font-semibold inline-block w-[92.6px]">
            Contact US
          </div>
          <div className="absolute top-[56px] left-[0px] leading-[22px] font-semibold inline-block w-[94.8px]">
            Get Update
          </div>
        </div>
      </div>
      <div className="absolute top-[55px] left-[954.5px] w-[153px] h-[131px]">
        <b className="absolute top-[0px] left-[0px] inline-block w-[96.8px] h-[25.4px]">
          Services
        </b>
        <div className="absolute top-[49.8px] left-[0px] w-[153px] h-[81.2px] text-base text-gray-500 font-heading-5-h5">
          <div className="absolute top-[0px] left-[0px] leading-[22px] font-semibold inline-block w-[153px] h-[22.3px]">
            Corporate goods
          </div>
          <div className="absolute top-[29.5px] left-[0px] leading-[22px] font-semibold inline-block w-[81.3px] h-[22.3px]">
            Artworks
          </div>
          <div className="absolute top-[58.9px] left-[0px] leading-[22px] font-semibold inline-block w-[105.2px] h-[22.3px]">
            Documents
          </div>
        </div>
      </div>
      <div className="absolute top-[62px] left-[684.6px] w-[142.3px] h-[129px]">
        <b className="absolute top-[0px] left-[1.1px] inline-block w-[113.2px]">
          Other links
        </b>
        <div className="absolute top-[47px] left-[0px] w-[142.3px] h-[82px] text-base text-gray-500 font-heading-5-h5">
          <div className="absolute top-[0px] left-[0px] leading-[22px] font-semibold inline-block w-[47.4px]">
            Blogs
          </div>
          <div className="absolute top-[29px] left-[0px] leading-[22px] font-semibold inline-block w-[70.1px]">
            Portfolio
          </div>
          <div className="absolute top-[60px] left-[0px] leading-[22px] font-semibold inline-block w-[142.3px]">
            Personal Website
          </div>
        </div>
      </div>
      <div className="absolute top-[90px] left-[195.3px] text-base leading-[22px] font-semibold font-heading-5-h5 text-gray-500 inline-block w-[306.6px]">
        No matter what your delivery needs are, Farrri Delivery can help.
        Contact us today to learn more about our services
      </div>
      <div className="absolute top-[calc(50%_-_76.5px)] left-[81px] w-[184.6px] h-[37px] text-theme-colors-danger">
        <div className="absolute top-[calc(50%_-_10.2px)] left-[39.1px] font-semibold inline-block w-[145.5px] h-[18.7px]">
          Farrri Delivery
        </div>
        <img
          className="absolute top-[0px] left-[0px] rounded-t-81xl rounded-b-51xl w-[43px] h-[37px] object-cover"
          alt=""
          src="/logo-image@2x.png"
        />
      </div>
    </div>
  );
};

export default Footer;
