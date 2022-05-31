import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import spinach from '../assets/spinach.jpeg'
import banana from '../assets/banana.jpeg'
import potato from '../assets/potato.jpeg'
import brinjal from '../assets/brinjal.jpeg'
 

export class Grocery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'My Grocery List'
        }
    }

    render() {
        return (
            <React.Fragment>
                <h5 className="text-center my-3">{this.props.title}</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Card>
                                <Card.Header className="text-center">Spinach</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                           <img width={100} height={100} src={spinach} alt="Spinach" />
                                        </p>
                                        <footer className="blockquote-footer">
                                            <Button className="mt-2" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card>
                                <Card.Header className="text-center">Potato</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <img width={100} height={100} src={potato} alt="Potato" />
                                        <footer className="blockquote-footer">
                                            <Button className="mt-2" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card>
                                <Card.Header className="text-center">Banana</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                        <img width={100} height={100} src={banana} alt="Banana" />
                                        </p>
                                        <footer className="blockquote-footer">
                                            <Button className="mt-2" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card>
                                <Card.Header className="text-center">Brinjal</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                        <img width={100} height={100} src={brinjal} 
                                        alt="Brinjal" />
                                        </p>
                                        <footer className="blockquote-footer">
                                            <Button className="mt-2" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


