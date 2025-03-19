import SideBar from "../../component/sidebar"
import TopBar from "../../component/topbar"
import { Outlet } from "react-router-dom";



const Home = ()=>{
    return (
 
 <div className="page-container">
 
<SideBar></SideBar>
  <div className="page-content">
   <TopBar></TopBar>
   <Outlet></Outlet>

  </div>            
</div>

       

    )
}
export default Home