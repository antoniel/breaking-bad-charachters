import styled from "styled-components";

export const Wrapper = styled.main<{ className?: string }>`
  min-height: calc(100vh - 80px);
  background-image: url("/background.png");
  background-size: cover;
  &::before {
    position: absolute;
    content: "";
    display: block;
    inset: 0px;
    background: linear-gradient(116.82deg, #059669 0%, rgba(0, 0, 0, 0.69) 50%);
    backdrop-filter: blur(16px);
  }
`;
