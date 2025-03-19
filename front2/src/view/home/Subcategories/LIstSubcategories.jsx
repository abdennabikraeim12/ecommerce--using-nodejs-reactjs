import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubCategoriesService from "../../../Service/SubCategoriesService";

const ListSubCategory = ()=>{

    const [Subcategories, SetListCategories] = useState();
  
    const getAll = () => {
SubCategoriesService
        .getAll()
        .then((res) => {
          /*       console.log(res );
           */ 
          console.log(res.data);
          SetListCategories(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    
    useEffect(() => {
      getAll();
    }, []);
  
    const OnDelete = (id) => {
      SubCategoriesService.deleteOne(id).then((res) => {
        getAll();
      });
    };
  
      return (
          <>
        <div className="row">
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">List SubCategories</h3>
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
              {Subcategories?.map((item, index) => {
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
                              <Link to={`/UpdateSubcategory/${item._id}`}>
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
  export default ListSubCategory