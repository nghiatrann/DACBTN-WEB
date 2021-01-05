import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function BreadcrumbCustom(props) {
  const { item, active } = props;
  return (
    <Breadcrumb>
      <div className="container d-flex">
        <BreadcrumbItem>
          <Link to="/">Trang Chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/shops">Sản Phẩm</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Giỏ Hàng</BreadcrumbItem>
      </div>
    </Breadcrumb>
  );
}

export default BreadcrumbCustom;
