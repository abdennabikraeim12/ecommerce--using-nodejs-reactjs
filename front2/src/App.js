import "./App.css";
import Home from "./view/home/home";
import LayOut from "./component/layout";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
/*import Login from "./view/home/login"; */
import AddCategory from "./view/home/Categorie/AddCategories";
import ListCategory from "./view/home/Categorie/ListCategorie";
import UpdateCategory from "./view/home/Categorie/UpdateCategories";
import AddSubCategory from "./view/home/Subcategories/AddSubcategories";
import ListSubCategory from "./view/home/Subcategories/LIstSubcategories";
import UpdateSubCategory from "./view/home/Subcategories/UpdateSubcategories";
import UpdateProduct from "./view/home/Product/UpdateProduct";
import AddProduct from "./view/home/Product/AddProduct";
import ListProduct from "./view/home/Product/ListProduct";
import AddAdmin from "./view/home/Admin/AddAdmin";
import AddCustomer from "./view/home/Customer/AddCustomer";
import ListCustomer from "./view/home/Customer/ListCustomer";
import UpdateCustomer from "./view/home/Customer/UpdateCustomer";
import Login from "./view/home/Admin/login";

function App() {
  const PrivateRoute = ({ children }) => {
    if (!localStorage.getItem("user")) {
      // return <Navigate  to='/login' />
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={ <PrivateRoute><Home /></PrivateRoute>}>
          <Route path="/"element={ <PrivateRoute>    <LayOut></LayOut></PrivateRoute>}></Route>
          <Route
            path="/addcategory"
            element={
              <PrivateRoute>
                <AddCategory></AddCategory>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/listcategory"
            element={
              <PrivateRoute>
                <ListCategory></ListCategory>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/Updatecategory/:id"
            element={
              <PrivateRoute>
                <UpdateCategory></UpdateCategory>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/addSubCategory"
            element={
              <PrivateRoute>
                <AddSubCategory></AddSubCategory>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/listSubCategory"
            element={
              <PrivateRoute>
                <ListSubCategory></ListSubCategory>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/UpdateSubCategory/:id"
            element={
              <PrivateRoute>
                <UpdateSubCategory></UpdateSubCategory>
              </PrivateRoute>
            }
          />


        <Route
          path="/addProduct"
          element={
            <PrivateRoute>
              <AddProduct></AddProduct>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/listProduct"
          element={
            <PrivateRoute>
              <ListProduct></ListProduct>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/UpdateProduct/:id"
          element={
            <PrivateRoute>
              <UpdateProduct></UpdateProduct>
            </PrivateRoute>
          }
        />
        <Route
          path="/addAdmin"
          element={
            <PrivateRoute>
              <AddAdmin></AddAdmin>
            </PrivateRoute>
          }
        />
         <Route
          path="/addcustomer"
          element={
            <PrivateRoute>
              <AddCustomer></AddCustomer>
            </PrivateRoute>
          }
        />
        <Route
          path="/listcustomer"
          element={
            <PrivateRoute>
              <ListCustomer></ListCustomer>
            </PrivateRoute>
          }
        />
        <Route
          path="/UpdateCustomer"
          element={
            <PrivateRoute>
              <UpdateCustomer></UpdateCustomer>
            </PrivateRoute>
          }
        />
        </Route>
        {/*<Route path="/login" element={<Login />}></Route> */}

        <Route path="/login" element={<Login />}></Route>
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
