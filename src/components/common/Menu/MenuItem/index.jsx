import React from "react";
import "./styles.scss";
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartAddItem, cartRemoveItem } from "../../../../redux/actions/cart";
import {
  selectCartItemsCount,
  selectCartItems,
} from "../../../../redux/selector/cart";

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, name, img, info, price } = item;
  const clickHandleCartAddItem = () => {
    cartAddItem(item);
  };

  const clickHandleCartRemoveItem = () => {
    cartRemoveItem(item);
  };

  const hangleItemQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find(cartItem=> cartItem.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  }

  return (
    <div className="item">
      <img className="item-img" src={img} alt="item" />
      <div className="item-head__descr">
        <p className="item-head__descr-name">{name}</p>
        <p className="item-head__descr-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-footer__descr">
        <span className="item-footer__descr-price">${price}</span>
        <ButtonAddRemoveItem
          quantity={hangleItemQuantity()}
          handleAddItem={clickHandleCartAddItem}
          handleRemoveItem={clickHandleCartRemoveItem}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
