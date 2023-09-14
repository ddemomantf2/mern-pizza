import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../actions/pizzaActions';
import pizzas from '../PizzaData';
export default function Homescreen() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <div className='row justify-content-center'>
         { pizzas.map(pizza=>{
            return <div className='col-md-3'>
                <div>
                  <Pizza pizza={pizza}/>
                </div>
            </div>
         })}
      </div>
    </div>
  )
}
