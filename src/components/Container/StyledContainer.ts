import styled from "styled-components";

export const Wrapper = styled.main<{ className?: string }>`
  min-height: calc(100vh - 80px);
  background-image: url("/background.png");
  background-size: cover;
  z-index: 0;
  &::after {
    position: absolute;
    content: "";
    z-index: 0;
    display: block;
    inset: 0px;
    z-index: -1;
    background-image: linear-gradient(
      116.82deg,
      #059669 0%,
      rgba(0, 0, 0, 0.69) 50%
    );
    backdrop-filter: blur(16px);
  }
`;
