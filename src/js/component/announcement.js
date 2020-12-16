import React, { Component } from "react";
import "announcemnt.css";

export default class Announcement extends Component {
	render() {
		return (
			<div className={this.props.winner ? "visiable" : "hidden"}>
				<h2> Game Over </h2>
			</div>
		);
	}
}
