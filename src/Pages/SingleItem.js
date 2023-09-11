import { addToCart } from '../GlobalState/Slices/cartSlice';
import './SingleItem.css'
import { useSelector,useDispatch } from 'react-redux'

const SingleItem=()=>{
    const dispatch=useDispatch();
    const product = useSelector(state => state.product.product);
    console.log(product);
    return <>
    {  product?
        <div className='container'>
            <div className='row justify-content-center my-5'>
                <div className='col-lg-3 col-sm-12'>
                    <div className='product-img'>
                        <img src={product.image_link} alt="product-banner"></img>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12'>
                    <div className='product-info'>
                        <h5>{product.product_name}</h5>
                        <p>{product.description}</p>
                        <p><strong>Price: </strong>${product.price}</p>
                        <p><strong>Material: </strong>{product.material}</p>
                        <p><strong>Color: </strong>{product.color}</p>
                        <button id="buynow">Buy Now</button>
                        <button id='addtocart' onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        :
        " "
    }
    </>
}
export default SingleItem