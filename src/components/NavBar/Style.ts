import styled from "styled-components";

export const Nav = styled.header`
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(
      270deg,
      #01fe7f 0%,
      #10b981 10%,
      #059669 20%,
      #047857 30%,
      #065f46 40%,
      #064e3b 50%,
      #065f46 60%,
      #059669 70%,
      #059669 80%,
      #10b981 90%,
      #01fe7f 100%
    );
  }
`;
