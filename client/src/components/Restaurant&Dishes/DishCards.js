import React, { useState, useContext, useEffect } from "react";
import DishCardItem from "./DishCardItem";
import UserDishItem from "./UserDishItem";
import Spinner from "../layout/Spinner";

import ResContext from "../../context/restaurant/resContext";
import AuthContext from "../../context/auth/authContext";
import OrderModal from "./OrderModal";

const DishCards = ({ match }) => {
  const resContext = useContext(ResContext);
  const authContext = useContext(AuthContext);
  const { restaurant, dishes, loading, getDishes } = resContext;
  const { user } = authContext;

  const [order, setOrder] = useState({
    amount: 0,
    resName: "",
    data: []
  });

  useEffect(() => {
    getDishes(match.params.id);
  }, []);

  useEffect(() => {
    if (user && user.role === "user" && dishes) {
      console.log("second useffect");
      const _order = [];
      dishes.forEach(_dish => {
        _order.push({
          dish: _dish._id,
          name: _dish.name,
          price: _dish.price,
          quantity: 0
        });
      });
      setOrder({
        amount: 0,
        resName: restaurant.name,
        data: [..._order]
      });
    }
  }, [dishes]);

  useEffect(() => {
    order.amount = 0;
    order.data.forEach(data => {
      data.quantity = data.quantity || 0;
      order.amount += data.quantity * data.price;
    });
    setOrder({ ...order, amount: order.amount });

    // Toggle PlaceOrder btn
    if (order.amount > 0 && document.getElementById("order-modal")) {
      document.getElementById("order-modal").classList.remove("disabled");
    } else if (document.getElementById("order-modal")) {
      document.getElementById("order-modal").classList.add("disabled");
    }
  }, [order.data]);

  const onEdit = (e, index) => {
    const _order = [...order.data];
    setOrder({
      ...order,
      data: [
        ..._order.slice(0, index),
        { ..._order[index], [e.target.name]: e.target.value },
        ..._order.slice(index + 1)
      ]
    });
  };

  if (!loading && dishes) {
    return (
      <div>
        <div className="section-grid-1" style={DishStyle}>
          {user && user.role === "user"
            ? dishes.map((dish, index) => (
                <UserDishItem
                  key={dish._id}
                  index={index}
                  dish={dish}
                  onEdit={onEdit}
                />
              ))
            : dishes.map(dish => <DishCardItem key={dish._id} dish={dish} />)}
        </div>
        {user && user.role === "user" && (
          <div className="fixed-action-btn">
            <a
              id="order-modal"
              className="btn btn-large amber darken-4 modal-trigger"
              href="#order"
            >
              PlaceOrder
              <i className="material-icons right">inventory</i>
            </a>
          </div>
        )}
        <OrderModal order={order} />
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const DishStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1rem"
};

export default DishCards;
