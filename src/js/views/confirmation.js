import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Confirmation extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<img
						src="https://images.unsplash.com/photo-1554412661-828c8d34bb9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						className="card-img-top"
						alt="..."
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
		);
	}
}
