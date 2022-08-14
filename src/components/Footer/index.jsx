import * as S from "./styles";

import { useNavigate } from "react-router-dom";

import { ImTrophy } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { RiHistoryLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

export default function Footer({ page }) {
  const navigate = useNavigate();

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
          <AiFillHome
            onClick={() => navigate("/home")}
            className={hash.home} />

          <RiHistoryLine
            onClick={() => navigate("/history")}
            className={hash.history}
          />

          <ImTrophy
            onClick={() => navigate("/ranking")}
            className={hash.ranking}
          />

          <BsFillPersonFill
            onClick={() => navigate("/profile")}
            lassName={hash.profile}
          />
        </S.FooterContent>
      </S.Footer>
    </>
  );
}
