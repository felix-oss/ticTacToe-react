import React from "react";

export class PlayBoard extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="board">
					<div className="tile1" />
					<div className="tile2" />
					<div className="tile3" />
				</div>
			</div>
		);
	}
}
