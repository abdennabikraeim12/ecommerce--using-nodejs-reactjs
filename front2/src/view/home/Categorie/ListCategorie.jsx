import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categorieService from "../../../Service/categorieService";

const ListCategory = ()=>{

  const [categories, setCategories] = useState();

  const getAll = () => {
    categorieService
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

  const OnDelete = (id) => {
    categorieService.deleteOne(id).then((res) => {
      getAll();
    });
  };

    return (
        <>
      <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">List categories</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={100}>name</th>
                <th width={100}>description</th>
                <th width={100}>Subcategories</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
            {categories?.map((item, index) => {
                      return (
                        <tr id="trow_1">
                          <td>{item._id}</td>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td>
                            {item.subCategories?.map((i) => {
                              return <tr>{i._id}</tr>;
                            })}
                          </td>

                          <td>
                            <Link to={`/Updatecategory/${item._id}`}>
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
                          <td>
                          
                            
                                
                                  <img
                                    style={{ width: "50px", height: "50px" }}
                                    src={
                                      "http://localhost:5000/getImage/" +
                                      item.picture
                                    } /* /getImage/:img voir index.js backend*/
                                  />
                               
                             
                          
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
export default ListCategory