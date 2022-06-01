import React from "react";
import { GroceryList } from "./groceryList"; 
import spinach from '../../assets/spinach.jpeg'
import banana from '../../assets/banana.jpeg'
import potato from '../../assets/potato.png'
import brinjal from '../../assets/brinjal.jpeg'
import onion from '../../assets/onion.jpg'


export class Grocery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'My Grocery List',
            grocerylist: [
                {
                    id: 1,
                    name: 'Spinach',
                    img: spinach,
                    actualPricePerKg: 40,
                    discountedPricePerKg: 34,
                    weight: '1 KG',
                },               
                {
                    id: 2,
                    name: 'Alu/Potato',
                    img: potato,
                    actualPricePerKg: 25,
                    discountedPricePerKg: 30,
                    weight: '1 KG',
                },                
                {
                    id: 3,
                    name: 'Banana',
                    img: banana,
                    actualPricePerKg: 50,
                    discountedPricePerKg: 40,
                    weight: '1 KG',
                },                
                {
                    id: 4,
                    name: 'Brinjal',
                    img: brinjal,
                    actualPricePerKg: 55,
                    discountedPricePerKg: 45,
                    weight: '1 KG',
                },                
                {
                    id: 5,
                    name: 'Onion',
                    img: onion,
                    actualPricePerKg: 40,
                    discountedPricePerKg: 36,
                    weight: '1 KG',
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <h5 className="text-center my-3">{this.props.title}</h5>
                <div className="container">
                    <div className="row">
                        { this.state.grocerylist.length ? 
                            this.state.grocerylist.map(grocery => {
                                return <div className="col-sm-3 mb-3">
                                    <GroceryList key={grocery.id} grocery={grocery} />
                                </div>
                            }) : 'No Records Found' 
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


