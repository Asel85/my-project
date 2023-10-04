import React from 'react'
import "./style.scss"

const CartFooter = ({total}) => {
  const {count, price} = total;
  return (
    <footer className="cart-footer">
        <div className="cart-footer__count">{count} elements</div>
        <div className="cart-footer__price">{price} rub.</div>
    </footer>
  )
}

export default CartFooter
