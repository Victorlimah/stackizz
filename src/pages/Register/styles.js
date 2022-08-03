import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${(props) => props.background}) no-repeat center;
  background-size: cover;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  background: #fff;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem;

  @media (max-width: 870px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  height: 50%;

  @media (max-width: 870px) {
    margin-bottom: 200px;
  }

  @media (min-height: 870px) {
    justify-content: flex-start;
    margin-bottom: 300px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: ${(props) => (props.error ? "30px" : "45px 30px 30px 30px")};
  background: rgba(0, 0, 60, 0.5);
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  transition: all 0s ease-in-out;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #000;
`;

export const Button = styled.button`
  font-family: "Nunita Sans", sans-serif;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: #3248da;
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Error = styled.div`
  color: #f00;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 200px;
`;

export const Developer = styled.img`
  max-width: 450px;
`;

export const Register = styled.span`
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
`;
