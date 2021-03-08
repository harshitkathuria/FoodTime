import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const alertClass = "card-panel alert";
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={alertClass + ` ${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
