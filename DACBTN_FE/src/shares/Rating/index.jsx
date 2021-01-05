import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Rating(props) {
  return (
    <ul className="rating-stars">
      <li style={{ width: "90%" /* Sao*100/5 */ }} className="stars-active">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </li>
      <li>
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </li>
    </ul>
  );
}

Rating.propTypes = {};

export default Rating;
