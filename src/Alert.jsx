import AlertStyle from "./Alert.module.css";

import React, { useEffect } from "react";

const Alert = ({ type, message, removeNotification, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeNotification(), 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`${AlertStyle.p} ${AlertStyle}.${type}}`}>{message}</p>;
};

export default Alert;
