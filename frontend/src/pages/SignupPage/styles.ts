import styled from "@emotion/styled";
import MoononLoginSvg from "@/assets/moononlogin.svg?react";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
export const MoononLogin = styled(MoononLoginSvg)`
  width: 235px;
  display: block;
  margin: 0 auto 147px auto;
  padding-right: 30px;
`;

export const Text = styled.h2`
  margin: 14px 0 123px 12px;
  font-size: 18px;
  font-weight: 400;
  color: #5d5d5d;
`;
export const Title = styled.h1`
  margin: 155px 0 0 12px;
  font-size: 24px;
  font-weight: 500;
  color: #333333;
`;
export const Next = styled.button`
  all: unset;
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px;
  border-bottom: 1px solid #b0b0b0;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #b0b0b0;
  cursor: pointer;
`;
