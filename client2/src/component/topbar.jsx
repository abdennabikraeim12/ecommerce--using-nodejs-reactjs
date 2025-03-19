import { useNavigate } from "react-router-dom"
import clientService from "../service/clientService"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"
function Topbar(){
  const navigate = useNavigate()
  const logout =()=>{
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clientService.logout().then((res)=>{
          localStorage.clear()
          navigate("/login")
        }).catch((err)=>{
          console.log(err)
        })
      navigate("/login")   
   } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   
  }

 const cart = useSelector((state)=>state.cart.quantityTotal)
    return(
        <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href>FAQs</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href>Help</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href>Support</a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="text-dark pl-2" href>
                <i className="fab fa-youtube" />
              </a>
              
<button   type="button"  onClick={logout}>logout</button>
              
            </div>
            
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a href className="btn border">
              <i className="fas fa-heart text-primary" />
              <span className="badge">0</span>
            </a>
            <a href className="btn border">
              <i className="fas fa-shopping-cart text-primary" />
              <span className="badge">{cart}</span> 
            </a>
          </div>
        </div>
      </div>
    )
}
export default Topbar;