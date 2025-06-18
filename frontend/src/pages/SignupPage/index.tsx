import * as S from "./styles";
import MoononLogin from "@/assets/moononlogin.svg?react";
import KakaoButton from "components/kakaoButton";

const SignupPage = () => {
  return (
    <>
      <S.Wrapper>
        <MoononLogin width={235} />
        <S.text>로그인하고 문온리스트를 만들어보세요</S.text>
        <KakaoButton />
      </S.Wrapper>
    </>
  );
};

export default SignupPage;
