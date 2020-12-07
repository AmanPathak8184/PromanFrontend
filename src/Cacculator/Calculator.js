import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Jumbotron, Row, } from 'react-bootstrap';
import './Calculator.css';
import Resources from './Resources';



class Calculator extends Component {

    constructor() {
        super()
        this.state = {
            Food: 0,
            Wood: 0,
            Stone: 0,
            Iron: 0,
            Silver: 0,
            MightGained: 0,
            MusterScore: 0
        }

    }


    //#region T1 Variables

    // SwordMan

    T1SwordFood = 0;
    T1SwordWood = 0;
    T1SwordStone = 0;
    T1SwordIron = 0;
    T1SwordSilver = 0;

    T1SwordMightGained = 0;
    T1SwordMusterScore = 0;

    // SpearMan

    T1SpearFood = 0;
    T1SpearWood = 0;
    T1SpearStone = 0;
    T1SpearIron = 0;
    T1SpearSilver = 0;

    T1SpearMightGained = 0;
    T1SpearMusterScore = 0;

    // Cavalry

    T1CavalryFood = 0;
    T1CavalryWood = 0;
    T1CavalryStone = 0;
    T1CavalryIron = 0;
    T1CavalrySilver = 0;

    T1CavalryMightGained = 0;
    T1CavalryMusterScore = 0;

    // Rangers

    T1RangersFood = 0;
    T1RangersWood = 0;
    T1RangersStone = 0;
    T1RangersIron = 0;
    T1RangersSilver = 0;

    T1RangersMightGained = 0;
    T1RangersMusterScore = 0;

    // Sieges

    T1SiegesFood = 0;
    T1SiegesWood = 0;
    T1SiegesStone = 0;
    T1SiegesIron = 0;
    T1SiegesSilver = 0;

    T1SiegesMightGained = 0;
    T1SiegesMusterScore = 0;


    //#endregion

    //#region T5 Variables

    // SwordMan

    T5SwordFood = 0;
    T5SwordWood = 0;
    T5SwordStone = 0;
    T5SwordIron = 0;
    T5SwordSilver = 0;

    T5SwordMightGained = 0;
    T5SwordMusterScore = 0;

    // SpearMan

    T5SpearFood = 0;
    T5SpearWood = 0;
    T5SpearStone = 0;
    T5SpearIron = 0;
    T5SpearSilver = 0;

    T5SpearMightGained = 0;
    T5SpearMusterScore = 0;

    // Cavalry

    T5CavalryFood = 0;
    T5CavalryWood = 0;
    T5CavalryStone = 0;
    T5CavalryIron = 0;
    T5CavalrySilver = 0;


    T5CavalryMightGained = 0;
    T5CavalryMusterScore = 0;

    // Rangers

    T5RangersFood = 0;
    T5RangersWood = 0;
    T5RangersStone = 0;
    T5RangersIron = 0;
    T5RangersSilver = 0;


    T5RangersMightGained = 0;
    T5RangersMusterScore = 0;

    // Sieges

    T5SiegesFood = 0;
    T5SiegesWood = 0;
    T5SiegesStone = 0;
    T5SiegesIron = 0;
    T5SiegesSilver = 0;


    T5SiegesMightGained = 0;
    T5SiegesMusterScore = 0;


    //#endregion

    //#region Faction Variables

    // Faction1

    Faction1Food = 0
    Faction1Wood = 0
    Faction1Stone = 0
    Faction1Iron = 0
    Faction1Silver = 0


    Faction1MightGained = 0;
    Faction1MusterScore = 0;

    // Faction2

    Faction2Food = 0
    Faction2Wood = 0
    Faction2Stone = 0
    Faction2Iron = 0
    Faction2Silver = 0


    Faction2MightGained = 0;
    Faction2MusterScore = 0;

    //#endregion

    //#region T1 Functions

    // Swordman
    SwordmanT1ChangeHandler(e) {
        this.T1SwordFood = e.target.value * 16 * 1000000
        this.T1SwordWood = e.target.value * 5 * 1000000
        this.T1SwordStone = e.target.value * 0 * 1000000
        this.T1SwordIron = e.target.value * 35 * 1000000
        this.T1SwordSilver = e.target.value * 2 * 1000000

        this.T1SwordMightGained = e.target.value * 5
        this.T1SwordMusterScore = e.target.value * 1

    }

    // Spearman

