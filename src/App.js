import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

//importing in all the required functions only ->thats how firebase V9 works
import {initializeApp} from 'firebase/app'
import {getFirestore,collection,getDocs,onSnapshot} from 'firebase/firestore'

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
      ],
      waiting:true
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
  /* componentDidMount(){
    const app=initializeApp(firebaseConfig)   //starting the firebase stuff
    const db=getFirestore(app)                //accessing the firestore database
    const colref=collection(db,'products')    //touching the collection we need
    getDocs(colref).then((snapshot)=>{        // touching the docs we need one at a time, and then 
      const products=snapshot.docs.map((item)=>{ //taking the data from them into an array, to set to 
        const data=item.data()                   //state, and also dont forget that id thingy
        data['id']=item.id
        return data})
      this.setState({
        products,
        waiting:false
      })
    })
    
  } */

  //that above code runs perfect, but when we change sm in the db, it doesnt update here automatically, and we need
  //to refresh every time ->so now were gonna set a listener ->onSnapshot, so we go like

  componentDidMount(){
    const app=initializeApp(firebaseConfig)
    const db=getFirestore(app)
    const colref=collection(db,'products')
    onSnapshot(colref, (snapshot)=>{             //the only diff comes in this line, where we use onSnapshot instead of getDocs.
      const products=snapshot.docs.map((item)=>{ //this takes 2 paramters ->colref and any function which will run anytime theres a change in db
        const data=item.data()                   //and the function gets a parameter by default ->thats our snapshot from our previous method ->so after this point, its all the same
        data['id']=item.id                       // and since it isnt like some promise, the code is also shorter
        return data})
      this.setState({
        products,
        waiting:false
      })
    })
  }


  render(){
    const {products,waiting}=this.state
   
    return(
      <div>
        <Navbar
          CountItems={this.CountItems} 

        />
        {waiting && (<h1>LOADING ....</h1>)}
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
