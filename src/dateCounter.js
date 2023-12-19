//Generic Imports
import React, { useState } from 'react';
//Project Imports
import { Container, Col, Row } from 'react-bootstrap';
//CSS imports
import './dateCounter.css';

export const DateCounter = () => {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const [today, setToday] = useState(new Date());

	const handleStepChange = (change) => {
		setStep(step + change);
	};

	const handleCountChange = (change) => {
		setCount(count + step * change);
		setToday(new Date());
	};

	const formatFutureDate = (days) => {
		const futureDate = new Date(today);
		futureDate.setDate(today.getDate() + days);
		return futureDate.toDateString(); // Convert the Date object to a string cause either wise we will have an error
	};

	return (
		<Container fluid>
			<Row>
				<Col className="counter-column">
					<button onClick={() => handleStepChange(-1)}>-</button>
					<p>Step: {step}</p>
					<button onClick={() => handleStepChange(1)}>+</button>
				</Col>
				<Col className="counter-column">
					<button onClick={() => handleCountChange(-1)}>-</button>
					<p>Count: {count}</p>
					<button onClick={() => handleCountChange(1)}>+</button>
				</Col>
				<Col className="counter-column">
					<p>
						<span>
							{count === 0
								? 'Today is '
								: count > 0
								? `${count} days from today is `
								: `${count} days before was `}
						</span>
						<span>{formatFutureDate(count)}</span>
					</p>
				</Col>
			</Row>
		</Container>
	);
};
