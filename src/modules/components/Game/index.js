import classNames from "classnames";
import React, { useContext } from "react";
import GameContext from "../../../context/GameContext";
import Box from "../../shared/Box";
import Button from "../../widgets/Button";
import Snackbar from "../../widgets/Snackbar";
import styles from "./index.module.scss";

const Game = () => {
  const notes = useContext(GameContext);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <div className={styles.board}>
        {notes.choices.map((_, i) => (
          <Box
            key={i}
            className={classNames(styles.box, styles[notes.choices[i]])}
            onClick={() => notes.onClick(i)}
          >
            {notes.choices[i]}
          </Box>
        ))}
      </div>
      {notes?.resultMsg && (
        <Snackbar
          message={notes.resultMsg}
          action={<Button label="New Game" onClick={notes.startNewGame} />}
        />
      )}
    </div>
  );
};
export default Game;
