import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerService from "../../../Service/CustomerService";

const ListCustomer = ()=>{

  const [customer, setCustomer] = useState();

  const getAll = () => {
    CustomerService
      .getAll()
      .then((res) => {
        /*       console.log(res );
         */ 
        console.log(res.data);
        setCustomer(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    getAll();
  }, []);

  const OnDelete = (id) => {
    CustomerService.deleteOne(id).then((res) => {
      getAll();
    });
  };

    return (
        <>
      <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">List Customer</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={100}>Addresse</th>
                <th width={100}>picture</th>
                <th width={100}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
            {customer?.map((item, index) => {
                      return (
                        <tr id="trow_1">
                          <td>{item._id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.pasword}</td>
                          <td>{item.phone}</td>
                          <td>{item.address}</td>


                          
                           <td>
                            {item.picture?.map((index) => {
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
                            <Link to={`/Updatecustomer/${item._id}`}>
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
export default ListCustomer