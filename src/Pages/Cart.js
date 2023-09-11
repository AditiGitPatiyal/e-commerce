import './Cart.css'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addToCart,removeFromCart,clearCart } from "../GlobalState/Slices/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch();

    const product = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.cartTotalAmount);
    let Amount = totalAmount.toFixed(2);
    const Add=(product)=>{
        dispatch(addToCart(product));
    }
    const remove=(product)=>{
        dispatch(removeFromCart(product));
    }

    console.log(product);
    return(
        <>  
            <div className="container">
            <div className="d-flex justify-content-center cart mt-4">
                <h5 className="text-center mt-4">CART PRODUCTS</h5>
                <button  className="btn ms-auto" disabled>Total Amount: ${Amount}</button>
                <button className='btn ms-2' onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
            </div>
                <div className="row mt-3">
                    {   product.length>0?
                        product.map((product,id)=>{
                            return(
                                <div className="col-lg-3 mx-3" key={id}>
                                    <div className="card p-3">
                                        <div className="product-image mx-auto">
                                            <img src={product.image_link} alt="product-banner" />
                                        </div>
                                        <div className="info1 mt-2">
                                            <h6>{product.product_name}</h6>
                                            <p><b>Price:</b>${product.price}</p>
                                            <button onClick={()=>remove(product)}>-</button>
                                            <span className="mx-4">{product.cartQuantity}</span>
                                            <button onClick={()=>Add(product)}>+</button>
                                            <p className='mt-3'><strong>Total Price:</strong>${product.price*product.cartQuantity.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        :
                        <h6>Your Cart is empty.</h6>  
                    }
                </div>
            </div>


        </>

    );
}
export default Cart