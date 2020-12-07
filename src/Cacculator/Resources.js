import React from 'react';
import { Col, Container, Form, FormControl, InputGroup, Row, } from 'react-bootstrap';
import './Resources.css'

const Resources = function (props) {
    return (
        <Container fluid  >

               

            <Row>

                <Col className="ResourcesButton border1"  xs={12} lg={2}>
                        <Row>
                            <Col  className="NumberBlock  " xs={12} lg={12}>
                            {parseFloat((props.FoodAmount) / 1000000000).toFixed(2)}   BN
                            </Col >
                        </Row>
                        <Row >
                         <Col className="NameBlock">Food</Col>
                        </Row>
                </Col>


                <Col className="ResourcesButton"  xs={12} lg={2}>
                        <Row>
                            <Col  className="NumberBlock" xs={12} lg={12}>
                            {parseFloat((props.WoodAmount) / 1000000000).toFixed(2)}   BN
                            </Col >
                        </Row>
                        <Row >
                         <Col className="NameBlock">Wood</Col>
                        </Row>
                </Col>

                <Col className="ResourcesButton"  xs={12} lg={2}>
                        <Row>
                            <Col  className="NumberBlock" xs={12} lg={12}>
                            {parseFloat((props.StoneAmount) / 1000000000).toFixed(2)}   BN
                            </Col >
                        </Row>
                        <Row >
                         <Col className="NameBlock">Stone</Col>
                        </Row>
                </Col>

                <Col className="ResourcesButton"  xs={12} lg={2}>
                        <Row>
                            <Col  className="NumberBlock" xs={12} lg={12}>
                            {parseFloat((props.IronAmount) / 1000000000).toFixed(2)}   BN
                            </Col >
                        </Row>
                        <Row >
                         <Col className="NameBlock">Iron</Col>
                        </Row>
                </Col>
                <Col className="ResourcesButton"  xs={12} lg={2}>
                        <Row>
                            <Col  className="NumberBlock" xs={12} lg={12}>
                            {parseFloat((props.SilverAmount) / 1000000000).toFixed(2)}   BN
                            </Col >
                        </Row>
                        <Row >
                         <Col className="NameBlock">Silver</Col>
                        </Row>
                </Col>


            </Row>

        </Container>
    )
}

export default Resources