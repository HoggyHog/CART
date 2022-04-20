import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:[
        {
          title:'MOBILE PHONE',
          price:9,
          qty:1,
          img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id:1
        },
        {
          title:'WATCH',
          price:99,
          qty:2,
          img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id:2
        },
        {
          title:'LAPTOP',
          price:999,
          qty:3,
          img:'https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id:3
        }
      ]
    }
  }
  IncreaseQuantity=(item)=>{
    const {products}=this.state
    const index=products.indexOf(item)
    products[index].qty+=1
    this.setState({
      products
    })
  }

  DecreaseQuantity=(item)=>{
    const {products}=this.state
    const index=products.indexOf(item)
    if(products[index].qty!=0){
      products[index].qty-=1
      this.setState({
        products
      })
    }
  }

  DeleteItem=(id)=>{
    const {products}=this.state
    const newprod=products.filter((item)=>item.id!=id)
    this.setState({
      products:newprod
    })
  }

  CountItems=()=>{
    const {products}=this.state
    let s=0;
    products.forEach((item)=>{
      s+=item.qty
    })
    return s;
  }

  FindTotal=()=>{
    const{products}=this.state
    let s=0
    products.forEach((item)=>{
      s+=item.qty*item.price
    })
    return s
  }

  render(){
    const {products}=this.state
   
    return(
      <div>
        <Navbar
          CountItems={this.CountItems} 

        />
        <Cart 
          products={products} 
          IncreaseQuantity={this.IncreaseQuantity}
          DecreaseQuantity={this.DecreaseQuantity}
          DeleteItem={this.DeleteItem}
        />

        <div className="total">
          TOTAL: {this.FindTotal()}
        </div>

      </div>
      
    )
  }
}

export default App;
