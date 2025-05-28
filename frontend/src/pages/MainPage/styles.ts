import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.6s ease;
  opacity: 0;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
export const BodyWrapper = styled.div`
  padding-bottom: 180px;
  width: 100%;
  height: calc(100vh - 106px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const text = styled.h1`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #b0b0b0;
`;
