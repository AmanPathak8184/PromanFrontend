import React from 'react';
import { Col, Container, Form, FormControl, InputGroup, Row, } from 'react-bootstrap';
import './Resources.css'

const Resources = function (props) {
    return (
        <Container fluid>

            <Row className="justify-content-between">
                <span> Resources Needed</span>
            </Row>

            <Row id="Resources" className="justify-content-between" >

                <Col className="border12" className="ResourcesBlock" xs={5}>

                    <div className="border12">

                        Food: {parseFloat((props.FoodAmount) / 1000000000).toFixed(2)} B

                      

                    </div>

                </Col>
                <Col className="border12" className="ResourcesBlock" xs={5}>

                    <div className="border12">

                        Wood: {parseFloat((props.WoodAmount) / 1000000000).toFixed(2)} B

                    </div>

                </Col>

                <Col className="border12" className="ResourcesBlock" xs={5}>

                    <div className="border12">

                        Stone: {parseFloat((props.StoneAmount) / 1000000000).toFixed(2)} B

    </div>

                </Col>

                <Col className="border12" className="ResourcesBlock" xs={5}>

                    <div className="border12">

                        Iron: {parseFloat((props.IronAmount) / 1000000000).toFixed(2)} B

    </div>

                </Col>

                <Col className="border12" className="ResourcesBlock" xs={5}>

                    <div className="border12">

                        Silver: {parseFloat((props.SilverAmount) / 1000000000).toFixed(2)} B

    </div>

                </Col>


            </Row>


        </Container>
    )
}

export default Resources