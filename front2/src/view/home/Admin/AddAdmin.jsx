import { useState } from "react";
import { Link } from "react-router-dom";
import AdminService from "../../../Service/AdminService";

const AddAdmin = () => {
  //state de stockage wa9tiii
  const [Data, setData] = useState({});
  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
    console.log(Data);
  };

  //creation de web Service (button submit)
  const onSubmitHandler = (e) => {
    e.preventDefault();
    AdminService.create(Data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <form className="form-horizontal" onSubmit={onSubmitHandler}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>Add Admin</strong>{" "}
                </h3>
                <ul className="panel-controls">
                  <li>
                    <Link Link="#" className="panel-remove">
                      <span className="fa fa-times" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="panel-body">
                <div className="form-group">
                  <label className="col-md-3 col-xs-12 control-label">
                    name
                  </label>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="fa fa-pencil" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 col-xs-12 control-label">
                    Phone
                  </label>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="fa fa-pencil" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="Phone"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 col-xs-12 control-label">
                  Password
                  </label>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="fa fa-pencil" />
                      </span>
                      <input
                        type="Password"
                        className="form-control"
                        name="Password"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 col-xs-12 control-label">
                  Email 
                  </label>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="fa fa-pencil" />
                      </span>
                      <input
                        type="Email"
                        className="form-control"
                        name="Email"
                        onChange={onChangeHandler}
                      />
                    </div>
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
  );
};
export default AddAdmin;
