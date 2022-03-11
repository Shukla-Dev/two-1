import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = ({ setLogOut, isLoggedIn, details }) => {
	return (
		<Navbar bg="light">
			<Container>
				<Navbar.Brand href="App.js">
					{isLoggedIn ? (
						<div className="d-flex justify-content-center align-items-center">
							<Avatar sx={{ bgcolor: blue[700], width: 36, height: 36 }}>
								{details.name?.first[0]}
							</Avatar>
							<h4>
								<span className=" ms-2 mt-4 pe-2">{details.name?.first}</span>
								<span>{details.name?.last}</span>
							</h4>
						</div>
					) : (
						<div>
							<AccountCircleIcon
								fontSize="large"
								color="primary"
								className="me-2"
							/>
							Random User API
						</div>
					)}
				</Navbar.Brand>
				{isLoggedIn ? (
					<>
						<Button color="primary" onClick={() => setLogOut()}>
							LogOut
						</Button>
					</>
				) : (
					// <Button color="warning" onClick={() => setLogin()}>
					// 	LogIn
					// </Button>
					''
				)}
			</Container>
		</Navbar>
	);
};

export default NavBar;
