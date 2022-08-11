import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #f5f5f5;
`;

export const Username = styled.h2`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  color: #000;
  margin: 25px 0 20px 0;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

export const HeadingQuestions = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 30px;
`;

export const Question = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
  background-color: red;
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  margin-bottom: 50px;
`;

export const Answer = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #3248da;
  margin-top: 10px;
  border: none;
  width: 80%;
  height: 50px;
  border-radius: 5px;
  background-color: #efefef;
  border: 1px solid #3248da;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
  &.selected {
    color: #fff;
    background-color: #3248da;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
  border: none;
  background-color: #3248da;
  width: 80%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  
`;
