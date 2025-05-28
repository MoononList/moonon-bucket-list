import styled from "@emotion/styled";
import Add from "@/assets/add.svg?react";
import User from "@/assets/user.svg?react";
import List from "@/assets/list.svg?react";

export const Container = styled.header`
  height: 56px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const Title = styled.h1`
  letter-spacing: 2px;
  font-size: 30px;
  font-family: "Merry Loves", sans-serif;
  color: #ff511c;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  & > * {
    cursor: pointer;
  }
`;
export const StyledAdd = styled(Add)`
  path {
    transition: stroke 0.3s ease;
  }

  &:hover path {
    stroke: white;
  }
`;

export const StyledUser = styled(User)`
  path {
    transition: stroke 0.3s ease;
  }

  &:hover path {
    stroke: #ff511c; // 원하는 hover 선 색상
  }
`;

export const StyledList = styled(List)`
  path {
    transition: stroke 0.3s ease;
  }

  &:hover path {
    stroke: #ff511c; // 원하는 hover 선 색상
  }
`;
