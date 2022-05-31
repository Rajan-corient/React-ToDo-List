import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

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
                                            {' '}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                            erat a ante.{' '}
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
                                        <p>
                                            {' '}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                            erat a ante.{' '}
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
                                <Card.Header className="text-center">Banana</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {' '}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                            erat a ante.{' '}
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
                                            {' '}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                            erat a ante.{' '}
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


