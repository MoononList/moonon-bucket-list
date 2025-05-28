import styled from "@emotion/styled";

export const Wrapper = styled.div<{ fadeOut: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 350px;
  transition: opacity 1s ease;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
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
