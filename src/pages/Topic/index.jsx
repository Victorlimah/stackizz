/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { RiArrowGoBackFill } from "react-icons/ri";

import { getTopics } from "../../services/topicsService";

import Header from "../../components/Header";

export default function Topic() {
  const [topics, setTopics] = useState({ Topic: [] });
  const navigate = useNavigate();
  const id = useParams().id;

  async function getAllTopics() {
    const response = await getTopics(id);
    setTopics(response);
  }

  useEffect(() => {
    getAllTopics();
  }, [id]);

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.Username> {topics.name} </S.Username>
        </S.Header>
        <S.Content>
          <S.Topics>
            <S.HeadingTopics>Meus Tópicos</S.HeadingTopics>
            {topicsFactory(topics.Topic)}
          </S.Topics>
        </S.Content>
      </S.Container>
      <S.BackToHome onClick={() => navigate("/home")}>
        <RiArrowGoBackFill size={40} />
        Voltar para módulos
      </S.BackToHome>
    </>
  );

  function topicsFactory(arrayTopics) {
    return arrayTopics.map(({ id, name }) => {
      return (
        <S.TopicsContent key={id} onClick={() => navigate(`/questions/${id}`)}>
          <S.Heading>{name}</S.Heading>
        </S.TopicsContent>
      );
    });
  }
}
