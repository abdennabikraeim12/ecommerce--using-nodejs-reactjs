import { useState } from "react";
import Footter from "../../component/footter"
import Navbar from "../../component/navbar"
import Topbar from "../../component/topbar"
import {useNavigate} from "react-router-dom"
import authRegisterService from "../../service/authRegisterService";

const Register = ()=>{

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

formData.append('email', data.email);
formData.append('name', data.name);
formData.append('phone', data.phone);
formData.append('address', data.address);
formData.append('pasword', data.pasword);
 
for (let i = 0; i < Image.length; i++){
  formData.append('picture',Image[i])
} 
authRegisterService.register(formData).then((res)=>{
    {/*remarque 1 ba3d  authRegisterService dima n7otou register not create*/}
  console.log(res)
  navigate('/login') /*code yrag3ek lel page login  */
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

<Topbar/>

<Navbar></Navbar>
       <div className="container-fluid bg-secondary my-5">
  <div className="row justify-content-md-center py-5 px-xl-5" onSubmit={onSubmitHandler}>
    <div className="col-md-6 col-12 py-5">
      <div className="text-center mb-2 pb-2">
        <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
        <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
      </div>
      <form action>
        <div >
          <input type="email" className="form-control border-white p-4 m-2" placeholder="email " name="email" onChange={onChangeHandler}/>
          <div >
          <input type="password" className="form-control border-white p-4 m-2 " placeholder="password" name="pasword" onChange={onChangeHandler}/>
          <input type="text" className="form-control border-white p-4 m-2 " placeholder="phone" name="phone" onChange={onChangeHandler}/>
          <input type="text" className="form-control border-white p-4 m-2 " placeholder="address" name="address" onChange={onChangeHandler}/>

          <input type="file" className="form-control border-white p-4 m-2 "  name="picture" onChange={onChangeHandlerImage}/>

          </div>
          {/*remarque les name sont les meme on bachend */}
          <button className="btn btn-primary px-4 m-2 rounded ">register</button>

        </div>
      </form>
    </div>
  </div>
</div>
<Footter></Footter>

</>

    )
}
export default Register;