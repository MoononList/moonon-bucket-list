import * as S from "./styles";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  title: string;
}
const TopBar = ({ title }: TopBarProps) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Right>
        <S.StyledAdd onClick={() => navigate("/addgoal")} />
        <S.StyledUser onClick={() => navigate("/mypage")} />
        <S.StyledList />
      </S.Right>
    </S.Container>
  );
};

export default TopBar;
