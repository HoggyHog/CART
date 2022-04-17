import React from 'react'

function CartItem(props) {
     //now we dont need any of this constructor or functions, coz now  we gonna change state of cart, not cartItem

    /* constructor(){
        super()
        this.state={
            title:'PHONE',
            cost:999,
            qty:1,
            img:''
        }
    } */ 


    //so we're doing this instead of the bind thing, which is kinda not req if you use arrow function
    //add=()=>{
        //now to change the state, we need to use setState, and there 2 ways

        /* this.setState({
            qty:this.state.qty+1
        }) */      
        //that was the first form to do it, use this object way if the prevState isnt req

        /* use this method if the prevState is not required, also note that we're returning an object in this
        function */
        /* this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
            
        })
    }
    subtract=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        })
    } */
    
    const product=props.product
    
    const {title,price,qty}=product
    return (
        <div className='cart-item'>
            <div className='left-half'>
            <img className='item-pic' />
            </div>
            <div className='right-half'>
                <div className="item-props" style={{fontSize:30}}>{title}</div>
                <div className="item-props" style={{color:"#777"}}>PRICE:{price} </div>
                <div className="item-props" style={{color:"#777"}}>QTY:{qty} </div>
                <div className='cart-actions'>
                    <img 
                    alt="plus" 
                    className='action-item' 
                    src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                    onClick={()=>props.functions.IncreaseQuantity(product)}
                    />
                    <img 
                    alt="minus" 
                    className='action-item' 
                    src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                    onClick={()=>props.functions.DecreaseQuantity(product)}
                    />
                    <img 
                    alt="bin" 
                    className='action-item' 
                    src="https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1650188207~hmac=bfef6e76862cd1aef8905905e3919e5c"
                    onClick={()=>props.functions.DeleteItem(product.id)}
                    />

                </div>
            </div>      
        </div>
    )
}

export default CartItem