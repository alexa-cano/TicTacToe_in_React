import React from "react";
import { useState } from "react";
import BoardGame from "./BoardGame";

const PickMenu = () => {
	const [isSentX, setIsSentX] = useState(false);
	const [isSentO, setIsSentO] = useState(true);
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [firstPlayer, setFirstPlayer] = useState("");

	if (isSentX) {
		return <BoardGame x={isSentX} o={isSentO} firstPlayer={firstPlayer} />;
	}
	const handleClickX = () => {
		if (player1 != "" && player2 != "") {
			setIsSentX(true);
			setFirstPlayer("It is X turn!");
		}
	};
	if (!isSentO) {
		return <BoardGame player1={player1} player2={player2} firstPlayer={firstPlayer} />;
	}
	const handleClickO = () => {
		if (player1 != "" && player2 != "") {
			setIsSentO(false);
			setFirstPlayer("It is O turn!");
		}
	};
	const onChangePlayer1 = (e) => {
		if (e.target.value != player1) {
			setPlayer1(e.target.value);
		}
	};
	const onChangePlayer2 = (e) => {
		if (e.target.value != player2) {
			setPlayer2(e.target.value);
		}
	};

	return (
		<div className="container-players">
			<h2>Pick A Weapon</h2>
			<div>
				<h3>CHOOSE YOUR WEAPON</h3>
				<div className="input-players">
					<input type="text" placeholder="Player1" onChange={onChangePlayer1} />
					<input type="text" placeholder="Player2" onChange={onChangePlayer2} />
				</div>
				<div className="button-player">
					<button onClick={handleClickX}>X</button>
					<button onClick={handleClickO}>O</button>
				</div>
			</div>
		</div>
	);
};

export default PickMenu;
