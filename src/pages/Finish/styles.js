import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #3248da;
`;

export const BoxResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-bottom: 40px;
`;

export const HeadingResults = styled.h1`
  width: 85%;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  background-color: #fbbf1f;
  padding: 1rem;
  border-radius: 0.6rem;
  margin-top: -25px;
  margin-bottom: 1rem;
`;

export const BoxScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: #f5f5f5;
`;

export const TitleScore = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
`;

export const Score = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #3248da;
  margin: 1rem 0;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

export const BoxQuestions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  background-color: #f5f5f5;

  .total {
    background-color: #fbbf1f;
  }

  .correct {
    background-color: #15dd6e;
  }

  .wrong {
    background-color: #ea3b1c;
  }
`;

export const FooterResults = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: #f5f5f5;
`;

export const ButtonResults = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-top: 1rem;
  border: none;
  background-color: #3248da;
  padding: 15px 25px;
  border-radius: 15px;
  cursor: pointer;
`;
