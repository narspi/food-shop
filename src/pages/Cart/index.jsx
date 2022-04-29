import React from "react";
import "./styles.scss";
import Logo from "../../components/common/Logo";
import Menu from '../../components/common/Menu';
import Footer from "../../components/common/Footer";
import EmptyCart from "../../components/Cart/EmptyCart";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/selector/cart";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});



export default connect(mapStateToProps)(Cart);
