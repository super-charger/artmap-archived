import SNSLoginButton from "../components/SNSLoginButton";
import SNSLinkButton from "../components/SNSLinkButton";
import ExtraLargeButton from "../components/ExtraLargeButton";
import LargeButton from "../components/LargeButton";
import MediumButton from "@/components/MediumButton";

export default function Home() {
  return (
    <>
      <div>
        <h2>SNSLoginButton 테스트</h2>
        <SNSLoginButton service="kakao" link="/auth/kakao" />
        <SNSLoginButton service="facebook" link="/auth/facebook" />
        <SNSLoginButton service="google" link="/auth/google" />
        <SNSLoginButton service="naver" link="/auth/naver" />
        <SNSLoginButton service="apple" link="/auth/apple" />

        <h2>SNSLinkButton 테스트</h2>
        <SNSLinkButton service="kakao" link="/auth/kakao" />
        <SNSLinkButton service="facebook" link="/auth/facebook" />
        <SNSLinkButton service="instagram" link="/auth/instagram" />
        <SNSLinkButton service="naver" link="/auth/naver" />
        <SNSLinkButton service="homepage" link="/auth/homepage" />

        <h2>ExtraLargeButton 테스트</h2>
        <ExtraLargeButton text="의뢰하기" backgroundColor="bg-point" />
        <ExtraLargeButton
          text="의뢰하기"
          backgroundColor="bg-grayscale_gray3"
        />
        <ExtraLargeButton
          text="의뢰하기"
          backgroundColor="bg-grayscale_black"
        />

        <h2>LargeButton 테스트</h2>
        <LargeButton
          text="전시관 홈페이지"
          backgroundColor="bg-transparent"
          textColor="text-grayscale_black"
          borderColor="border border-grayscale_black"
        />
        <LargeButton
          text="크리틱 의뢰"
          backgroundColor="bg-transparent"
          textColor="text-point"
          borderColor="border border-point"
        />
        <LargeButton
          text="적용하기"
          backgroundColor="bg-grayscale_black"
          textColor="text-grayscale_white"
          borderColor="border border-grayscale_black"
        />

        <h2>MediumButton 테스트</h2>
        <MediumButton
          text="전시 홈페이지"
          borderColor="border border-grayscale_black"
          backgroundColor="bg-transparent"
          textColor="text-grayscale_black"
        />
        <MediumButton
          text="작품 추가"
          borderColor="border border-grayscale_black"
          backgroundColor="bg-transparent"
          textColor="text-grayscale_black"
          iconSrc="/icons/buttons/plus-black.svg"
        />
        <MediumButton
          text="다녀왔어요"
          borderColor="border border-point"
          backgroundColor="bg-transparent"
          textColor="text-point"
          iconSrc="/icons/buttons/plus-point.svg"
        />
        <MediumButton
          text="다녀왔어요"
          borderColor="border border-point"
          backgroundColor="bg-point"
          textColor="text-grayscale_white"
          iconSrc="/icons/buttons/check-white.svg"
        />
      </div>
    </>
  );
}
