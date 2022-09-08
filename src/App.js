/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Row } from "./components/Row";
import { Container, Content, ResetButton, Title } from "./styles";

const App = () => {
  /**
   * States
   */

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [player, setPlayer] = useState(2);
  const [gameFinished, setGameFinished] = useState(false);
  const [winner, setWinner] = useState(undefined);
  const [winningPatterns] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]);

  /**
   * Callbacks
   */

  const changePlayer = () => {
    if (!gameFinished) {
      if (player === 1) {
        setPlayer(2);
      }
      if (player === 2) {
        setPlayer(1);
      }
    }
  };

  const checkIfSomeoneWon = () => {
    winningPatterns.forEach((e) => {
      const firstPosition = board[e[0]];
      if (!firstPosition) return;
      let someoneHasWon = true;
      e.forEach((element) => {
        if (board[element] !== firstPosition) {
          someoneHasWon = false;
        }
      });
      if (someoneHasWon) {
        setGameFinished(true);
        setWinner(player);
      }
    });
  };

  const checkIfAllSquaresAreTaken = () => {
    let allChecked = true;
    board.forEach((e) => {
      if (e === "") {
        allChecked = false;
      }
    });
    if (allChecked) {
      setMessage("Empate!");
    }
  };

  const handleSelectSquare = (position) => {
    if (!gameFinished) {
      if (!board[position]) {
        setBoard(
          board.map((card, index) => {
            if (position === index && card === "") {
              return player;
            }
            return card;
          })
        );
      }
    }
  };

  const resetGame = () => {
    setBoard((oldValue) => oldValue.map((e) => (e = "")));
    setPlayer(2);
    setGameFinished(false);
    setWinner(undefined);
    setMessage("");
  };

  /**
   * Effects
   */

  useEffect(() => {
    const checkWinner = () => {
      if (gameFinished) setMessage(`Player ${winner} venceu!`);
    };
    if (gameFinished && winner !== undefined) {
      checkWinner();
    } else {
      return;
    }
  }, [board, gameFinished]);

  useEffect(() => {
    checkIfAllSquaresAreTaken();
    checkIfSomeoneWon();
    changePlayer();
  }, [board]);

  return (
    <Container>
      <Title>{message}</Title>
      <Content>
        <Row>
          <Card
            onClick={() => {
              handleSelectSquare(0);
            }}
            value={board[0]}
          />
          <Card onClick={() => handleSelectSquare(1)} value={board[1]} />
          <Card onClick={() => handleSelectSquare(2)} value={board[2]} />
        </Row>
        <Row>
          <Card onClick={() => handleSelectSquare(3)} value={board[3]} />
          <Card onClick={() => handleSelectSquare(4)} value={board[4]} />
          <Card onClick={() => handleSelectSquare(5)} value={board[5]} />
        </Row>
        <Row>
          <Card onClick={() => handleSelectSquare(6)} value={board[6]} />
          <Card onClick={() => handleSelectSquare(7)} value={board[7]} />
          <Card onClick={() => handleSelectSquare(8)} value={board[8]} />
        </Row>
      </Content>

      <ResetButton onClick={() => resetGame()}>Reiniciar</ResetButton>
    </Container>
  );
};

export default App;
