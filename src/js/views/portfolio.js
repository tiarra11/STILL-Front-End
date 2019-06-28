import React from "react";
import "../../styles/index.scss";

export class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron mt-5 mb-5">
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
						<div className="col-4">
							<h1 />
						</div>

						<div className="col-4">
							<img
								className="card-img-top"
								src="https://d2w9rnfcy7mm78.cloudfront.net/1473357/original_9b105ddf959b3c3b1ce4b55fc7ed5939.png?1512137762"
								alt="Card image cap"
							/>
						</div>
					</div>
				</div>
				<div className="jumbotron mb-5">
					<div className="row">
						<div className="col-4">
							<img
								className="card-img-top"
								src="https://www.sharplaunch.com/wp-content/uploads/2016/02/commercial-real-estate-website-design-responsive-image.png"
								alt="Card image cap"
							/>
						</div>
						<div className="col-4">
							<h1 />
						</div>
						<div className="col-4">
							<h1 className="display-4">Website Design</h1>
							<p className="lead">
								This is a simple hero unit, a simple jumbotron-style component for calling extra
								attention to featured content or information.
							</p>
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
				<div className="jumbotron mb-5">
					<div className="row">
						<div className="col-4">
							<h1 className="display-4">Social Media Managment</h1>
							<p className="lead">
								This is a simple hero unit, a simple jumbotron-style component for calling extra
								attention to featured content or information.
							</p>
							<hr className="my-4" />
							<p>
								It uses utility classes for typography and spacing to space content out within the
								larger container.
							</p>
							<a className="btn btn-secondary btn-lg" href="#" role="button">
								Learn more
							</a>
						</div>
						<div className="col-4">
							<h1 />
						</div>
						<div className="col-4">
							<img
								className="card-img-top"
								src="https://www.myadminsupport.co.uk/wp-content/uploads/2012/04/My-Admin-Support-Social-Media-Management-resized.jpg"
								alt="Card image cap"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