    SpearmanT1ChangeHandler(e) {
        this.T1SpearFood = e.target.value * 16 * 1000000
        this.T1SpearWood = e.target.value * 24 * 1000000
        this.T1SpearStone = e.target.value * 6 * 1000000
        this.T1SpearIron = e.target.value * 0 * 1000000
        this.T1SpearSilver = e.target.value * 3 * 1000000

        this.T1SpearMightGained = e.target.value * 5
        this.T1SpearMusterScore = e.target.value * 1
    }

    // Cavalry

    CavalryT1ChangeHandler(e) {
        this.T1CavalryFood = e.target.value * 27 * 1000000
        this.T1CavalryWood = e.target.value * 0 * 1000000
        this.T1CavalryStone = e.target.value * 17 * 1000000
        this.T1CavalryIron = e.target.value * 7 * 1000000
        this.T1CavalrySilver = e.target.value * 3 * 1000000

        this.T1CavalryMightGained = e.target.value * 5
        this.T1CavalryMusterScore = e.target.value * 1

    }

    // Rangers

    RangersT1ChangeHandler(e) {
        this.T1RangersFood = e.target.value * 8 * 1000000
        this.T1RangersWood = e.target.value * 25 * 1000000
        this.T1RangersStone = e.target.value * 5 * 1000000
        this.T1RangersIron = e.target.value * 9 * 1000000
        this.T1RangersSilver = e.target.value * 3 * 1000000

        this.T1RangersMightGained = e.target.value * 5
        this.T1RangersMusterScore = e.target.value * 1

    }

    // Sieges

    SiegesT1ChangeHandler(e) {
        this.T1SiegesFood = e.target.value * 6 * 1000000
        this.T1SiegesWood = e.target.value * 13 * 1000000
        this.T1SiegesStone = e.target.value * 33 * 1000000
        this.T1SiegesIron = e.target.value * 2 * 1000000
        this.T1SiegesSilver = e.target.value * 3 * 1000000

        this.T1SiegesMightGained = e.target.value * 15
        this.T1SiegesMusterScore = e.target.value * 1
    }

    //#endregion

    //#region T5 Functions

    // Swordman
    SwordmanT5ChangeHandler(e) {
        this.T5SwordFood = e.target.value * 590 * 1000000
        this.T5SwordWood = e.target.value * 160 * 1000000
        this.T5SwordStone = e.target.value * 0 * 1000000
        this.T5SwordIron = e.target.value * 1060 * 1000000
        this.T5SwordSilver = e.target.value * 45 * 1000000

        this.T5SwordMightGained = e.target.value * 25
        this.T5SwordMusterScore = e.target.value * 5
    }

    // Spearman

    SpearmanT5ChangeHandler(e) {
        this.T5SpearFood = e.target.value * 615 * 1000000
        this.T5SpearWood = e.target.value * 1165 * 1000000
        this.T5SpearStone = e.target.value * 175 * 1000000
        this.T5SpearIron = e.target.value * 0 * 1000000
        this.T5SpearSilver = e.target.value * 60 * 1000000

        this.T5SpearMightGained = e.target.value * 25
        this.T5SpearMusterScore = e.target.value * 5

    }

    // Cavalry

    CavalryT5ChangeHandler(e) {
        this.T5CavalryFood = e.target.value * 1290 * 1000000
        this.T5CavalryWood = e.target.value * 0 * 1000000
        this.T5CavalryStone = e.target.value * 590 * 1000000
        this.T5CavalryIron = e.target.value * 150 * 1000000
        this.T5CavalrySilver = e.target.value * 60 * 1000000

        this.T5CavalryMightGained = e.target.value * 25
        this.T5CavalryMusterScore = e.target.value * 5

    }

    // Rangers

    RangersT5ChangeHandler(e) {
        this.T5RangersFood = e.target.value * 220 * 1000000
        this.T5RangersWood = e.target.value * 1115 * 1000000
        this.T5RangersStone = e.target.value * 135 * 1000000
        this.T5RangersIron = e.target.value * 225 * 1000000
        this.T5RangersSilver = e.target.value * 30 * 1000000

        this.T5RangersMightGained = e.target.value * 45
        this.T5RangersMusterScore = e.target.value * 5

    }

    // Sieges

    SiegesT5ChangeHandler(e) {
        this.T5SiegesFood = e.target.value * 170 * 1000000
        this.T5SiegesWood = e.target.value * 480 * 1000000
        this.T5SiegesStone = e.target.value * 1290 * 1000000
        this.T5SiegesIron = e.target.value * 45 * 1000000
        this.T5SiegesSilver = e.target.value * 50 * 1000000

        this.T5SiegesMightGained = e.target.value * 55
        this.T5SiegesMusterScore = e.target.value * 5

    }

