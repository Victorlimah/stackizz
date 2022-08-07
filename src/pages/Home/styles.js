import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
`;

export const Header = styled.header`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  border-radius: 0 0 80px 80px;
  background: #3248da;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const Username = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 100px 0;
`;

export const HeadingModule = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3248da;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
`;

export const ModuleContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3248da;
  margin-top: 25px;
  padding: 35px 15px;
  border-radius: 20px;
  text-align: center;
`;
