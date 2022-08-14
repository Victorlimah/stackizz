/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

import { RiArrowGoBackFill } from "react-icons/ri";

import { getTopics } from "../../services/api/topicsService";

import Header from "../../components/Header";
import PrivateRoute from "../../services/PrivateRoute";

export default function Topic() {
  const [topics, setTopics] = useState({ Topic: [] });
  const navigate = useNavigate();
  const id = useParams().id;

  async function getAllTopics() {
    const response = await getTopics(id);
    if (response.Topic.length === 0) {
      Swal.fire({
        title: "Ops!",
        text: "Este módulo está bloqueado!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      navigate("/home");
    } else {
      setTopics(response);
    }
  }

  useEffect(() => {
    getAllTopics();
  }, [id]);

  return (
    <PrivateRoute>
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
    </PrivateRoute>
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
