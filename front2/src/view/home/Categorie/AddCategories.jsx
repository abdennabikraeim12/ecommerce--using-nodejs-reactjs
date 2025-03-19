import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import categorieService from "../../../Service/categorieService"
import Swal from "sweetalert2"


const AddCategory = ()=>{
 const navigate = useNavigate()
  //state de stockage wa9tiii
  const[Data,setData] = useState({})
  const [Image,setImage]=useState()

  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]:e.target.value
    })
    console.log(Data)
  }

  const formData = new FormData();


//creation de web Service (button submit)
  const onSubmitHandler= (e) =>{
    e.preventDefault()
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
      
        categorieService.create(Data).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        navigate("/listcategory")
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   
    for (let i = 0; i < Image.length; i++){
      formData.append('photo',Image[i])
    } 
    categorieService.create(formData).then((res)=>{
      console.log(res)
      navigate('/listcategory')
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
          <h3 className="panel-title"><strong>Add category</strong> </h3>
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
       
        </div>
        <div className="panel-footer">
                                         
          <button className="btn btn-primary pull-right">Submit</button>
        </div>
      </div>
      <div class="form-group">
      <label class="col-md-3 col-xs-12 control-label">Galerie</label>
          <div class="col-md-6 col-xs-12">                                                                                                                                        
          <input type="file" multiple class="fileinput btn-primary" onChange={onChangeHandlerImage}  name="galerie" id="filename" title="Browse file"/>
                                        </div>
          </div>
    </form>
  </div>
</div>
 
      </>

    )
}
export default AddCategory