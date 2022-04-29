import React from "react";
import "./styles.scss";
import { FaShoppingCart } from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemsCount,
} from "../../../redux/selector/cart";

const CartCountButton = ({ cartCount }) => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <Link
      to='/cart'
      state={{ prevPage: pathName }}
      className="btnCartCount"
    >
      <span className="btnCartCount__number">
        {cartCount >= 100 ? "99+" : cartCount}{" "}
      </span>
      <FaShoppingCart />
    </Link>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartCountButton);
