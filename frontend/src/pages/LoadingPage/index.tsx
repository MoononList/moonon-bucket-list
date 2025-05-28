import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import MoononLogo from "@/assets/moononlogo.svg?react";

const LoadingPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = "당신의 버킷리스트, 문온";
  const duration = 1500;
  const interval = duration / fullText.length;

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, duration);

    const moveTimer = setTimeout(() => {
      navigate("/main");
    }, duration + 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(moveTimer);
    };
  }, [navigate, duration]);

  return (
    <S.Wrapper fadeOut={fadeOut}>
      <MoononLogo width={100} />
      <S.Text>
        {fullText.split("").map((char, i) => (
          <S.FadeChar key={i} delay={i * interval}>
            {char}
          </S.FadeChar>
        ))}
      </S.Text>
    </S.Wrapper>
  );
};

export default LoadingPage;
