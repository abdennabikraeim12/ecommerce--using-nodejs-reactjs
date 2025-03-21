
function Navbar (){

  return(

<div className="container-fluid mb-5">
    <div className="row border-top px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, marginTop: '-1px', padding: '0 30px'}}>
          <h6 className="m-0">Categories</h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
          <div className="navbar-nav w-100 overflow-hidden" style={{height: 410}}>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1" /></a>
              <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                <a href className="dropdown-item">Men's Dresses</a>
                <a href className="dropdown-item">Women's Dresses</a>
                <a href className="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href className="nav-item nav-link">Shirts</a>
            <a href className="nav-item nav-link">Jeans</a>
            <a href className="nav-item nav-link">Swimwear</a>
            <a href className="nav-item nav-link">Sleepwear</a>
            <a href className="nav-item nav-link">Sportswear</a>
            <a href className="nav-item nav-link">Jumpsuits</a>
            <a href className="nav-item nav-link">Blazers</a>
            <a href className="nav-item nav-link">Jackets</a>
            <a href className="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>
      <div className="col-lg-9">
       
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{height: 410}}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{height: 410}}>
              <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-dark" style={{width: 45, height: 45}}>
              <span className="carousel-control-prev-icon mb-n2" />
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-dark" style={{width: 45, height: 45}}>
              <span className="carousel-control-next-icon mb-n2" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  )
  
}
export default Navbar;