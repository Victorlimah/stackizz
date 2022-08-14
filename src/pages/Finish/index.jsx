import * as S from "./styles";

import { useLocation, useNavigate } from "react-router-dom";
import PrivateRoute from "../../services/PrivateRoute";

export default function Finish() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, numberOfQuestions } = location.state.data;

  return (
    <PrivateRoute>
      <S.Container>
        <S.BoxResults>
          <S.HeadingResults>Parabéns!</S.HeadingResults>
          <S.BoxScore>
            <S.TitleScore>Sua pontuação foi:</S.TitleScore>
            <S.Score>{score * 10}</S.Score>
          </S.BoxScore>
          <S.BoxQuestions>
            <S.Question className="total">
              {numberOfQuestions}
              <span>Questões</span>
            </S.Question>
            <S.Question className="correct">
              {score}
              <span>Certas</span>
            </S.Question>
            <S.Question className="wrong">
              {numberOfQuestions - score}
              <span>Erradas</span>
            </S.Question>
          </S.BoxQuestions>
          <S.FooterResults>
            <S.ButtonResults onClick={() => navigate("/home")}>
              Voltar para o início
            </S.ButtonResults>
          </S.FooterResults>
        </S.BoxResults>
      </S.Container>
    </PrivateRoute>
  );
}
