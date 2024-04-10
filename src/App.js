import Navbar from "./Components/HomePage/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Product from "./Components/Products/Product";
import ProductDescription from "./Components/ProductDescription/ProductDescription";
import Checkout from "./Components/CheckoutPage/Checkout";
import './App.css'

import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./Components/CartContext";

function App(){
    return(
        
            <>
                <CartContextProvider>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/mobiles/" element={<Product />} />
                        <Route path="/productdescription/:id" element={<ProductDescription />} />
                        <Route path="/checkout/" element={<Checkout />} />
                    </Routes>
                </CartContextProvider>

            </>
        
    );
}
export default App;