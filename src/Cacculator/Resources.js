import React from 'react';
import { Col, Container, Form, FormControl, InputGroup, Row, } from 'react-bootstrap';
import './Resources.css'

const Resources = function (props) {
    return (
        <Container fluid  >

               

            <Row>

                <Col className="ResourcesButton "  xs={12} lg={12}>
                        <Row className="NumberBlock  justify-content-center">
                            {parseFloat((props.FoodAmount) / 1000000000).toFixed(2)}   BN
                        </Row>
                        <Row className="NameBlock justify-content-center">
                         Food
                        </Row>
                </Col>


                <Col className="ResourcesButton "  xs={12} lg={12}>
                        <Row className="NumberBlock  justify-content-center">
                            {parseFloat((props.WoodAmount) / 1000000000).toFixed(2)}   BN
                        </Row>
                        <Row className="NameBlock justify-content-center">
                         Wood
                        </Row>
                </Col>

                <Col className="ResourcesButton "  xs={12} lg={12}>
                        <Row className="NumberBlock  justify-content-center">
                            {parseFloat((props.StoneAmount) / 1000000000).toFixed(2)}   BN
                        </Row>
                        <Row className="NameBlock justify-content-center">
                         Stone
                        </Row>
                </Col>

                <Col className="ResourcesButton "  xs={12} lg={12}>
                        <Row className="NumberBlock  justify-content-center">
                            {parseFloat((props.IronAmount) / 1000000000).toFixed(2)}   BN
                        </Row>
                        <Row className="NameBlock justify-content-center">
                         Iron
                        </Row>
                </Col>
                <Col className="ResourcesButton "  xs={12} lg={12}>
                        <Row className="NumberBlock  justify-content-center">
                            {parseFloat((props.SilverAmount) / 1000000000).toFixed(2)}   BN
                        </Row>
                        <Row className="NameBlock justify-content-center">
                         Silver
                        </Row>
                </Col>


            </Row>

        </Container>
    )
}

export default Resources