import * as S from "./styles";

import Logo from "../../assets/logotipo.png";
import Background from "../../assets/background.jpg"

import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <S.Container background={Background}>
      <Left />
      <S.Title>Pratique seus conhecimentos em programação</S.Title>
      <S.Start>
        <S.Text>Começar agora</S.Text>
        <S.Button onClick={() => navigate("/signin")}>{">"}</S.Button>
      </S.Start>
    </S.Container>
  );

  function Left(){
    return (
      <S.Left>
        <S.Header>
          <S.Logo src={Logo} alt="Logo" />
          
        </S.Header>

        <S.BodyLeft>
          <S.Subtitle>Pratique seus conhecimentos em programação</S.Subtitle>

          <S.Description>
            Na stackizz você pode responder quizzes e melhorar seus
            conhecimentos
          </S.Description>
        </S.BodyLeft>
      </S.Left>
    );
  }

}