import React from "react";

interface ExtraLargeButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string; // 기본값 없이, 항상 명시적으로 지정
  fontWeight?: string; // 기본값 없이, 항상 명시적으로 지정
}

export const ExtraLargeButton: React.FC<ExtraLargeButtonProps> = ({
  text,
  backgroundColor = "point",
  textColor = "button_text",
  fontSize,
  fontWeight,
}) => {
  return (
    <button
      className={`
        w-[343px] h-[50px] rounded-[5px] transition duration-200 ease-in-out
        ${backgroundColor} ${textColor} ${fontSize} ${fontWeight}
        ${
          backgroundColor === "grayscale_black"
            ? "hover:brightness-90"
            : "hover:brightness-110"
        }
      `}
    >
      {text}
    </button>
  );
};

export default ExtraLargeButton;
