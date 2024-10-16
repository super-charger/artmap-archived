import SNSLoginButton from "../components/SNSLoginButton";
import SNSLinkButton from "../components/SNSLinkButton";
import ExtraLargeButton from "../components/ExtraLargeButton";

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
      </div>
    </>
  );
}
