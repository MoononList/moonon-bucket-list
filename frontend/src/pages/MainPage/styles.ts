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
  min-height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;
export const text = styled.h1`
  position: relative;
  padding-bottom: 180px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #b0b0b0;
`;
