import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Container } from 'reactstrap';
import { Button } from 'reactstrap';

const LogIn = ({ setLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		if (email === 'shukladev188@gmail.com' && password === 'dev123') {
			console.log(email);
			setLogin();
		}
	};

	return (
		<Container fluid className="background">
			<Row className="login-container justify-content-center align-items-center">
				<Col md={4}>
					<h1 className="offset-md-4 mt-4 ">LogIn</h1>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
					</Form>
					<div>
						<Button
							color="primary"
							className="offset-md-4 mt-4 "
							onClick={() => handleSubmit()}
						>
							LogIn
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default LogIn;
