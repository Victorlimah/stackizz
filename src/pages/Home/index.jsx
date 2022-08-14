import * as S from "./styles";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../providers/AppContext";

import { getModules } from "../../services/api/modulesService";
import PrivateRoute from "../../services/PrivateRoute";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  async function getAllModules() {
    const response = await getModules();
    setModules(response);
  }

  useEffect(() => {
    getAllModules();
  }, []);

  return (
    <PrivateRoute>
      <Header />
      <S.Container>
        <S.Header>
          <S.Heading> Bem vindo(a) </S.Heading>
          <S.Username>{user ? user.name : ""}</S.Username>
        </S.Header>
        <S.Content>
          <S.Module>
            <S.HeadingModule>Meus módulos</S.HeadingModule>
            {modulesFactory(modules)}
          </S.Module>
        </S.Content>
      </S.Container>
      <Footer page="home" />
    </PrivateRoute>
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
