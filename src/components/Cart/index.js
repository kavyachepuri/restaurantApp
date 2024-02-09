import CartContext from '../../Context/CartContext'

import Header from '../Header'

import CartItem from '../CartItem'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      return (
        <div className="container">
          <Header />
          <div className="cart-container">
            {cartList.length === 0 ? (
              <div className="cart-empty-view-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                  className="cart-empty-img"
                  alt="cart empty"
                />
              </div>
            ) : (
              <div className="cart-content-container">
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <ul className="cart-list">
                  {cartList.map(eachCartItem => (
                    <CartItem
                      key={eachCartItem.dishId}
                      cartItemDetails={eachCartItem}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
