import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import spinach from '../assets/spinach.jpeg'
import banana from '../assets/banana.jpeg'
import potato from '../assets/potato.png'
import brinjal from '../assets/brinjal.jpeg'
import './Grocery.scss';


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
                                {/* <Card.Header className="text-center">Spinach</Card.Header> */}
                                <Card.Body>
                                    <section className="mb-0">
                                        <p>
                                            <img className="centerImage" width={100} height={100} src={spinach} alt="Spinach" />
                                            <div className="vege-desc">
                                                <p className="" title="spinach">
                                                    Spinach
                                                </p>
                                                <h4>
                                                    <i className="fa fa-rupee"></i>
                                                    <b className="price">34</b>
                                                    <span className="d-inline p-4">
                                                        <i className="fa fa-rupee"></i>
                                                        <b className="price" style={
                                                            {
                                                                color: '#94908a',
                                                                textDecoration: 'line-through'
                                                            }
                                                        }
                                                            id="mrp">
                                                            40
                                                        </b>
                                                    </span>
                                                </h4>
                                                <div className="">
                                                    <a style={{textDecoration: 'none'}} className="btn-sm btn-warning" href="#spinach">
                                                        1 KG
                                                    </a>
                                                </div>
                                            </div>
                                        </p>
                                        <footer className="">
                                            <Button className="mt-2 w-100" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </section>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card>
                                {/* <Card.Header className="text-center">Potato</Card.Header> */}
                                <Card.Body>
                                    <section className="mb-0">
                                        <img className="centerImage" width={100} height={100} src={potato} alt="Potato" />
                                        <div className="vege-desc">
                                            <p className="" title="Alu/Potato">
                                                Alu/Potato
                                            </p>
                                            <h4>
                                                <i className="fa fa-rupee"></i>
                                                <b className="price">25</b>
                                                <span className="d-inline p-4">
                                                    <i className="fa fa-rupee"></i>
                                                    <b className="price" style={
                                                        {
                                                            color: '#94908a',
                                                            textDecoration: 'line-through'
                                                        }
                                                    }
                                                        id="mrp">
                                                        30
                                                    </b>
                                                </span>
                                            </h4>
                                            <div className="">
                                                <a style={{textDecoration: 'none'}} className="btn-sm btn-warning" href="#potato">
                                                    1 KG
                                                </a>
                                            </div>
                                        </div>
                                        <footer className="">
                                            <Button className="mt-4 w-100" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </section>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card>
                                {/* <Card.Header className="text-center">Banana</Card.Header> */}
                                <Card.Body>
                                    <section className="mb-0">
                                        <p>
                                            <img className="centerImage" width={100} height={100} src={banana} alt="Banana" />
                                            <div className="vege-desc">
                                                <p className="" title="Banana">
                                                    Banana
                                                </p>
                                                <h4>
                                                    <i className="fa fa-rupee"></i>
                                                    <b className="price">42</b>
                                                    <span className="d-inline p-4">
                                                        <i className="fa fa-rupee"></i>
                                                        <b className="price" style={
                                                            {
                                                                color: '#94908a',
                                                                textDecoration: 'line-through'
                                                            }
                                                        }
                                                            id="mrp">
                                                            50
                                                        </b>
                                                    </span>
                                                </h4>
                                                <div className="">
                                                    <a style={{textDecoration: 'none'}} className="btn-sm btn-warning" href="#banana">
                                                        1 KG
                                                    </a>
                                                </div>
                                            </div>
                                        </p>
                                        <footer className="">
                                            <Button className="mt-2 w-100" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </section>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card>
                                {/* <Card.Header className="text-center">Brinjal</Card.Header> */}
                                <Card.Body>
                                    <section className="mb-0">
                                        <p>
                                            <img className="centerImage" width={100} height={100} src={brinjal} alt="Brinjal" />
                                            <div className="vege-desc">
                                                <p className="" title="Brinjal">
                                                    Brinjal
                                                </p>
                                                <h4>
                                                    <i className="fa fa-rupee"></i>
                                                    <b className="price">45</b>
                                                    <span className="d-inline p-4">
                                                        <i className="fa fa-rupee"></i>
                                                        <b className="price" style={
                                                            {
                                                                color: '#94908a',
                                                                textDecoration: 'line-through'
                                                            }
                                                        }
                                                            id="mrp">
                                                            55
                                                        </b>
                                                    </span>
                                                </h4>
                                                <div className="">
                                                    <a style={{textDecoration: 'none'}} className="btn-sm btn-warning" href="#brinjal">
                                                        1 KG
                                                    </a>
                                                </div>
                                            </div>
                                        </p>
                                        <footer className="">
                                            <Button className="mt-2 w-100" variant="info">
                                                Add To Cart
                                            </Button>
                                        </footer>
                                    </section>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


