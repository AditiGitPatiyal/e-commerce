import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../GlobalState/Slices/cartSlice";
import { show } from "../GlobalState/Slices/ProductSlice"
import { useNavigate } from "react-router-dom";
const AllCat = (prop) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [allproducts, setAllproducts] = useState([]);
  console.log(prop.query);
  let getProduct = async () => {
    let response = await fetch(prop.url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    const search = result.filter((item)=>item.product_name.toLowerCase().includes(prop.query));
    setAllproducts(search);
  };
  useEffect(() => {
    getProduct();
  }, [prop]);
  const Add=(product)=>{
    dispatch(addToCart(product));
  }
  const display=(product)=>{
    dispatch(show(product));
    navigate("/Single-product");
  }
  return(
    <>
        <div className="d-flex flex-wrap">
            {allproducts.map((product, id) => {
                return (
                    <div className="my-3 me-2" key={id} >
                        <div className="card p-2">
                            <div className="product-image mx-auto" onClick={()=>display(product)}>
                                <img src={product.image_link} alt="product-banner" />
                            </div>
                            <div className="info mt-2">
                                <h6 onClick={()=>display(product)}>{product.product_name}</h6>
                                <p onClick={()=>display(product)}><b>Price:</b> ${product.price}</p>
                                <button onClick={()=>Add(product)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </>
  );
}
export default AllCat