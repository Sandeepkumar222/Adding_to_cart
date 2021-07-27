import React, { useContext, useState } from 'react';
import { MyContext } from './App';


const Item = (props) =>{
    const {count} = useContext(MyContext);
    let [cartCount, setCartCount] = count;
    let [enableCartOp,setEnablecart] = useState(true)
    let card = [];
    for(let i=0; i<props.stars; i++){
        card[i]= (<div class="bi-star-fill"></div>);
    }


   
    let enableCart= () =>{
        setEnablecart(!enableCartOp)
        if(enableCartOp){
        setCartCount(cartCount+1);
        }
        else{
            setCartCount(cartCount-1);
        }
    }

    return (
        <>
        <div className="mb-5 col">
                        <div className="card h-100">
                        {/* <!-- Sale badge--> */}
                            <div className="text-white badge bg-dark position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{props.sale}</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="p-4 card-body">
                                <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">{props.name}</h5>
                               
                                <div className="mb-2 d-flex justify-content-center small text-warning">
                                   { card}
                                    
                                     
                                    </div>
                                   
                                    {/* <!-- Product price--> */}
                                    {props.lowPrice} {props.highPrice}
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{props.mutedPrice}</span>
                                    {props.realPrice}
                                </div>
                                
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="p-4 pt-0 bg-transparent card-footer border-top-0">
                               {enableCartOp? <div className="text-center"><a className="mt-auto btn btn-outline-dark" href="#" onClick={enableCart}>Add to cart</a></div> : <div className="text-center"><a className="mt-auto btn btn-outline-dark" href="#" onClick={enableCart}>Remove from cart</a></div>}
                                {/* {enableRemove?  : ""} */}
                            </div>
                        </div>
                    </div>

        </>
    )
}

export default Item