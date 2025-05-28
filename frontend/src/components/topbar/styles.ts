import styled from "@emotion/styled";
import Add from "@/assets/add.svg?react";
import User from "@/assets/user.svg?react";
import List from "@/assets/list.svg?react";

export const Container = styled.header`
  width: 100%;
  height: 56px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  padding: 0 18px 0 18px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-family: "NEXON Lv1 Gothic";
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
