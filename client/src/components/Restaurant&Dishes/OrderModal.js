import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import ResContext from "../../context/restaurant/resContext";

const OrderModal = props => {
  const { order } = props;

  useEffect(() => {
    const M = window.M;
    M.Modal.init(document.querySelector(".modal"));
  }, []);

  const resContext = useContext(ResContext);

  const onSubmitOrder = () => {
    let orderData = {
      amount: order.amount,
      resName: order.resName,
      dishData: []
    };

    order.data.forEach(data => {
      if (data.quantity > 0) {
        const { dish, quantity } = data;
        orderData.dishData.push({ dish, quantity });
      }
    });

    console.log(orderData);
    resContext.submitOrder(orderData);
    props.history.push("/home");
  };

  return (
    <div id="order" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Confirm Order</h4>
        <p className="lead">
          Amount: <strong>Rs. {order.amount}</strong>
        </p>
        <ul className="collection">
          {order.data.map(
            data =>
              data.quantity > 0 && (
                <li key={data.dish} className="collection-item">
                  {data.name}
                  <div className="secondary-content"> Qty: {data.quantity}</div>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="left btn red modal-close waves-effect waves-light"
        >
          Close
        </a>
        <a
          href="#!"
          className="right btn modal-close waves-effect waves-light"
          onClick={onSubmitOrder}
        >
          Confirm
        </a>
      </div>
    </div>
  );
};

export default withRouter(OrderModal);
