import Header from "../../components/Header";
import * as S from "./styles";

export default function Home() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.Heading> Bem vindo(a) </S.Heading>
          <S.Username> Nome do usuário </S.Username>
        </S.Header>
        <S.Content>
          <S.Module>
            <S.HeadingModule>Meus módulos</S.HeadingModule>
            <S.ModuleContent>
              <S.Heading>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </S.Heading>
            </S.ModuleContent>
          </S.Module>
        </S.Content>
      </S.Container>
    </>
  );
}
