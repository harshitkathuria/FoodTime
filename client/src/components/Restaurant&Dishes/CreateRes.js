import React, { useState, useEffect } from "react";

const CreateResModal = ({ addResData }) => {
  const [res, setRes] = useState({
    name: "",
    cuisine: "Multi-Cuisine",
    address: "",
    description: "",
    contactNumber: ""
  });

  const { name, cuisine, address, description, contactNumber } = res;

  useEffect(() => {
    if (
      name != "" &&
      cuisine !== "" &&
      address !== "" &&
      description !== "" &&
      contactNumber !== ""
    ) {
      document.querySelector("a[href='#dish']").classList.remove("disabled");
    } else {
      document.querySelector("a[href='#dish']").classList.add("disabled");
    }
  });

  const onChange = e => {
    setRes({ ...res, [e.target.name]: e.target.value });
  };

  const onResModal = e => {
    addResData({ res });
    console.log("from res");
    setRes({
      name: "",
      cuisine: "Multi-Cuisine",
      address: "",
      description: "",
      contactNumber: ""
    });
  };

  return (
    <div id="restaurant" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="center heading">Add Restaurant</h4>
        <div className="row">
          <form className="form col s12">
            <div className="row">
              <div className="input-field col s12 m9 offset-m1">
                <i className="material-icons prefix">badge</i>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  required
                  onChange={onChange}
                />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m9 offset-m1">
                <i className="material-icons prefix">dinner_dining</i>
                <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  value={cuisine}
                  required
                  onChange={onChange}
                />
                <label htmlFor="cuisine" className="active">
                  Cuisine
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m9 offset-m1">
                <i className="material-icons prefix">home</i>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={address}
                  required
                  onChange={onChange}
                />
                <label htmlFor="address">Address</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m9 offset-m1">
                <i className="material-icons prefix">description</i>
                <textarea
                  name="description"
                  id="description"
                  className="materialize-textarea"
                  value={description}
                  required
                  onChange={onChange}
                ></textarea>
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m9 offset-m1">
                <i className="material-icons prefix">phone</i>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="number"
                  required
                  value={contactNumber}
                  onChange={onChange}
                />
                <label htmlFor="contactNumber">Contact Number</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="left btn red modal-close waves-effect">
          Cancel <i className="material-icons right">clear</i>
        </a>
        <a
          href="#dish"
          className="disabled right btn modal-close waves-effect modal-trigger"
          onClick={onResModal}
        >
          Add Dish
        </a>
      </div>
    </div>
  );
};
export default CreateResModal;
