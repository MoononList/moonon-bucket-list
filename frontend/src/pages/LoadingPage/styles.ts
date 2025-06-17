import styled from "@emotion/styled";

export const Wrapper = styled.div<{ fadeOut: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
`;
export const Text = styled.p`
  color: #333333;
  font-size: 16px;
  font-weight: 500;
  font-family: "Pretendard", sans-serif;
  display: flex;
  white-space: pre;
`;

export const FadeChar = styled.span<{ delay: number }>`
  opacity: 0;
  animation: fadeIn 0.4s ease forwards;
  animation-delay: ${({ delay }) => `${delay}ms`};

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
