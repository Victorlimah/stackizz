import * as S from './styles';

import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import PrivateRoute from "../../services/PrivateRoute";

import { RiArrowGoBackFill } from "react-icons/ri";
import { getHistory } from '../../services/api/userService';

export default function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  async function getAllHistory() {
    const response = await getHistory();
    setHistory(response);
  }

  useEffect(() => {
    getAllHistory();
  } , []);

  return (
    <PrivateRoute>
      <Header />
      <S.Container>
        <S.Content>
          <S.Module>
            <S.HeadingModule>Histórico</S.HeadingModule>
            {historyFactory(history)}
          </S.Module>
        </S.Content>
      </S.Container>
      <S.BackToHome onClick={() => navigate("/home")}>
        <RiArrowGoBackFill size={40} />
        Voltar para módulos
      </S.BackToHome>
    </PrivateRoute>
  );

  function historyFactory(arrayHistory) {
    return arrayHistory.map(({ id, topic, score, createdAt }) => {
      return (
        <S.ModuleContent key={id}>
          <S.Heading>{topic.name}</S.Heading>
          <S.Score>{score} pontos</S.Score>
          <S.Date>
            {dayjs(createdAt).format('DD/MM/YYYY - HH:mm')}
          </S.Date>
        </S.ModuleContent>
      );
    } );
  }
}
