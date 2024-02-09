import CartContext from '../../Context/CartContext'
import './index.css'

const MenuItems = props => {
  const {details, onQuantityIncrease, onQuantityDecrease} = props
  const {
    addonCat,
    dishAvailability,
    dishType,
    dishCalories,
    dishCurrency,
    dishDescription,
    dishImage,
    dishName,
    dishPrice,
    quantity,
    dishId,
  } = details

  const onIncrement = () => {
    onQuantityIncrease(dishId)
  }

  const onDecrement = () => {
    onQuantityDecrease(dishId)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {addCartItem} = value
        const onAddToCartButtonClick = () => {
          addCartItem(details)
        }
        return (
          <li className="menu-list-item">
            <div className="dish-type">
              <div className={dishType === 2 ? 'green-color' : 'red-color'}>
                <p className={dishType === 2 ? 'green-span' : 'red-span'}>o</p>
              </div>
              <div>
                <h1 className="heading">{dishName}</h1>
                <p>
                  {dishCurrency} {dishPrice}
                </p>
                <p className="description">{dishDescription}</p>
                {dishAvailability ? (
                  <div className="add-item">
                    <button
                      type="button"
                      className="sign-button"
                      onClick={onDecrement}
                    >
                      -
                    </button>
                    <p className="sign">{quantity}</p>
                    <button
                      type="button"
                      className="sign-button"
                      onClick={onIncrement}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <p className="availability">Not available</p>
                )}
                {quantity > 0 && (
                  <button
                    type="button"
                    className="logout-button"
                    onClick={onAddToCartButtonClick}
                  >
                    ADD TO CART
                  </button>
                )}
                {addonCat.length > 0 && (
                  <p className="customization">Customizations available</p>
                )}
              </div>
            </div>
            <div className="calories-container">
              <p className="calories">{dishCalories} calories</p>
              <img src={dishImage} alt={dishName} className="image" />
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default MenuItems
