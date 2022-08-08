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
  padding-bottom: 40px;
  border-radius: 0 0 80px 80px;
  background: #3248da;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const Username = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const BackToHome = styled.span`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #3248da;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin-top: 35px;

  svg {
    margin-right: 20px;
  }
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 100px 0;
`;

export const HeadingTopics = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3248da;
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
`;

export const TopicsContent = styled.div`
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

  &:hover {
    background-color: #00caf2;
    cursor: pointer;
    transform: scale(1.05);
  }
`;
