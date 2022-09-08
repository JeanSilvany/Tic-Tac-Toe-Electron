import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ResetButton = styled.button`
  background-color: green;
  color: white;
  height: 40px;
  width: 100px;
  border-width: 0;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

export const Title = styled.h1`
  height: 40px;
`;
