import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendardvariable-dynamic-subset.min.css");
  @font-face {
    font-family: "NEXON Lv1 Gothic";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      url("https://cdn.jsdelivr.net/gh/fonts-archive/NEXONLv1Gothic/NEXONLv1Gothic-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/fonts-archive/NEXONLv1Gothic/NEXONLv1Gothic-Regular.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/fonts-archive/NEXONLv1Gothic/NEXONLv1Gothic-Regular.otf")
        format("opentype"),
      url("https://cdn.jsdelivr.net/gh/fonts-archive/NEXONLv1Gothic/NEXONLv1Gothic-Regular.ttf")
        format("truetype");
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  body {
  }
`;
