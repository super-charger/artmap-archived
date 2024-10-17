import React from "react";
import { twMerge } from "tailwind-merge";

interface LargeButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string; // 기본값 없이, 항상 명시적으로 지정
  fontWeight?: string; // 기본값 없이, 항상 명시적으로 지정
  borderColor?: string; // 보더 컬러
}

export const LargeButton: React.FC<LargeButtonProps> = ({
  text,
  backgroundColor = "",
  textColor = "",
  fontSize,
  fontWeight,
  borderColor = "",
}) => {
  const buttonClass = twMerge(
    `w-[343px] h-[40px] rounded-[5px] transition duration-200 ease-in-out`,
    `${backgroundColor} ${textColor} ${fontSize} ${fontWeight} ${borderColor}`,
    backgroundColor === "grayscale_black"
      ? "hover:brightness-50"
      : "hover:brightness-110"
  );

  return <button className={buttonClass}>{text}</button>;
};

export default LargeButton;
