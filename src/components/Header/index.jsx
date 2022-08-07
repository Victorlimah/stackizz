import * as S from './styles';

import Logo from '../../assets/logotipo.png';

export default function Header() {
  return (
    <S.Header>
      <S.Logo src={Logo} alt="Logo" />
    </S.Header>
  );
}