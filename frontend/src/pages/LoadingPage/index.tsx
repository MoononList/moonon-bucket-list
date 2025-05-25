import * as S from "./styles";
import MoononLogo from "@/assets/moononlogo.svg?react";

const LoadingPage = () => {
  return (
    <>
      <S.Wrapper>
        <MoononLogo width={110} height={110} />
        <S.text>당신의 버킷리스트, 문온</S.text>
      </S.Wrapper>
    </>
  );
};

export default LoadingPage;
