import AlertStyle from "./Alert.module.css";
import React, { useEffect } from "react";

const Alert = ({ type, message, removeNotification, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeNotification(), 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p
      className={AlertStyle.alertPara}
      style={
        type === "danger"
          ? { backgroundColor: "#ff5757" }
          : { backgroundColor: "rgba(60, 240, 63, 1)" }
      }
    >
      <span className={AlertStyle.SpanStyle}>{message}</span>
    </p>
  );
  // return <p className={`${AlertStyle.p} ${AlertStyle}.${type}}`}>{message}</p>;
};

export default Alert;
