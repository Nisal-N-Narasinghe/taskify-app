import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message, type }) => {
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error"]).isRequired,
};

export default Notification;
