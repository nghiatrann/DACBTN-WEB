import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { logout } from "../../actions/user";
import "./style.scss";

function Header(props) {
  const isLogin = useSelector((state) => state.user.isLogin);
  const currentUser = useSelector((state) => state.user.currentUser);
  const categories = useSelector((state) => state.categories);

  const carts = useSelector((state) => state.carts);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  const renderIsLogin = () => {
    return (
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        className="widget-header icontext"
        style={{ cursor: "pointer" }}
      >
        <DropdownToggle tag="div" className="widget-header icontext">
          <img
            src={`${currentUser.avatar}`}
            alt=""
            className="icon icon-sm rounded-circle "
          />
          <div className="text">
            <span className="text-muted">
              Xin Chào&nbsp;{currentUser.name}!
            </span>
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="/profile">Trang Cá Nhân</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/orders-history">Lịch Sử Đặt Hàng</Link>
          </DropdownItem>
          <DropdownItem>
            <div
              onClick={() => {
                dispatch(logout());
              }}
            >
              Đăng xuất
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };
  return (
    <header className="section-header sticky">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-4">
              <Link to="/" className="brand-wrap icontext">
                <img
                  className="icon icon-sm"
                  src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/c1/85/a9/c185a9f7-09a5-94ef-5726-21a9084fde09/source/256x256bb.jpg"
                  alt="MyShopLogo"
                />
                <h5 className="text">UITShop</h5>
              </Link>
            </div>
            <div className="col-lg-6 col-sm-12">
              <form className="search">
                <div className="input-group">
                  <div className="category-wrap">
                    {/* SUA THANH SELECT */}
                    <select className="mr-2 form-control" defaultValue="all">
                      <option value="all">Tất Cả</option>
                      {categories.map((category) => (
                        <option value={`${category.id}`} key={`${category.id}`}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="widgets-wrap float-md-right">
                <div className="widget-header mr-3">
                  <Link
                    to="/cart"
                    className="icon icon-sm rounded-circle border"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </Link>
                  <span className="badge badge-pill badge-danger notify">
                    {carts.length}
                  </span>
                </div>

                {isLogin ? (
                  renderIsLogin()
                ) : (
                  <div className="widget-header icontext">
                    <Link
                      to="/login"
                      className="icon icon-sm rounded-circle border"
                    >
                      <i className="fa fa-user"></i>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

Header.propTypes = {};

export default Header;
