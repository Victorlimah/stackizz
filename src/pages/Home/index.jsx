import * as S from "./styles";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import { getModules } from "../../services/modulesService";
import Footer from "../../components/Footer";

export default function Home() {
  const [ modules, setModules ] = useState([]);

  async function getAllModules() {
    const response = await getModules();
    setModules(response);
  }

  useEffect(() => {
    getAllModules();
  } , []);

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

  function modulesFactory(arrayModules){
    return arrayModules.map(module => {
      return (
        <S.ModuleContent key={module.id}>
          <S.Heading>
            {module.name}
          </S.Heading>
        </S.ModuleContent>
      );
    }
    )
  }
}
