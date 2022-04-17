
import React from 'react'
import CartItem from './CartItem'

function Cart(props) {
    const products=props.products
    return(
        <div className='cart'>
            {products.map((item)=>
            {return(<CartItem product={item} functions={props} key={item.id}/>)}
            )}
        </div>
    )
    
}

export default Cart