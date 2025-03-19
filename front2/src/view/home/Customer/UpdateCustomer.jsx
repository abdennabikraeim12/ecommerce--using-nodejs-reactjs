import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../../../Service/CustomerService";

const UpdateCustomer = ()=>{

  const [data, setdata] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const OnChangeHandler = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
CustomerService.update(id, data)
    .then((res) => {
      console.log(res);
      navigate("/listcustomer");//  path mel app.js
    })
    .catch((err) => {
      console.log(err);
    });
 
  };


  useEffect(() => {
    CustomerService
    .findById(id).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);

  
    return (
        <>
           <div className="row">
  <div className="col-md-12">
    <form className="form-horizontal" onSubmit={OnSubmitHandler}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>UpdateCustomer</strong> </h3>
          <ul className="panel-controls">
            <li><Link Link="#" className="panel-remove"><span className="fa fa-times" /></Link></li>
          </ul>
        </div>
       
        <div className="panel-body">                                                                        
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Addresse</label>
            <div className="col-md-6 col-xs-12">                                            
              <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                <input type="text" className="form-control" onChange={OnChangeHandler} name="address" value={data.address} />
              </div>                                            
             </div>
          </div>
          
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">picture</label>
            <div className="col-md-6 col-xs-12">                                            
              <input type="file" className="form-control" onChange={OnChangeHandler} name="picture"     value={data.picture} rows={5} defaultValue={""} />

            </div>
          </div> {/* name="gallerie" meme name men modele product*/}
       
        </div>
        <div className="panel-footer">
                                         
          <button className="btn btn-primary pull-right">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>
 
      </>

    )
}
export default UpdateCustomer