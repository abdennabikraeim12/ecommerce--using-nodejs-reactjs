import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../../Service/ProductService";

const ListProduct = ()=>{

  const [product, setProduct] = useState();

  const getAll = () => {
    ProductService
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

  const OnDelete = (id) => {
    ProductService.deleteOne(id).then((res) => {
      getAll();
    });
  };

    return (
        <>
      <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">List Product</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={100}>name</th>
                <th width={100}>description</th>
                <th width={100}>refProduct</th>
                <th width={100}>price</th>
                <th width={100}>qte</th>
                <th width={100}>gallerie</th>
                <th width={100}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
            {product?.map((item, index) => {
                      return (
                        <tr id="trow_1">
                          <td>{item._id}</td>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td>{item.refProduct}</td>
                           <td>{item.price}</td>
                           <td>{item.qte}</td>
                           <td>
                            {item.galerie?.map((index) => {
                              return (
                                <>
                                  <img
                                    style={{ width: "50px", height: "50px" }}
                                    src={
                                      "http://localhost:5000/getImage/" +
                                      index.name
                                    } /* /getImage/:img voir index.js backend*/
                                  />
                                </>
                              );
                            })}
                          </td>
                        
                          <td>
                            <Link to={`/Updateproduct/${item._id}`}>
                              <button className="btn btn-default btn-rounded btn-sm">
                                <span className="fa fa-pencil" />
                              </button>
                            </Link>
                            <button
                              className="btn btn-danger btn-rounded btn-sm"
                              onClick={(e) => OnDelete(item._id)}
                            >
                              <span className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
            
            </tbody>
          </table>
        </div>                                
      </div>
    </div>                                                
  </div>
</div>

      </>

    )
}
export default ListProduct