import { combineReducers } from "redux";
import { ProductReducer,SelectedProductReducer } from "./productReducer";

const reducer = combineReducers({ allProducts: ProductReducer, product :SelectedProductReducer })

export default reducer;
    
