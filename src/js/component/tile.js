import React, { Component } from "react";
import "./tile.css";

export default class Tile extends Component {
	titleClick(props) {
		props.updateBoard(props.loc, props.turn);
	}
	render() {
		return (
			<div
				className={"tile" + this.props.loc}
				onClick={() => this.titleClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}
