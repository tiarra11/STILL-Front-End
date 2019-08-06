import React from "react";
import "../../styles/index.scss";

export class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<div className="portfolio_page_header text-center">
					<span id="portfolio_Ppage">Por</span>
					<span id="portfolio_TPpage">T</span>
					<span id="portfolio_Ppage">folio</span>
				</div>
				<div className="jumbotron mt-5 mb-5">
					<div className="row">
						<div className="col-4">
							<h1 className="display-4 Portfoliohead">Corporate Re-Branding</h1>

							<p className="lead">
								{" "}
								Skip steps to save time and/or money, but take it from the experts: cutting corners will
								only cost you in the long run
							</p>
							<hr className="my-4" />
							<p />
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
							<h1 className="display-4 Portfoliohead">Website Design</h1>
							<p className="lead" />A website cannot succeed solely through compelling design or
							thought-provoking content. It needs to have a style that feeds into your website’s user
							experience and functionality while being easy to understand at first glance.
							<hr className="my-4" />
							<p />
						</div>
					</div>
				</div>
				<div className="jumbotron mb-5">
					<div className="row">
						<div className="col-4">
							<h1 className="display-4">Social Media Managment</h1>
							<p className="lead">
								Have a Strategy. Having the right social media strategy is key to the success of many
								modern businesses.
							</p>
							<hr className="my-4" />
							<p />
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
