import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3248da;
  margin-top: -35px;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Nav = styled.nav`
  width: 100vw;
  max-width: 100vw;
  margin-top: -45px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #3248da;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 20px 60px; 

  &:hover {
    background-color: #fff;
    color: #3248da;
  }
`;