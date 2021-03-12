import React from "react";
import PropTypes from "prop-types";

const UserDishItem = ({ index, dish, onEdit }) => {
  const onChange = e => {
    onEdit(e, index);
  };

  const { name, price, type, description } = dish;
  return (
    <div className="card cyan darken-4">
      <div className="card-content white-text">
        <span className="card-title">{name}</span>
        <blockquote style={{ fontSize: "1.2rem" }}>
          <p>
            Price:{" "}
            <span className="amber-text text-lighten-1">Rs. {price}</span>
          </p>
          <p>{type}</p>
        </blockquote>
        <span
          className="activator lead orange-text"
          style={{ cursor: "pointer" }}
        >
          Description <i className="material-icons right">vertical_align_top</i>
        </span>
      </div>
      <div className="card-action">
        <div className="input-field">
          <input
            className="white-text"
            name="quantity"
            id="quantity"
            type="number"
            defaultValue="0"
            onChange={onChange}
          />
          <label htmlFor="quantity" className="white-text active">
            Enter Quantity
          </label>
        </div>
      </div>
      <div className="card-reveal grey lighten-4">
        <span className="card-title" style={{ fontWeight: 500 }}>
          Description
          <i className="material-icons right">close</i>
        </span>
        <p className="flow-text" style={{ fontSize: "1.3rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

UserDishItem.propTypes = {
  index: PropTypes.number.isRequired,
  dish: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default UserDishItem;
