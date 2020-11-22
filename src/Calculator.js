import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Calculator.css';

const Calculator = function () {

    return (

        <Container fluid>

         

            <Row id="Resources">
                <Col id="FoodBlock">

                    <InputGroup     >

                        <InputGroup.Prepend>
                            <InputGroup.Text id="Food">Food</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl

                            type="number"
                            placeholder="0"
                            aria-label=""
                            aria-describedby="Food"
                        />

                    </InputGroup>

                </Col>

                <Col id="WoodBlock">

                    <InputGroup     >

                        <InputGroup.Prepend>
                            <InputGroup.Text id="Wood">Wood</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl

                            type="number"
                            placeholder="0"
                            aria-label=""
                            aria-describedby="Wood"
                        />

                    </InputGroup>

                </Col>

                <Col id="StoneBlock">

                    <InputGroup     >

                        <InputGroup.Prepend>
                            <InputGroup.Text id="Stone">Stone</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl

                            type="number"
                            placeholder="0"
                            aria-label=""
                            aria-describedby="Stone"
                        />

                    </InputGroup>

                </Col>

                <Col id="IronBlock">

                    <InputGroup     >

                        <InputGroup.Prepend>
                            <InputGroup.Text id="Iron">Iron</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl

                            type="number"
                            placeholder="0"
                            aria-label=""
                            aria-describedby="Iron"
                        />

                    </InputGroup>

                </Col>

                <Col id="Silver">

                    <InputGroup     >

                        <InputGroup.Prepend>
                            <InputGroup.Text id="Silver">Silver</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl

                            type="number"
                            placeholder="0"
                            aria-label=""
                            aria-describedby="Silver"
                        />

                    </InputGroup>

                </Col>

            </Row>

        


        </Container>

    )
}

export default Calculator;