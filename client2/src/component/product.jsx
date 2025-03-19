import { useEffect, useState } from "react";
import productService from "../service/productService";
import { Link, useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addToCart } from "../redux/cardRedux"


function Product(){

  const [product, setProduct] = useState();

  const getAll = () => {
    productService
      .getAll()
      .then((res) => {
        /*       console.log(res );
         */ 
        console.log(res.data);
        setProduct(res.data.data)



      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    getAll();
  }, []);

//code for calculate 
 const dispatch = useDispatch();
 
 const addto_cart = (produit) => {
  dispatch(addToCart(produit))
}
 

   return(
    <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
       {product?.map((item, index) => {
                      return (
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
     
        <div className="card product-item border-0 mb-4">
          <div  className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        {/*  {item.galerie?.map((index) => {
                              return (
                                */} 

            
            <img style={{height:"400px"}} className="img-fluid w-100"  src={
              "http://localhost:5000/getImage/" + item.galerie[0].name
              

           
            } /* /getImage/:img voir index.js backend*/alt />
          {/* 
            );
          })}
          */}
          
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{item.name}</h6>
            <div className="d-flex justify-content-center">
              <h6>{item.priceTwo}</h6><h6 className="text-muted ml-2"><del>{item.price}</del></h6>
            </div>

            {/*start shopdeatill in product */}
            <Link to={`/ShopDetail/${item._id}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</Link>
            {/*kif neklikyou 3la link hatha mel path (/ShopDetail/) eli fih bech yhezna lel page mta3 shopDetaill */}
            {/*ends shopdeatill in product */}




          </div>

          <button onClick={()=>addto_cart(item)}  className="btn btn-sm text-dark p-0 m-3"><i className="fas fa-eye text-primary mr-1" />Add to Cart</button>

        </div>
        </div>
           );
          })}
    
     
    </div>
   
  </div>
  
   )
}

export default Product;