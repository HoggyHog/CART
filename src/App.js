import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

//importing in all the required functions only ->thats how firebase V9 works
import {initializeApp} from 'firebase/app'
import {getFirestore,collection,getDocs} from 'firebase/firestore'

//this info which is unique to our firebase project
const firebaseConfig = {
  apiKey: "AIzaSyDeJ4lbSFGKEHRgMsvyTjn3RGDnsS6JD70",
  authDomain: "cart-app-fca2a.firebaseapp.com",
  projectId: "cart-app-fca2a",
  storageBucket: "cart-app-fca2a.appspot.com",
  messagingSenderId: "234435207195",
  appId: "1:234435207195:web:8dce9e18999b3b099218be"
};




class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:[
        //we removed everything coz now we linked firebase to the app na
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

  //nicely use this boi to take in data from firebase
  componentDidMount(){
    const app=initializeApp(firebaseConfig)   //starting the firebase stuff
    const db=getFirestore(app)                //accessing the firestore database
    const colref=collection(db,'products')    //touching the collection we need
    getDocs(colref).then((snapshot)=>{        // touching the docs we need one at a time, and then 
      const products=snapshot.docs.map((product)=>{  //putting them inside an array, to set that as 
      return (product.data())                        //our state ->yessir
      })
      this.setState({
        products
      })
    })
    
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
