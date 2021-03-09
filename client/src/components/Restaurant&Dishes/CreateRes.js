import React, { useState } from "react";

const CreateResModal = () => {
  const [res, setRes] = useState({
    name: "",
    cuisine: "Multi-Cuisine",
    address: "",
    description: "",
    contactNumber: ""
  });

  const { name, cuisine, address, description, contactNumber } = res;

  const onChange = e => {
    setRes({ [e.target.name]: e.target.value });
  };

  const onSubmit = () => {};

  return (
    <div id="restaurant" className="restaurant-modal modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="center heading">Add Restaurant</h4>
        <div className="row">
          <form onSubmit={onSubmit} className="form col s12">
            <div className="row">
              <div className="input-field col s9 offset-s1">
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
              <div className="input-field col s9 offset-s1">
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
              <div className="input-field col s9 offset-s1">
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
              <div className="input-field col s9 offset-s1">
                <i className="material-icons prefix">description</i>
                <textarea
                  name="decription"
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
              <div className="input-field col s9 offset-s1">
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
            <button id="resBtn" type="submit"></button>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="left btn red modal-close waves-effect">
          Cancel <i className="material-icons right">clear</i>
        </a>
        <a
          href="#dish"
          className="right btn modal-close waves-effect modal-trigger"
          onClick={() => document.querySelector("#resBtn").click()}
        >
          Add Dish
        </a>
      </div>
    </div>
  );
};
export default CreateResModal;
