import React from "react";

const CreateResModal = () => {
  return (
    <div id="restaurant" className="restaurant-modal modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="center heading">Add Restaurant</h4>
        <div className="row">
          <form className="form col s12">
            <div className="row">
              <div className="input-field col s9 offset-s1">
                <i className="material-icons prefix">badge</i>
                <input id="name" name="name" type="text" required />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s9 offset-s1">
                <i className="material-icons prefix">dinner_dining</i>
                <input
                  id="cuisine"
                  name="cuisine"
                  defaultValue="Multi-Cuisine"
                  type="text"
                  required
                />
                <label htmlFor="cuisine" className="active">
                  Cuisine
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s9 offset-s1">
                <i className="material-icons prefix">home</i>
                <input id="address" name="address" type="text" required />
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
                  required
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
          className="right btn modal-close waves-effect modal-trigger"
        >
          Add Dish <i className="material-icons right">done</i>
        </a>
      </div>
    </div>
  );
};
export default CreateResModal;
