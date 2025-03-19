import { useEffect, useState } from "react";
import categoriesService from "../service/categoriesService";

function Categories(){

  const [Category, setCategories] = useState();

  const getAll = () => {
    categoriesService
      .getAll()
      .then((res) => {
        /*       console.log(res );
         */ 
        console.log(res.data);
        setCategories(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    getAll();
  }, []);


    return(
        <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
    {Category?.map((item, index) => {
                      return (
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
        <div  className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
         {item.galerie?.map((index) => {
                              return (
                                

            
            <img  className="img-fluid w-100"  src={
              "http://localhost:5000/getImage/" + index.name } alt />
          
            );
          })}
          
          
          </div>
          <h5 className="font-weight-semi-bold m-0">{item.name}</h5>
        </div>
      </div>
                      )
     
      
  })}
      
    </div>
  </div>
    )

}
export default Categories;