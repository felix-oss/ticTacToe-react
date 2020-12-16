import React, { Component } from "react";

//create your first component
import Announcement from "./announcement.js";
import ResetButton from "./resetButton.js";
import Tile from "./tile.js";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			gameBoard: [" ", " ", "", " ", " ", "", " ", " ", ""]
		};
	}
	render() {
		return (
			<div className="container">
				<div className="menu">
					<h1>Tic Tac Toe</h1>
					<Announcement />
					<ResetButton />
				</div>
				{this.state.gameBoard.map(function(value, i) {
					<Tile />;
				})}
			</div>
		);
	}
}

export default Home;
