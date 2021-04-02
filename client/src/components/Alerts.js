import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alerts = () => {
  const { alert } = useContext(AlertContext);
  const alertClass = "card-panel alert";
  return (
    alert && (
      <div className={alertClass + ` ${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alerts;
