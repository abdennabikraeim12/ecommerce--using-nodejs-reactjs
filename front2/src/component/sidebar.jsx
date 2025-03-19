
      import { Link } from "react-router-dom";
      function Sidebar() {
          return(
          <>
          {/* START PAGE SIDEBAR */}
        <div className="page-sidebar">
          {/* START X-NAVIGATION */}
          <ul className="x-navigation">
            <li className="xn-logo">
              <Link to="/">dashbord Admin</Link>
              <Link to="#" className="x-navigation-control" />
            </li>
            <li className="xn-profile">
              <Link to="#" className="profile-mini">
                <img src="assets/images/users/avatar.jpg" alt="John Doe" />
              </Link>
              <div className="profile">
                <div className="profile-image">
                  <img src="assets/images/users/avatar.jpg" alt="John Doe" />
                </div>
                <div className="profile-data">
                  <div className="profile-data-name">Abdennabi kraeim</div>
                  <div className="profile-data-title">Web Developer/Designer</div>
                </div>
                <div className="profile-controls">
                  <Link to="pages-profile.html" className="profile-control-left"><span className="fa fa-info" /></Link>
                  <Link to="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope" /></Link>
                </div>
              </div>
            </li>
            
            <li className="xn-title">Category</li>
            <li className="active">
              <Link to="/addcategory"><span className="fa fa-desktop" /> <span className="xn-text">Add Category</span></Link>
            </li>
            <li className="xn-title">ListCategorie</li>
            <li className="active">
              <Link to="/listcategory"><span className="fa fa-desktop" /> <span className="xn-text">List category</span></Link>
            </li>
            
           
            <li className="xn-title">SubCategory</li>
            <li className="active">
              <Link to="/addSubCategory"><span className="fa fa-desktop" /> <span className="xn-text">Add SubCategory</span></Link>
            </li>
            <li className="xn-title">List</li>
            <li className="active">
              <Link to="/listSubCategory"><span className="fa fa-desktop" /> <span className="xn-text">List SubCategory</span></Link>
            </li>
           

            <li className="xn-title">Product</li>
            <li className="active">
              <Link to="/addProduct"><span className="fa fa-desktop" /> <span className="xn-text">Add Product</span></Link>
            </li>
            <li className="xn-title">List </li>
            <li className="active">
              <Link to="/listProduct"><span className="fa fa-desktop" /> <span className="xn-text">List Product</span></Link>
            </li>

            <li className="xn-title">Admin</li>
            <li className="active">
              <Link to="/addAdmin"><span className="fa fa-desktop" /> <span className="xn-text">Add Admin</span></Link>
            </li>
           
            <li className="xn-title">Customer</li>
            <li className="active">
              <Link to="/addcustomer"><span className="fa fa-desktop" /> <span className="xn-text">Add Customer</span></Link>
            </li>
            <li className="xn-title">ListCustomer</li>
            <li className="active">
              <Link to="/listcustomer"><span className="fa fa-desktop" /> <span className="xn-text">List Customer</span></Link>
            </li>
            
            
           
          </ul>
          {/* END X-NAVIGATION */}
        </div>
        {/* END PAGE SIDEBAR */}
          </>)
      }
      export default Sidebar;

