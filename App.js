import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:[
        {
          title:'PHONE',
          price:9,
          qty:1,
          img:'',
          id:1
        },
        {
          title:'WATCH',
          price:99,
          qty:2,
          img:'',
          id:2
        },
        {
          title:'LAPTOP',
          price:999,
          qty:3,
          img:'',
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
