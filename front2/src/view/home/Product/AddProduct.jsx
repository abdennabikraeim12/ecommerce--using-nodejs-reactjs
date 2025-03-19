import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ProductService from "../../../Service/ProductService"


const AddProduct = ()=>{

  const navigate = useNavigate()
const [data,setData]=useState({})
const [Image,setImage]=useState()
 
  
const onChangeHandler=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
    console.log(data)
  }
const formData = new FormData();
const onSubmitHandler=(e)=>{
e.preventDefault()

formData.append('refProduct', data.refProduct);
formData.append('name', data.name);
formData.append('price', data.price);
formData.append('qte', data.qte);
formData.append('description', data.description);
 
for (let i = 0; i < Image.length; i++){
  formData.append('photo',Image[i])
} 
ProductService.create(formData).then((res)=>{
  console.log(res)
  navigate('/listProduct')
}).catch((err)=>{
  console.log(err)
})

 
}  
const onChangeHandlerImage=(e)=>{
  e.preventDefault()
  setImage(e.target.files)
}



    return (
        <>
           <div className="row">
  <div className="col-md-12">
    <form className="form-horizontal" onSubmit={onSubmitHandler}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Add Product</strong> </h3>
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
                <input type="text" className="form-control" name="name" onChange={onChangeHandler} />
              </div>                                            
             </div>
          </div>
          
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">description</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" rows={5} defaultValue={""} name="description" onChange={onChangeHandler} />
           
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">reference</label>
            <div className="col-md-6 col-xs-12">                                            
              <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                <input type="text" className="form-control" name="refProduct" onChange={onChangeHandler} />
              </div>                                            
             </div>
          </div>

          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">price</label>
            <div className="col-md-6 col-xs-12">                                            
              <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                <input type="text" className="form-control" name="price" onChange={onChangeHandler} />
              </div>                                            
             </div>
          </div>

           <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Quantite</label>
            <div className="col-md-6 col-xs-12">                                            
              <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                <input type="text" className="form-control" name="qte" onChange={onChangeHandler} /> {/*name="qte" men modele product*/} 
              </div>                                            
             </div>
          </div>

          <div class="form-group">
      <label class="col-md-3 col-xs-12 control-label">Galerie</label>
          <div class="col-md-6 col-xs-12">                                                                                                                                        
          <input type="file" multiple class="fileinput btn-primary" onChange={onChangeHandlerImage}  name="galerie" id="filename" title="Browse file"/>
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
export default AddProduct