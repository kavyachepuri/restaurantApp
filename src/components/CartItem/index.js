import CartContext from '../../Context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {
        dishId,
        dishName,
        quantity,
        dishPrice,
        dishImage,
        dishCurrency,
      } = cartItemDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(dishId)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(dishId)
      }
      const onRemoveCartItem = () => {
        removeCartItem(dishId)
      }
      const totalPrice = dishPrice * quantity

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={dishImage} alt={dishName} />
          <p className="cart-product-title">{dishName}</p>
          <div className="cart-quantity-container">
            <button
              type="button"
              className="cart-sign-button"
              onClick={onClickDecrement}
            >
              -
            </button>
            <p className="cart-sign">{quantity}</p>
            <button
              type="button"
              className="cart-sign-button"
              onClick={onClickIncrement}
            >
              +
            </button>
          </div>
          <p className="cart-total-price">
            {dishCurrency} {totalPrice}
          </p>
          <button
            className="remove-btn"
            type="button"
            onClick={onRemoveCartItem}
          >
            Remove
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
