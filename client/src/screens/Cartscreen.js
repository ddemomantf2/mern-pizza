import React from 'react'
import{useSelector , useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'

export default function Cartscreen() {

  const cartstate = useSelector(state=>state.cartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x , item)=>x+item.price , 0)
  const dispatch = useDispatch()   


  return (
    <div>
        <div className='row justify-content-center'>
           <div className='col-md-6'>
            <h2 style={{fontSize:'30px'}}>My Cart</h2>
            <hr/>
            {cartItems.map(items=>{
              return <div className='flex-container'>
              <div className='text-left m-1 w-100'>
                <h1>{items.name} [{items.varient}]</h1>
                <h1>Price : {items.quantity} * {items.prices[0][items.varient]} = {items.price}</h1>
                <h1 style={{display: 'inline'}}>Quality : </h1>
                <i className="fa-solid fa-plus" onClick={()=>{dispatch(addToCart(items , items.quantity+1 , items.varient))}}></i>
                <b>{items.quantity}</b>
                <i className="fa-solid fa-minus" onClick={()=>{dispatch(addToCart(items , items.quantity-1 , items.varient))}}></i>
                <hr/>
              </div>
              <div className='m-1 w-100'>
                <img src={items.image} style={{height: '80px' , height: '80px'}}></img>
              </div>
              <div className='m-1 w-100'>
              <i className="fa-solid fa-trash mt-5" onClick={()=>{dispatch(deleteFromCart(items))}}></i>
              </div>

          </div>
            })}
            
           </div>

        
          <div className='col-md-4 text-right'>
             <h2 style={{fontSize: '30'}}>total: {subtotal} /Rs-</h2><hr/>
             <button className='btn'>CHECK OUT</button>
             
           </div>
        
           </div>
    </div>
  )
}
