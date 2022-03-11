import React, { Component } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

export default class Footer extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			number: '',
		};
	}

	static getDerivedStateFromProps(props, state) {
		return { email: props.details.email, number: props.details.phone };
	}
	render() {
		return (
			<footer>
				<div class="container">
					<div class="row">
						<div className="mt-4  col-md-6 item ">
							<h3>Contact Us :</h3>
							<CallIcon fontSize="small" color="primary" />
							&nbsp; &nbsp;
							{this.state.number}
							<br />
							<MailIcon fontSize="small" color="primary" /> &nbsp;&nbsp;
							{this.state.email}
						</div>
						<div className=" mt-4 col-md-6 item  ">
							<a href="https://www.instagram.com/">
								<InstagramIcon />
							</a>
							<a href="https://twitter.com/" className="ms-2">
								<TwitterIcon />
							</a>
							<a href="https://facebook.com/" className="ms-2">
								<FacebookIcon />
							</a>
							<a href="https://www.linkedin.com/" className="ms-2">
								<LinkedInIcon />
							</a>
							<br />
							Random User API <br />
							Copyright &copy; 2022-3022
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
