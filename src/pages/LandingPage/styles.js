import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1058px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 200px;
  margin-left: -20px;

  @media (max-width: 1058px) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  display: none;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-align: center;

  @media (max-width: 1058px) {
    display: flex;
  }
`;

export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 18rem;

  @media (max-width: 1058px) {
    display: none;
  }
`;

export const Subtitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2.8rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Start = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const Text = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  background: #fbcd38;
  border: none;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }
`;
