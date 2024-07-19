import { Component, createContext } from "react";

export const CartContext = createContext()

class CartContextProvider extends Component{
    constructor(props){
        super(props);

        let existingcart = localStorage.getItem('mycart') != undefined ? JSON.parse(localStorage.getItem('mycart')) : [];
        let cartAmount = existingcart.length;
        
        this.state = {
            //item: [],
            //size: 1,
            item: existingcart,
            size: cartAmount,

            increment: (value) => {
                let itemList = this.state.item;
                itemList.push(value);

                this.setState({item: itemList});
                this.setState({size : this.state.item.length});

                this.state.saveToLocalCache();
            },
            
            emptyCart: () => {
                this.setState({ item: [], size: 0 });
                this.state.saveToLocalCache();
            },

            decrement: (value) => {
                let itemList = this.state.item;
                itemList.pop(value);

                this.setState({item: itemList});
                this.setState({size : this.state.item.length});

                this.state.saveToLocalCache();
            },


            saveToLocalCache:()=>{
                localStorage.setItem('mycart', JSON.stringify(this.state.item));
            }
        }
    }

    render(){
        return(
            <>
                <CartContext.Provider value={{...this.state,...this.increment}}>
                    {this.props.children}
                </CartContext.Provider>
            </>
        );
    }

}
export default CartContextProvider;