import React from "react";
import PropTypes from "prop-types";

const DishItem = ({ index, dish, onEdit }) => {
  const { name, price, type, description } = dish;
  const onChange = e => {
    onEdit(e, index);
  };

  return (
    <div className="row">
      <div className="input-field col s12 m3">
        <input
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={onChange}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-field col s12 m3">
        <input
          name="price"
          id="price"
          type="number"
          value={price}
          onChange={onChange}
        />
        <label htmlFor="price">Price (INR)</label>
      </div>
      <div className="input-field col s12 m3">
        <input
          name="type"
          id="type"
          type="text"
          value={type}
          onChange={onChange}
        />
        <label htmlFor="type">Type</label>
      </div>
      <div className="input-field col s12 m3">
        <textarea
          name="description"
          id="description"
          className="materialize-textarea"
          value={description}
          onChange={onChange}
        ></textarea>
        <label htmlFor="price">Description</label>
      </div>
    </div>
  );
};

DishItem.propTypes = {
  dish: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default DishItem;
