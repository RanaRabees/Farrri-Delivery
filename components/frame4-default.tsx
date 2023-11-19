import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import FrameComponent from "./frame-component";

type Frame4DefaultType = {
  contactUs?: string;

  /** Style props */
  frame4DefaultCursor?: CSSProperties["cursor"];
  frame4DefaultBorder?: CSSProperties["border"];
  frame4DefaultPadding?: CSSProperties["padding"];
  frame4DefaultBackgroundColor?: CSSProperties["backgroundColor"];
  frame4DefaultPosition?: CSSProperties["position"];
  frame4DefaultTop?: CSSProperties["top"];
  frame4DefaultLeft?: CSSProperties["left"];
  frame4DefaultWidth?: CSSProperties["width"];
  frame4DefaultHeight?: CSSProperties["height"];
  frameDivBoxSizing?: CSSProperties["boxSizing"];
  contactUsDisplay?: CSSProperties["display"];
};

const Frame4Default: NextPage<Frame4DefaultType> = ({
  contactUs,
  frame4DefaultCursor,
  frame4DefaultBorder,
  frame4DefaultPadding,
  frame4DefaultBackgroundColor,
  frame4DefaultPosition,
  frame4DefaultTop,
  frame4DefaultLeft,
  frame4DefaultWidth,
  frame4DefaultHeight,
  frameDivBoxSizing,
  contactUsDisplay,
}) => {
  const frame4DefaultStyle: CSSProperties = useMemo(() => {
    return {
      cursor: frame4DefaultCursor,
      border: frame4DefaultBorder,
      padding: frame4DefaultPadding,
      backgroundColor: frame4DefaultBackgroundColor,
      position: frame4DefaultPosition,
      top: frame4DefaultTop,
      left: frame4DefaultLeft,
      width: frame4DefaultWidth,
      height: frame4DefaultHeight,
    };
  }, [
    frame4DefaultCursor,
    frame4DefaultBorder,
    frame4DefaultPadding,
    frame4DefaultBackgroundColor,
    frame4DefaultPosition,
    frame4DefaultTop,
    frame4DefaultLeft,
    frame4DefaultWidth,
    frame4DefaultHeight,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      display: contactUsDisplay,
    };
  }, [contactUsDisplay]);

  return (
    <div
      className="flex flex-row items-start justify-start"
      style={frame4DefaultStyle}
    >
      <FrameComponent
        contactUs="Get Started"
        frameDivPadding="12px 20px"
        frameDivPosition="unset"
        frameDivWidth="unset"
        frameDivTop="unset"
        frameDivRight="unset"
        frameDivLeft="unset"
        frameDivHeight="unset"
        frameDivBoxSizing="border-box"
        contactUsFontFamily="Oxanium"
        contactUsDisplay="inline-block"
      />
    </div>
  );
};

export default Frame4Default;
