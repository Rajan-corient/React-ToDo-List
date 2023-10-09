import React from "react";
import { GroceryList } from "./GoceryList"; 

export class Grocery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // groceryList: [
            //     {
            //         id: 1,
            //         name: 'Spinach',
            //         img: spinach,
            //         actualPricePerKg: 40,
            //         discountedPricePerKg: 34,
            //         weight: '1 KG',
            //         count: 0
            //     },               
            //     {
            //         id: 2,
            //         name: 'Alu/Potato',
            //         img: potato,
            //         actualPricePerKg: 25,
            //         discountedPricePerKg: 30,
            //         weight: '1 KG',
            //         count: 0
            //     },                
            //     {
            //         id: 3,
            //         name: 'Banana',
            //         img: banana,
            //         actualPricePerKg: 50,
            //         discountedPricePerKg: 40,
            //         weight: '1 KG',
            //         count: 0
            //     },                
            //     {
            //         id: 4,
            //         name: 'Brinjal',
            //         img: brinjal,
            //         actualPricePerKg: 55,
            //         discountedPricePerKg: 45,
            //         weight: '1 KG',
            //         count: 0
            //     },                
            //     {
            //         id: 5,
            //         name: 'Onion',
            //         img: onion,
            //         actualPricePerKg: 40,
            //         discountedPricePerKg: 36,
            //         weight: '1 KG',
            //         count: 0
            //     }   ,             
            //     {
            //         id: 6,
            //         name: 'Brinjal',
            //         img: brinjal,
            //         actualPricePerKg: 40,
            //         discountedPricePerKg: 36,
            //         weight: '1 KG',
            //         count: 0
            //     },               
            //     {
            //         id: 7,
            //         name: 'Spinach',
            //         img: spinach,
            //         actualPricePerKg: 40,
            //         discountedPricePerKg: 36,
            //         weight: '1 KG',
            //         count: 0
            //     }
            // ]
        }
    }

    // modifyCart = (type, id) => {
    //     // debugger
    //     const index = this.state.groceryList.findIndex(item => item.id === id);
    //     const groceryListCopy = [...this.state.groceryList];
    //     console.log(type, id, groceryListCopy);
    //     if (type === 'firstAdd') {
    //         groceryListCopy[index].count = 1;
    //         this.setState({groceryList: [...groceryListCopy]});
    //     } else if(type === 'add'){
    //         groceryListCopy[index].count =  groceryListCopy[index].count + 1;
    //         this.setState({groceryList: [...groceryListCopy]});
    //     } else {
    //         if (groceryListCopy[index].count > 0) {
    //             groceryListCopy[index].count = groceryListCopy[index].count - 1;
    //             this.setState({groceryList: [...groceryListCopy]}); 
    //         }
    //     }
    //     console.log(this.state.groceryList)
    // }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row row-cols-5 mt-3">
                        { 
                            this.props.groceryList.length ? 
                            this.props.groceryList.map((grocery, index) => {
                                return (
                                    <div key={grocery.id} className="col mb-3">
                                        <GroceryList 
                                        key={`${grocery.id} ${index}`} 
                                        grocery={grocery}
                                        modifyCart={this.props.modifyCart} 
                                        />
                                    </div>
                                )
                            }) : 'No Records Found' 
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


