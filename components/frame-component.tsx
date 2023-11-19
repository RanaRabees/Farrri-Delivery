import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FrameComponentType = {
  contactUs?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  frameDivPosition?: CSSProperties["position"];
  frameDivWidth?: CSSProperties["width"];
  frameDivTop?: CSSProperties["top"];
  frameDivRight?: CSSProperties["right"];
  frameDivLeft?: CSSProperties["left"];
  frameDivHeight?: CSSProperties["height"];
  frameDivBoxSizing?: CSSProperties["boxSizing"];
  contactUsFontFamily?: CSSProperties["fontFamily"];
  contactUsDisplay?: CSSProperties["display"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  contactUs,
  frameDivPadding,
  frameDivPosition,
  frameDivWidth,
  frameDivTop,
  frameDivRight,
  frameDivLeft,
  frameDivHeight,
  frameDivBoxSizing,
  contactUsFontFamily,
  contactUsDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
      position: frameDivPosition,
      width: frameDivWidth,
      top: frameDivTop,
      right: frameDivRight,
      left: frameDivLeft,
      height: frameDivHeight,
      boxSizing: frameDivBoxSizing,
    };
  }, [
    frameDivPadding,
    frameDivPosition,
    frameDivWidth,
    frameDivTop,
    frameDivRight,
    frameDivLeft,
    frameDivHeight,
    frameDivBoxSizing,
  ]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: contactUsFontFamily,
      display: contactUsDisplay,
    };
  }, [contactUsFontFamily, contactUsDisplay]);

  return (
    <div
      className="rounded-8xs bg-theme-colors-danger flex flex-row items-center justify-center py-2 px-4 text-center text-xl text-theme-colors-white font-heading-5-h5"
      style={frameDivStyle}
    >
      <b className="relative" style={contactUsStyle}>
        {contactUs}
      </b>
    </div>
  );
};

export default FrameComponent;
