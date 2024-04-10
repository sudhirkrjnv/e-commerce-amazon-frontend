import './Leftpart.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function Leftpart(){
    return(
        <>
            <div className='leftpartcontainer'>
                <div className='category'><div className='titlefont'>Category</div>
                    <div className='contents'>
                        <div>Smartphones & Basic Mobiles</div>
                        <div>&nbsp;&nbsp;&nbsp;Smartphones</div>
                    </div>
                </div><br/>
                <div>
                    <div className='costomerreview'><div className='titlefont'>Costomer Review</div>
                        <Stack spacing={1}>
                            <Link className='link' to={'/product/mobiles/'+ 4} >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Rating name="rating-read-only" defaultValue={4} precision={0.1} readOnly size="small" />
                                    <span style={{ marginLeft: '0.5em' }}>& Up</span>
                                </div>
                            </Link>
                            <Link className='link' to={'/productdescription/'+ '03'} >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Rating name="rating-read-only" defaultValue={3} precision={0.1} readOnly size="small" />
                                    <span style={{ marginLeft: '0.5em' }}>& Up</span>
                                </div>
                            </Link>
                            <Link className='link' to={'/productdescription/'+ '02'} >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Rating name="rating-read-only" defaultValue={2} precision={0.1} readOnly size="small" />
                                    <span style={{ marginLeft: '0.5em' }}>& Up</span>
                                </div>
                            </Link>
                            <Link className='link' to={'/productdescription/'+ '01'} >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Rating name="rating-read-only" defaultValue={1} precision={0.1} readOnly size="small" />
                                    <span style={{ marginLeft: '0.5em' }}>& Up</span>
                                </div>
                            </Link>
            
                        </Stack>
                    </div>    
                </div><br/>
                <div>
                    <div className='brands'><div className='titlefont'>Brands</div>
                        <input type='checkbox' id='Redmi' name='Redmi' value='Redmi'/><label>Redmi</label><br/>
                        <input type='checkbox' id='realme' name='realme' value='realme'/><label>realme</label><br/>
                        <input type='checkbox' id='Samsung' name='Samsung' value='Samsung'/><label>Samsung</label><br/>
                        <input type='checkbox' id='iphone' name='iphone' value='iphone'/><label>iphone</label><br/>
                        <input type='checkbox' id='iQOO' name='iQOO' value='iQOO'/><label>iQOO</label><br/>
                        <input type='checkbox' id='OnePlus' name='OnePlus' value='OnePlus'/><label>OnePlus</label><br/>
                        <input type='checkbox' id='Xiaomi' name='Xiaomi' value='Xiaomi'/><label>Xiaomi</label><br/>
                        <input type='checkbox' id='POCO' name='POCO' value='POCO'/><label>POCO</label><br/>
                    </div>
                </div><br/>
                <div>
                    <div className='price'><div className='titlefont'>Price</div>
                        <div className='contents'>
                            <div>Under ₹1,000</div>
                            <div>₹1,000 - ₹5,000</div>
                            <div>₹5,000 - ₹10,000</div>
                            <div>₹10,000 - ₹20,000</div>
                            <div>₹20,000 - ₹35,000</div>
                            <div>Over ₹35,000</div>
                        </div>
                    </div>
                </div><br/>
                <div>
                    <div className='deals'><div className='titlefont'>Deals & Discounts</div>
                        <div className='contents'>
                            <div>All Discounts</div>
                            <div>Today's Deals</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Leftpart;