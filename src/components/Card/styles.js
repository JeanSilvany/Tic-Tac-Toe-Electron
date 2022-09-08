import styled from "styled-components";

export const Container = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
  animation: containerAnimation 1s;

  &:hover {
    background-color: #9bf9b7;
  }

  @keyframes containerAnimation {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }
`;

export const Image = styled.img`
  flex: 1;
  animation: imageAnimation 0.5s;

  @keyframes imageAnimation {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }
`;
