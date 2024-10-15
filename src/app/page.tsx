import SNSLoginButton from "../components/SNSLoginButton";
import SNSLinkButton from "../components/SNSLinkButton";

export default function Home() {
  return (
    <>
      <div>
        <h2>SNS 로그인 버튼들</h2>
        <SNSLoginButton service="kakao" link="/auth/kakao" />
        <SNSLoginButton service="facebook" link="/auth/facebook" />
        <SNSLoginButton service="google" link="/auth/google" />
        <SNSLoginButton service="naver" link="/auth/naver" />
        <SNSLoginButton service="apple" link="/auth/apple" />
        <h2>SNS 링크 버튼들</h2>
        <SNSLinkButton service="kakao" link="/auth/kakao" />
        <SNSLinkButton service="facebook" link="/auth/facebook" />
        <SNSLinkButton service="instagram" link="/auth/instagram" />
        <SNSLinkButton service="naver" link="/auth/naver" />
        <SNSLinkButton service="homepage" link="/auth/homepage" />
      </div>
    </>
  );
}
