import React from "react";
import "../../styles/index.scss";

export class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron">
					<div className="row">
						<div className="col-4">
							<h1 className="display-4">Corporate Re-Branding</h1>

							<p className="lead" />
							<hr className="my-4" />
							<p>
								It uses utility classes for typography and spacing to space content out within the
								larger container.
							</p>
							<a className="btn btn-secondary btn-lg" href="#" role="button">
								Learn more
							</a>
						</div>
					</div>
				</div>
				<div className="jumbotron">
					<h1 className="display-4">Website Design</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
					<a className="btn btn-secondary btn-lg" href="#" role="button">
						Learn more
					</a>
				</div>
				<div className="jumbotron">
					<h1 className="display-4">Social Media Managment</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
					<a className="btn btn-secondary btn-lg" href="#" role="button">
						Learn more
					</a>
				</div>
			</div>
		);
	}
}
