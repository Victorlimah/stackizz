import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  max-width: 100vw;
  background-color: #3248da;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;

  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 30px;
  }

  .true {
    color: #fff;
  }
`;



