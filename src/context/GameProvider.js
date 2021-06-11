import { useState } from "react";
import GameContext from "./GameContext";

const players = {
  player1: {
    name: "X",
    img: "",
  },
  player2: {
    name: "O",
    img: "",
  },
};

const winningPossibleIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const computeWinner = (userChoice) => {
  for (let index = 0; index < winningPossibleIndex.length; index++) {
    let [box1, box2, box3] = winningPossibleIndex[index];

    if (
      userChoice?.[box1] === userChoice?.[box2] &&
      userChoice?.[box1] === userChoice?.[box3]
    ) {
      return userChoice[box1];
    }
  }
  return null;
};

const defaultChoice = Array(9).fill();

const GameProvider = ({ children }) => {
  const [isPlayer1, setisPlayer1] = useState(true);
  const [choices, setChoices] = useState(defaultChoice);
  const [winner, setWinner] = useState("");
  const [resultMsg, setResultMsg] = useState("");

  const startNewGame = () => {
    setisPlayer1(true);
    setChoices(defaultChoice);
    setWinner("");
    setResultMsg("");
  };

  const onClick = (props) => {
    // return if we get our winner or the box is already filled
    if (winner || choices[props]) {
      return;
    }

    let choicesCopy = [...choices];
    choicesCopy[props] = isPlayer1
      ? players.player1.name
      : players.player2.name;

    setChoices(choicesCopy);
    let winnerPlayer = computeWinner(choicesCopy);
    if (winnerPlayer) {
      setWinner(winnerPlayer);
      setResultMsg(`🎉 Player ${winnerPlayer} wins`);
    }
    if (!winnerPlayer && !choicesCopy.includes(undefined)) {
      setResultMsg(`Match Drawn`);
    }
    setisPlayer1((prevVal) => !prevVal);
  };

  return (
    <GameContext.Provider
      value={{ choices, isPlayer1, resultMsg, onClick, startNewGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
