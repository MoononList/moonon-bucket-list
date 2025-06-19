import styled from "@emotion/styled";
import KakaoLogoImg from "@/assets/kakaologo.svg?react";

export const KakaoButton = styled.button`
  all: unset;
  position: fixed;
  width: 100%;
  max-width: 350px;
  height: 60px;
  font-size: 18px;
  font-weight: 400;
  background-color: #fee500;
  border-radius: 10px;
  cursor: pointer;
  bottom: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const KakaoText = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const KakaoLogo = styled(KakaoLogoImg)`
  position: absolute;
  left: 21px;
  width: 18px;
  height: 18px;
`;
