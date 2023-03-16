import React from "react";
import { useSelector } from "react-redux";
import './styles.css';
import { Link } from 'react-router-dom';


function Cart(){
    const cart= useSelector(
        (state) => state.itemsInCart.cart
    );

    const cartContent = cart.map((item)=> { 
        return(
        item.map((data)=>{
            return( 
                
                <div key ={data.id} className="card item-card">
                <img src={data.image} className="card-img-top item-image" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <h6 className="card-text">{data.price}</h6>
                  <h6 className="card-text">Quantity- 2</h6>
                </div>
                </div>
               
                )
         })
        )
    })

    const emptyContent =()=>{
        return( 
            <div className="cardBody">
               <h3 className="card-title empty-cart" >Your <span style={{color: "red"}}> <i>SHOPMe </i></span> Cart is Empty.</h3> 
               <h6 className="card-text empty-cart">Please check our items for continue shopping with <Link to='/shoppingApp'><i>SHOPMe</i></Link>.</h6>
            </div>
        )
    }
        
    return(
        <div className="listOfItems">
            {
               cart.length ? cartContent: emptyContent()
            }
        </div>
    );
}

export default Cart;