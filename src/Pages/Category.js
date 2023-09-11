import { NavLink } from "react-router-dom";
import "./Category.css";
import AllCat from './AllCat';
import { useState, useEffect } from "react";

const Category = () => {
  const[url,setUrl]=useState("http://localhost:4000/products");
  const[search,setSearch]=useState("");
  
  

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex">
          <div className="sidebar">
            <ul className="list-unstyled mb-auto">
            <li>
                <a className="nav-link" onClick={()=>setUrl("http://localhost:4000/products")}>
                  All
                </a>
              </li>
              <li>
                <a className="nav-link" onClick={()=>setUrl("http://localhost:4000/products?category=Men")}>
                  Men
                </a>
              </li>
              <li>
                <a  className="nav-link" onClick={()=>setUrl("http://localhost:4000/products?category=Women")}>
                  Women
                </a>
              </li>
              <li>
                <a className="nav-link" onClick={()=>setUrl("http://localhost:4000/products?category=Kids")}>
                  Kids
                </a>
              </li>
            </ul>
          </div>
          <div className="products ms-4">
            <div className="d-flex justify-content-between mt-4">
            <h5 className="text-center">PRODUCTS</h5>
            <form className="d-flex me-3">
                <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
            </form>
            </div>
            <AllCat url={url}
            query={search} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
