import { useContext } from 'react';
import './Navbar.css'
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';

function Navbar(){
    const {item, size, increment} = useContext(CartContext);
    
    return(
        <>
            <div className='mainbox'>
                <div className='leftpart'>
                    <div className='logobox'>
                        <div className='logo'></div>
                        <div className='textinlogo'>.in</div>
                    </div>
                    <div className='addressbox'>
                        <div className='locationlogo'/>
                        <div className='address'><div className='addresstexttop'>Deliver to Sudhir</div><br/><div className='addresstextbottom'>Chapra 841302</div></div>
                    </div>
                    <div className='searchbox'>
                        <div className='selectbox'><div className='selectitems'>All</div></div>
                        <div className='searchhere'>Search Amazon.in</div>
                        <div className='searchiconbox'><div className='searchicon'></div></div>
                    </div>
                </div>
                <div className='rightpart'>
                    <div className='accountbox'>
                        <div className='name'>Hello, Sudhir</div>
                        <div className='account&lists textbottom'>Account & Lists</div>
                    </div>
                    <div className='ordersbox'>
                        <div className='returns'>Returns</div>
                        <div className='&orders textbottom'>& Orders</div>
                    </div>
                    <Link className='link' to='/checkout/'>      
                        <diV className='cartbox'>
                            <div className='cartlogo'></div>
                            <div className='cartitem'>{size}</div>
                            <div className='carttext textbottom'>cart</div>
                        </diV>
                    </Link>

                </div>
            </div>
        </>
    );
}
export default Navbar;