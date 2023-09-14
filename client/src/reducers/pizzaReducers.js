export const getAllPizzaReducer = (state={pizzas : []}, action)=>{
    switch(action.type)
    {
        case 'GET_PIZZA_REQUEST' : return{
           
            ...state
        }
        case 'GET_PIZZA_SUCCESS' : return{
            
            pizzas : action.payload
        }
        case 'GET_PIZZA_FAILED' : return{
            error : action.payload 
         
        }
        default : return state
    }

};