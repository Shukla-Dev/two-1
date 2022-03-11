import React from 'react';
import { CardBody, Card, CardTitle } from 'reactstrap';

const CardComponent = ({ details, isLoggedIn }) => {
	const handleLogOut = () => {
		isLoggedIn(!isLoggedIn);
	};
	return (
		<div>
			{/* <NavBar handleLogOut={handleLogOut} /> */}
			<Card>
				<CardBody className="text-center">
					<CardTitle className="text-primary">
						<h1>
							<span className="pe-2">{details.name?.title}</span>
							<span>{details.name?.first}</span>
							<span>{details.name?.last}</span>
						</h1>
					</CardTitle>
				</CardBody>
			</Card>
			{/* <Button
        color="warning"
        className="mt-2 offset-md-4 mt-4"
        onClick={() => handleLogOut()}
      >
        Log Out
      </Button> */}
		</div>
	);
};

export default CardComponent;
