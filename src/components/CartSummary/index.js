import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListSum = cartList.reduce((total, eachCartItem) => {
        const subTotal = eachCartItem.price * eachCartItem.quantity
        return total + subTotal
      }, 0)

      return (
        <div className="cart-summary-container">
          <div className="total-order">
            <h1 className="total-order-header">Order Total:</h1>
            <p className="total-order-value">RS {cartListSum}/-</p>
          </div>
          <p className="total-items-count">{cartList.length} items in cart</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
