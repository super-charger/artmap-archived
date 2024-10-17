import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface MediumButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string; // 기본값 없이, 항상 명시적으로 지정
  fontWeight?: string; // 기본값 없이, 항상 명시적으로 지정
  borderColor?: string; // 보더 컬러
  iconSrc?: string; // 아이콘 경로
}

export const MediumButton: React.FC<MediumButtonProps> = ({
  text,
  backgroundColor = "",
  textColor = "",
  fontSize,
  fontWeight,
  borderColor = "",
  iconSrc,
}) => {
  const buttonClass = twMerge(
    `w-[165px] h-[40px] rounded-[5px] transition duration-200 ease-in-out flex items-center justify-center gap-[5px]`,
    `${backgroundColor} ${textColor} ${fontSize} ${fontWeight} ${borderColor}`,
    backgroundColor === "grayscale_black"
      ? "hover:brightness-50"
      : "hover:brightness-110"
  );

  return (
    <button className={buttonClass}>
      {text && <span>{text}</span>}
      {iconSrc && <Image src={iconSrc} alt="" width={10} height={10} />}
    </button>
  );
};

export default MediumButton;
