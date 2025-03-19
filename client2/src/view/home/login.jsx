import { useState } from "react";
import Footter from "../../component/footter"
import Navbar from "../../component/navbar"
import Topbar from "../../component/topbar"
import authService from "../../service/authloginService"
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import {dispatch} from "react-redux"
import { loginError, loginStart, loginsuccess } from "../../redux/userredux";


const Login = ()=>{

     //state de stockage wa9tiii
  const [Data, setData] = useState({});
  const navigate=useNavigate()
  const dispatch = useDispatch()//5asa be reduser/redux




  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
    console.log(Data);
  };

  //creation de web Service (button submit)
  //authService remarque
  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(loginStart())// code nzidouh 5as be redux men userredux.js

   authService.login(Data)
      .then((res) => {
        //navigate('/') 
        {/*navigate('/') this code yraj3ek lel page home avec sont  import {useNavigate} from "react-router-dom"*/}
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res.data))

        dispatch(loginsuccess())//
      })
      .catch((err) => {
        dispatch(loginError())
        console.log(err);
      });
  };

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
 
          </div>
          {/* name="pasword"   remarque les name sont les meme on bachend */}
          <button className="btn btn-primary px-4 m-2 rounded ">Login</button>

        </div>
      </form>
    </div>
  </div>
</div>
<Footter></Footter>

</>

    )
}
export default Login