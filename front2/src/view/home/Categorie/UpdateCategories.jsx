import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categorieService from "../../../Service/categorieService";
const UpdateCategory = ()=>{

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
    categorieService
    .update(id, data)
    .then((res) => {
      console.log(res);
      navigate("/listcategory");//  path mel app.js
    })
    .catch((err) => {
      console.log(err);
    });
 
  };


  useEffect(() => {
    categorieService
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
          <h3 className="panel-title"><strong>UpdateCategory</strong> </h3>
          <ul className="panel-controls">
            <li><Link Link="#" className="panel-remove"><span className="fa fa-times" /></Link></li>
          </ul>
        </div>
       
        <div className="panel-body">                                                                        
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">name</label>
            <div className="col-md-6 col-xs-12">                                            
              <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                <input type="text" className="form-control"          onChange={OnChangeHandler}
                                     name="name" value={data.name} />
              </div>                                            
             </div>
          </div>
          
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">description</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control"        onChange={OnChangeHandler}
                                 name="description"     value={data.description} rows={5} defaultValue={""} />
           
            </div>
          </div>
       
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
export default UpdateCategory