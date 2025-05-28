import * as S from "./styles";
import MoononMain from "@/assets/moononmain.svg?react";
import TopBar from "components/topbar";

const LoadingPage = () => {
  return (
    <>
      <S.Wrapper>
        <TopBar title="MOONON" />
        <S.BodyWrapper>
          <MoononMain width={150} />
          <S.text>문온리스트를 추가해주세요 :-)</S.text>
        </S.BodyWrapper>
      </S.Wrapper>
    </>
  );
};

export default LoadingPage;
