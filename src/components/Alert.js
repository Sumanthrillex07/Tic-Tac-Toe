import React from "react";
import './Alert.css'

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className="alert"
        role="alert"
      >
        {props.alert.msg}
      </div>
    )
  );
}
