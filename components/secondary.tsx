import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SecondaryType = {
  getStarted?: string;

  /** Style props */
  secondaryBackgroundColor?: CSSProperties["backgroundColor"];
  secondaryAlignItems?: CSSProperties["alignItems"];
  secondaryJustifyContent?: CSSProperties["justifyContent"];
  secondaryCursor?: CSSProperties["cursor"];
  secondaryPosition?: CSSProperties["position"];
  secondaryTop?: CSSProperties["top"];
  secondaryLeft?: CSSProperties["left"];
  secondaryWidth?: CSSProperties["width"];
  secondaryBorder?: CSSProperties["border"];
  getStartedDisplay?: CSSProperties["display"];
  getStartedColor?: CSSProperties["color"];
};

const Secondary: NextPage<SecondaryType> = ({
  getStarted,
  secondaryBackgroundColor,
  secondaryAlignItems,
  secondaryJustifyContent,
  secondaryCursor,
  secondaryPosition,
  secondaryTop,
  secondaryLeft,
  secondaryWidth,
  secondaryBorder,
  getStartedDisplay,
  getStartedColor,
}) => {
  const secondaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: secondaryBackgroundColor,
      alignItems: secondaryAlignItems,
      justifyContent: secondaryJustifyContent,
      cursor: secondaryCursor,
      position: secondaryPosition,
      top: secondaryTop,
      left: secondaryLeft,
      width: secondaryWidth,
      border: secondaryBorder,
    };
  }, [
    secondaryBackgroundColor,
    secondaryAlignItems,
    secondaryJustifyContent,
    secondaryCursor,
    secondaryPosition,
    secondaryTop,
    secondaryLeft,
    secondaryWidth,
    secondaryBorder,
  ]);

  const getStartedStyle: CSSProperties = useMemo(() => {
    return {
      display: getStartedDisplay,
      color: getStartedColor,
    };
  }, [getStartedDisplay, getStartedColor]);

  return (
    <div
      className="rounded-8xs bg-gray1-300 flex flex-row items-start justify-start py-3 px-5 text-left text-xl text-theme-colors-danger font-oxanium border-[1px] border-solid border-theme-colors-danger"
      style={secondaryStyle}
    >
      <b className="relative" style={getStartedStyle}>
        {getStarted}
      </b>
    </div>
  );
};

export default Secondary;
