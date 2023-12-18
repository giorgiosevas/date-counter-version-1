//Generic Imports
import React, { useState } from "react";
//Project Imports
import { Container, Col, Row } from 'react-bootstrap';
//CSS imports
import './dateCounter.css';


export const DateCounter = () => {
    const [step,setStep] = useState()
    const [count,setCount] = useState()
    const [today,setToday] = useState()

    const handleStepChange = (change) => {
        setStep(step + change);
    };
    
    const handleCountChange = (change) => {
        setCount(count + change);
    };

    const handleDate = (change) => {
        setToday++
    }
	
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
                    <p>{count} days from today is {today}</p>
                </Col>
            </Row>
    </Container>
    );
};
