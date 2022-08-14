import * as S from './styles';

import Logo from '../../assets/logotipo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <S.Logo src={Logo} alt="Logo" />
      </S.Header>
      <S.Nav>
        <S.NavItem onClick={() => navigate("/home")} > Home </S.NavItem>
        <S.NavItem onClick={() => navigate("/history")}> Histórico </S.NavItem>
        <S.NavItem onClick={() => navigate("/ranking")}> Ranking </S.NavItem>
        <S.NavItem onClick={() => navigate("/profile")}> Perfil </S.NavItem>
      </S.Nav>
    </>
  );
}