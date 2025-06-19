import * as S from "./styles";
import KakaoButton from "components/kakaoButton";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Title>반가워요!</S.Title>
          <S.Text>로그인하고 문온리스트를 만들어보세요</S.Text>
          <S.MoononLogin />
        </div>
        <KakaoButton />
        <S.Next onClick={() => navigate("/")}>나중에 가입할래요</S.Next>
      </S.Wrapper>
    </>
  );
};

export default SignupPage;
