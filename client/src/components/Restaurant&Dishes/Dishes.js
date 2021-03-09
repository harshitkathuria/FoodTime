import React, { useState } from "react";
import DishItem from "./DishItem";

const Dishes = () => {
  const [dishes, setDishes] = useState([
    {
      name: "",
      price: "",
      type: "",
      description: ""
    }
  ]);

  const addDish = () => {
    setDishes(dishes => [
      ...dishes,
      {
        name: "",
        price: "",
        type: "",
        description: ""
      }
    ]);
  };

  const onEdit = (e, index) => {
    const _dishes = [...dishes];
    setDishes([
      ..._dishes.slice(0, index),
      { ..._dishes[index], [e.target.name]: e.target.value },
      ..._dishes.slice(index + 1)
    ]);
  };

  return (
    <div id="dish" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="heading">Add Dishes</h4>
        <div className="row">
          <form className="col s12">
            {dishes.map((dish, index) => (
              <DishItem key={index} index={index} dish={dish} onEdit={onEdit} />
            ))}
            <a
              className="btn-floating green waves-effect waves-light red"
              onClick={addDish}
            >
              <i className="material-icons">add</i>
            </a>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="left btn red modal-close waves-effect">
          Cancel <i className="material-icons right">clear</i>
        </a>
        <a href="#dish" className="right btn modal-close waves-effect">
          Ok <i className="material-icons right">done</i>
        </a>
      </div>
    </div>
  );
};

export default Dishes;
