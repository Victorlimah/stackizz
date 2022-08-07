import * as S from './styles';

import Logo from '../../assets/logotipo.png';

export default function Header() {
  return (
    <>
      <S.Header>
        <S.Logo src={Logo} alt="Logo" />
      </S.Header>
      <S.Nav>
        <S.NavItem> Home </S.NavItem>
        <S.NavItem> Histórico </S.NavItem>
        <S.NavItem> Ranking </S.NavItem>
        <S.NavItem> Perfil </S.NavItem>
      </S.Nav>
    </>
  );
}