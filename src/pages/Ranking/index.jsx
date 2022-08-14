import * as S from "./styles";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import PrivateRoute from "../../services/PrivateRoute";

import { RiArrowGoBackFill } from "react-icons/ri";
import { getRanking } from "../../services/api/userService";

export default function Ranking() {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState([]);

  async function getAllHistory() {
    const response = await getRanking();
    setRanking(response);
  }

  useEffect(() => {
    getAllHistory();
  }, []);

  return (
    <PrivateRoute>
      <Header />
      <S.Container>
        <S.Content>
          <S.Module>
            <S.HeadingModule>Ranking</S.HeadingModule>
            {historyFactory(ranking)}
          </S.Module>
        </S.Content>
      </S.Container>
      <S.BackToHome onClick={() => navigate("/home")}>
        <RiArrowGoBackFill size={40} />
        Voltar para módulos
      </S.BackToHome>
    </PrivateRoute>
  );

  function historyFactory(arrayRanking) {
    return arrayRanking.map(({ id, name, score }, index) => {
      return (
        <S.ModuleContent key={id}>
          <S.Heading>{`#${index+1} - ${name}`}</S.Heading>
          <S.Score>{score} pontos</S.Score>
        </S.ModuleContent>
      );
    });
  }
}
