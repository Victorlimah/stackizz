import * as S from "./styles";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getModules } from "../../services/modulesService";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();

  async function getAllModules() {
    const response = await getModules();
    setModules(response);
  }

  useEffect(() => {
    getAllModules();
  }, []);

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
            {modulesFactory(modules)}
          </S.Module>
        </S.Content>
      </S.Container>
      <Footer page="home" />
    </>
  );

  function modulesFactory(arrayModules) {
    return arrayModules.map(({ id, name }) => {
      return (
        <S.ModuleContent key={id} onClick={() => navigate(`/topic/${id}`)}>
          <S.Heading>{name}</S.Heading>
        </S.ModuleContent>
      );
    });
  }
}
