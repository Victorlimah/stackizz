import * as S from "./styles";

import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiHistoryLine } from "react-icons/ri";
import { ImTrophy } from "react-icons/im";

export default function Footer({ page }) {

  const hash = {
    home: page === "home",
    history: page === "history",
    ranking: page === "ranking",
    profile: page === "profile",
  };

  return (
    <>
      <S.Footer>
        <S.FooterContent>
          <AiFillHome className={hash.home} />
          <RiHistoryLine className={hash.history} />
          <ImTrophy className={hash.ranking} />
          <BsFillPersonFill lassName={hash.profile} />
        </S.FooterContent>
      </S.Footer>
    </>
  );
}