    //#endregion

    //#region Faction Function

    // Faction 1

    Faction1Handler(e) {
        this.Faction1Food = e.target.value * 1290 * 1000000
        this.Faction1Wood = e.target.value * 886 * 1000000
        this.Faction1Stone = e.target.value * 805 * 1000000
        this.Faction1Iron = e.target.value * 685 * 1000000
        this.Faction1Silver = e.target.value * 72 * 1000000

        this.Faction1MightGained = e.target.value * 75
        this.Faction1MusterScore = e.target.value * 20

    }

    // Faction 2

    Faction2Handler(e) {
        this.Faction2Food = e.target.value * 839 * 1000000
        this.Faction2Wood = e.target.value * 1048 * 1000000
        this.Faction2Stone = e.target.value * 1015 * 1000000
        this.Faction2Iron = e.target.value * 816 * 1000000
        this.Faction2Silver = e.target.value * 94 * 1000000

        this.Faction2MightGained = e.target.value * 85
        this.Faction2MusterScore = e.target.value * 20

    }

    //#endregion

    //#region CalculateHandler

    CalculateHandler() {

        this.setState({
            Food:
                (this.T1SwordFood + this.T1SpearFood + this.T1CavalryFood + this.T1RangersFood + this.T1SiegesFood +
                    this.Faction1Food + this.Faction2Food
                    + this.T5SwordFood + this.T5SpearFood + this.T5CavalryFood + this.T5RangersFood + this.T5SiegesFood),

            Wood:
                (this.T1SwordWood + this.T1SpearWood + this.T1CavalryWood + this.T1RangersWood + this.T1SiegesWood
                    + this.Faction1Wood + this.Faction2Wood
                    + this.T5SwordWood + this.T5SpearWood + this.T5CavalryWood + this.T5RangersWood + this.T5SiegesWood),

            Stone:
                (this.T1SwordStone + this.T1SpearStone + this.T1CavalryStone + this.T1RangersStone + this.T1SiegesStone
                    + this.Faction1Stone + this.Faction2Stone
                    + this.T5SwordStone + this.T5SpearStone + this.T5CavalryStone + this.T5RangersStone + this.T5SiegesStone),

            Iron:
                (this.T1SwordIron + this.T1SpearIron + this.T1CavalryIron + this.T1RangersIron + this.T1SiegesIron +
                    this.Faction1Iron + this.Faction2Iron
                    + this.T5SwordIron + this.T5SpearIron + this.T5CavalryIron + this.T5RangersIron + this.T5SiegesIron),
            Silver:
                (this.T1SwordSilver + this.T1SpearSilver + this.T1CavalrySilver + this.T1RangersSilver + this.T1SiegesSilver
                    + this.Faction1Silver + this.Faction2Silver
                    + this.T5SwordSilver + this.T5SpearSilver + this.T5CavalrySilver + this.T5RangersSilver + this.T5SiegesSilver),

            MightGained:
                (this.T1SwordMightGained + this.T1SpearMightGained + this.T1CavalryMightGained + this.T1RangersMightGained + this.T1SiegesMightGained
                    + this.Faction1MightGained + this.Faction2MightGained
                    + this.T5SwordMightGained + this.T5SpearMightGained + this.T5CavalryMightGained + this.T5RangersMightGained + this.T5SiegesMightGained),
            MusterScore:
                (this.T1SwordMusterScore + this.T1SpearMusterScore + this.T1CavalryMusterScore + this.T1RangersMusterScore + this.T1SiegesMusterScore
                    + this.Faction1MusterScore + this.Faction2MusterScore
                    + this.T5SwordMusterScore + this.T5SpearMusterScore + this.T5CavalryMusterScore + this.T5RangersMusterScore + this.T5SiegesMusterScore)
        })
    }

    //#endregion

    //#region ResetHandler

    handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            Food: 0,
            Wood: 0,
            Stone: 0,
            Iron: 0,
            Silver: 0,
            MightGained: 0,
            MusterScore: 0
        });
    };

    //#endregion

    render() {
        return (
            <div>
                <Container fluid >
                  
               

                    <Row className="align-items-center CalculateBlock WhiteBlock">
                        <Col className="FontSizeBig" lg={8} xs={6}>
                            Resources Test 22
                        </Col>
                        <Col lg={2} xs={3}>
                            <button className="CalculateButton BlueBlock FontSizeMedium  " onClick={() => this.CalculateHandler()}> CALCULATE </button>
                        </Col>
                        <Col lg={2} xs={3}>
                            <button className="ResetButton" onClick={() => this.handleReset()}> RESET </button>
                        </Col>
                    </Row>
           
                    <Container fluid>

                          

                            <Row className="justify-content-between">
                         
                           

                                <Col xs={4}  className="WhiteBlock ResourcesBlock">
                                    <Resources
                                        FoodAmount={this.state.Food}
                                        WoodAmount={this.state.Wood}
                                        StoneAmount={this.state.Stone}
                                        IronAmount={this.state.Iron}
                                        SilverAmount={this.state.Silver}
                                    />
                                </Col>
                         
                               
                               
         <Col xs={7} >
                                  
                 <Row className="justify-content-between WhiteBlock ResultBlock"> 

                        <Col className="ResultSubBlock OrangeBlock align-items-center" xs={5}> 

                               <Row className="justify-content-center FontSizeBig">
                                         {this.state.MightGained} M
                               </Row>

                              <Row className="justify-content-center FontSizeSmall ">
                                         Might Gained
                              </Row>

                         </Col>

                         <Col className="ResultSubBlock OrangeBlock align-items-center" xs={5}> 

                               <Row className="justify-content-center FontSizeBig">
                                         {this.state.MusterScore} M
                               </Row>

                              <Row className="justify-content-center FontSizeSmall ">
                                        Muster Score
                              </Row>

                         </Col>
                                   
                                  
                      </Row>

                        
                 <Row className="justify-content-between WhiteBlock FactionBlock ">

                        <Col className="" xs={5} >
                            <Row className="OrangeBlock ResultSubBlock align-items-center justify-content-center ">
                            <input type="number" className="InputBox" onChange={this.Faction1Handler.bind(this)} />
                            </Row>
                            <Row className="BlueBlock TroopsNameBlock FontSizeMedium  align-items-center justify-content-center ">
                                Faction 1
                            </Row>
                        </Col>

                        <Col className="" xs={5} >
                            <Row className="OrangeBlock ResultSubBlock align-items-center justify-content-center ">
                            <input type="number" className="InputBox" onChange={this.Faction2Handler.bind(this)} />
                            </Row>
                            <Row className="BlueBlock TroopsNameBlock FontSizeMedium  align-items-center justify-content-center ">
                                Faction 2
                            </Row>
                        </Col>

                 </Row>     

             </Col>
                                
                 </Row>


                    </Container>
                </Container>





                


                <Container fluid>


                    <Row className="justify-content-between">



                        <Col className="Box">
                            T1 Swordman
                <input type="number" className="customInput" onChange={this.SwordmanT1ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T1 Spearman
                <input type="number" className="customInput" onChange={this.SpearmanT1ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T1 Cavalry
                <input type="number" className="customInput" onChange={this.CavalryT1ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T1 Rangers
                <input type="number" className="customInput" onChange={this.RangersT1ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T1 Sieges
                <input type="number" className="customInput" onChange={this.SiegesT1ChangeHandler.bind(this)} />
                        </Col>



                    </Row>

                </Container>

                <Container fluid>



                    <Row className="T5Units" className="justify-content-between">



                        <Col className="Box">
                            T5 Swordman
                <input type="number" className="customInput" onChange={this.SwordmanT5ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T5 Spearman
                <input type="number" className="customInput" onChange={this.SpearmanT5ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T5 Cavalry
                <input type="number" className="customInput" onChange={this.CavalryT5ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T5 Rangers
                <input type="number" className="customInput" onChange={this.RangersT5ChangeHandler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            T5 Sieges
                <input type="number" className="customInput" onChange={this.SiegesT5ChangeHandler.bind(this)} />
                        </Col>



                    </Row>

                </Container>

                <Container fluid>



                    <Row className="T5Units" className="justify-content-start">



                        <Col className="Box">
                            Faction 1
<input type="number" className="customInput" onChange={this.Faction1Handler.bind(this)} />
                        </Col>
                        <Col className="Box">
                            Faction 2
<input type="number" className="customInput" onChange={this.Faction2Handler.bind(this)} />
                        </Col>


                    </Row>

                </Container>

            </div>
        )

    }
}

export default Calculator;