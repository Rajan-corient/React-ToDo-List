import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import './GroceryList.scss'

export function GroceryList({ grocery, modifyCart }) {

    return (
        <React.Fragment>
            <Card>
                {/* <Card.Header className="text-center">Spinach</Card.Header> */}
                <Card.Body>
                    <section className="mb-0">
                        <p>
                            <img className="centerImage" width={100} height={100}
                                src={grocery.img} alt="Spinach" />
                            <div className="vege-desc">
                                <p className="name" title="spinach">
                                    {grocery.name}
                                </p>
                                <h4>
                                    <i className="fa fa-rupee"></i>
                                    <b className="price">
                                        {grocery.discountedPricePerKg}
                                    </b>
                                    <span className="d-inline p-4">
                                        <i className="fa fa-rupee"></i>
                                        <b className="price" style = {
                                            {
                                                color: '#94908a',
                                                textDecoration: 'line-through'
                                            }
                                        }
                                            id="mrp">
                                            {grocery.actualPricePerKg}
                                        </b>
                                    </span>
                                </h4>
                                <div className="">
                                    <a style={{ textDecoration: 'none' }} className="btn-sm btn-warning" href="#spinach">
                                        {grocery.weight}
                                    </a>
                                </div>
                            </div>
                        </p>
                        <footer className="add-to-cart">
                            { grocery.count === 0 ? 
                                <div>
                                    <Button className="mt-2 w-100" variant="info"
                                    onClick={ () => modifyCart('firstAdd', grocery.id) }>
                                        Add To Cart
                                    </Button>
                                </div> : 

                                <div className="d-flex justify-content-between border cart-2">
                                    <div className="">
                                        <button className="btn btn-sm btn-info cart-btn"
                                        onClick={ () => modifyCart('remove', grocery.id) }>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        { grocery.count }
                                    </div>
                                    <div className="">
                                        <button className="btn btn-sm btn-info cart-btn"
                                        onClick={ () => modifyCart('add', grocery.id) }>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            }
                        </footer>
                    </section>
                </Card.Body>
            </Card>

        </React.Fragment>
    )
}



