import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendardvariable-dynamic-subset.min.css");

  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    overscroll-behavior: contain;
    font-family:
      "Pretendard Variable",
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
  }

  /* List 초기화 */
  ul,
  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Link 초기화 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 버튼 초기화 */
  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* input, textarea 초기화 */
  input,
  textarea {
    font-family: inherit;
    outline: none;
    border: none;
    background: none;
  }

  /* 이미지 기본 스타일 */
  img {
    display: block;
    max-width: 100%;
  }
`;
