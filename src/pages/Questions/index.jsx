/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styles";

import Swal from "sweetalert2";

import {
  getQuestionsWithAnswers,
  checkAnswer,
} from "../../services/questionsService";

import { useState, useEffect } from "react";
import Header from "../../components/Header";

import { useNavigate, useParams } from "react-router-dom";

export default function Questions() {
  const id = useParams().id;
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([{ id: 0, name: "", Answer: [] }]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsBar, setQuestionsBar] = useState([]);

  async function getAllQuestions() {
    const response = await getQuestionsWithAnswers(id);
    setQuestions(response);
    setNumberOfQuestions(response.length);
    setQuestionsBar(response.map((question) => "empty"));
  }

  useEffect(() => {
    getAllQuestions();
  }, [id]);

  return (
    <>
      <Header />
      <S.Container>
        <S.HeadingQuestions>
          Pergunta {currentQuestion + 1} de {numberOfQuestions}
        </S.HeadingQuestions>
        <S.Header>
          <S.Username> {questions[currentQuestion].name} </S.Username>
        </S.Header>
        <S.Content>
          <S.Questions>
            <S.Question>{questions[currentQuestion].question}</S.Question>
            <S.Answers>
              {questions[currentQuestion].Answer.map(({ id, text }) => {
                return (
                  <S.Answer
                    key={id}
                    onClick={() => selectAnswer(id)}
                    className={currentAnswer === id ? "selected" : ""}
                  >
                    {text}
                  </S.Answer>
                );
              })}
            </S.Answers>
            {currentQuestion === numberOfQuestions - 1 ? (
              <S.Button onClick={() => finalizeQuizz()}>Finalizar</S.Button>
            ) : (
              <S.Button onClick={() => nextQuestion()}>
                Próxima pergunta
              </S.Button>
            )}
            {currentQuestion !== numberOfQuestions - 1 && (
              <S.Button onClick={() => exitToTopics()}>Sair</S.Button>
            )}
          </S.Questions>
        </S.Content>
      </S.Container>
    </>
  );

  function selectAnswer(id) {
    setCurrentAnswer(id);
  }

  async function nextQuestion(last) {
    if (!currentAnswer) {
      Swal.fire({
        title: "Ops!",
        text: "Você precisa selecionar uma resposta para prosseguir",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    const response = await checkAnswer(currentAnswer);
    if (response.result) {
      Swal.fire({
        title: "Parabéns!",
        text: "Você acertou!",
        icon: "success",
        timer: 1500,
      });
      setScore(score + 1);
      setQuestionsBar(
        questionsBar.map((question, index) => {
          if (index === currentQuestion) return "correct";

          return question;
        })
      );
    } else {
      Swal.fire({
        title: "Ops!",
        text: "Você errou!",
        icon: "error",
        timer: 2000,
      });
      setQuestionsBar(
        questionsBar.map((question, index) => {
          if (index === currentQuestion) return "wrong";

          return question;
        })
      );
    }
    if (!last) stepQuestion();
  }

  async function finalizeQuizz() {
    nextQuestion("last");
    setTimeout(() => {
      navigate("/result");
    });
  }

  function stepQuestion() {
    setCurrentAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  }

  function exitToTopics() {
    navigate("/home");
  }
}
