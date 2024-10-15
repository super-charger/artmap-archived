import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SNSLinkButtonProps {
  service: "kakao" | "facebook" | "instagram" | "naver" | "homepage";
  link?: string;
}

const SNSLinkButton: React.FC<SNSLinkButtonProps> = ({
  service,
  link = "#",
}) => {
  // 경로 설정: 모든 링크 버튼은 link-button 폴더에 있음
  const imagePath = `/icons/sns/link-button/${service}-link-button.svg`;

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Image src={imagePath} width="40" height="40" alt={`${service} link`} />
    </Link>
  );
};

export default SNSLinkButton;
