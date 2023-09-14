import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function () {
    const cartstate = useSelector(state=>state.cartReducer)
    const userstate = useSelector(state=>state.loginUserReducer)

    const {currentUser} = userstate
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5">
                <a className="navbar-brand" href="/">Anshul's Pizzeria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        {currentUser ? (
                        <div className="dropdown mt-2">
                        <a style={{color:'black'}} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {currentUser.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Orders</a>
                          <a className="dropdown-item" href="#">Logout</a>
                        </div>
                      </div>
                        ) : (
                         <li className="nav-item">
                            <a className="nav-link" href="/login">Log in</a>
                        </li>)}



                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
