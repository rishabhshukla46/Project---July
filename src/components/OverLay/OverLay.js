import React from "react";
import PropTypes from 'prop-types';
import "./Overlay.css";

export default function Overlay({ toggleModal }) {
  return (
    <div className="overlay" onClick={toggleModal}></div>
  );
}

Overlay.propTypes = {
  toggler: PropTypes.func
}