import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import { Badge } from "reactstrap";

function Product(props) {
  const { product } = props;
  let currentDate = new Date();
  let newDate = new Date();
  newDate.setDate(currentDate.getDate() - 7);
  return (
    <Link to={`/detail/${product.id}`} className="card card-product-grid">
      {new Date(newDate) <= new Date(product.createAt) ? (
        <Badge
          color="danger"
          pill
          style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}
        >
          New
        </Badge>
      ) : null}
      <div className="img img-wrap img-cover">
        <img src={`${product.images[0]}`} alt={`${product.name}`}></img>
      </div>

      <figcaption className="info-wrap">
        <p className="title">{product.name}</p>

        <div className="start mt-1 row">
          <div className="col-6">
            <Rating />
          </div>
          <div className="col-6">
            <small className="text-success">
              <i className="fa fa-clipboard-check" /> {product.quanSold} Đã bán
            </small>
          </div>
        </div>

        <div className="price-wrap mt-2">
          <span className="price mt-1 mr-2">
            {new Intl.NumberFormat("vn-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price - (product.price * product.discount) / 100)}
          </span>
          <del className="price-old">
            {new Intl.NumberFormat("vn-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </del>
        </div>
      </figcaption>
    </Link>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
Product.defaultProps = {
  product: {
    images: [],
  },
};

export default Product;
