import React, { Component } from "react";

//create your first component
import Announcement from "./announcement.js";
import ResetButton from "./resetButton.js";
import Tile from "./tile.js";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			gameBoard: [" ", " ", "", " ", " ", "", " ", " ", ""],
			turn: "x"
		};
	}

	updateBoard(loc, player) {}
	render() {
		return (
			<div className="container">
				<div className="menu">
					<h1>Tic Tac Toe</h1>
					<Announcement />
					<ResetButton />
				</div>
				{this.state.gameBoard.map(
					function(value, i) {
						return (
							<Tile
								key={i}
								loc={i}
								value={value}
								updateBoard={this.updateBoard.bind(this)}
								turn={this.state.turn}
							/>
						);
					}.bind(this)
				)}
			</div>
		);
	}
}

export default Home;
