import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../../../Service/ProductService";
const UpdateProduct = ()=>{

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
ProductService.update(id, data)
    .then((res) => {
      console.log(res);
      navigate("/listProduct");//  path mel app.js
    })
    .catch((err) => {
      console.log(err);
    });
 
  };


  useEffect(() => {
    ProductService
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
          <h3 className="panel-title"><strong>UpdateProduct</strong> </h3>
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
                <input type="text" className="form-control" onChange={OnChangeHandler} name="name" value={data.name} />
              </div>                                            
             </div>
          </div>
          
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">description</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" onChange={OnChangeHandler} name="description"     value={data.description} rows={5} defaultValue={""} />

            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">refProduct</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" onChange={OnChangeHandler} name="refProduct"     value={data.refProduct} rows={5} defaultValue={""} />
              
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">price</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" onChange={OnChangeHandler} name="price"     value={data.price} rows={5} defaultValue={""} />

            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">qte</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" onChange={OnChangeHandler} name="qte"     value={data.qte} rows={5} defaultValue={""} />

            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">gallerie</label>
            <div className="col-md-6 col-xs-12">                                            
              <input type="file" className="form-control" onChange={OnChangeHandler} name="gallerie"     value={data.gallerie} rows={5} defaultValue={""} />

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
export default UpdateProduct