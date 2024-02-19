import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import MenuCategory from '../MenuCategory'
import MenuItems from '../MenuItems'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

class RestaurantPage extends Component {
  state = {
    activeTab: '',
    categoryList: [],
    categoryItem: [],
    currentApiStatus: apiStatus.initial,
    cartCount: 0,
  }

  componentDidMount() {
    this.getData()
  }

  onMenuItemClick = id => {
    this.setState({activeTab: id})
  }

  getData = async () => {
    this.setState({currentApiStatus: apiStatus.loading})
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(url)
    const data = await response.json()
    const menuList = data[0].table_menu_list.map(eachItem => ({
      id: eachItem.menu_category,
      value: eachItem.menu_category,
    }))
    this.setState({activeTab: menuList[0].id})

    const result = data[0].table_menu_list.map(item =>
      item.category_dishes.map(eachMenu => ({
        category: item.menu_category,
        addonCat: eachMenu.addonCat,
        dishAvailability: eachMenu.dish_Availability,
        dishType: eachMenu.dish_Type,
        dishCalories: eachMenu.dish_calories,
        dishCurrency: eachMenu.dish_currency,
        dishDescription: eachMenu.dish_description,
        dishId: eachMenu.dish_id,
        dishImage: eachMenu.dish_image,
        dishName: eachMenu.dish_name,
        dishPrice: eachMenu.dish_price,
        quantity: 0,
      })),
    )

    let updatedData = []

    result.forEach(element => {
      updatedData = [...updatedData, ...element]
    })

    console.log(updatedData)
    this.setState({
      categoryList: menuList,
      categoryItem: updatedData,
      currentApiStatus: apiStatus.success,
    })
  }

  onQuantityIncrease = id => {
    const {categoryItem} = this.state
    const increasedQuantity = categoryItem.map(eachItem => {
      if (eachItem.dishId === id) {
        return {...eachItem, quantity: eachItem.quantity + 1}
      }
      return eachItem
    })
    this.setState(prevState => ({
      cartCount: prevState.cartCount + 1,
      categoryItem: increasedQuantity,
    }))
  }

  onQuantityDecrease = id => {
    const {categoryItem, cartCount} = this.state
    const decreasedQuantity = categoryItem.map(eachItem => {
      if (eachItem.dishId === id) {
        if (eachItem.quantity > 1) {
          return {...eachItem, quantity: eachItem.quantity - 1}
        }
        return {...eachItem, quantity: 0}
      }
      return eachItem
    })
    if (cartCount > 0) {
      this.setState(prevState => ({
        cartCount: prevState.cartCount - 1,
        categoryItem: decreasedQuantity,
      }))
    } else {
      this.setState({cartCount: 0, categoryItem: decreasedQuantity})
    }
  }

  renderSuccessView = () => {
    const {categoryItem, categoryList, activeTab} = this.state
    const filteredResults = categoryItem.filter(
      Item => Item.category === activeTab,
    )
    return (
      <div>
        <ul className="list-container">
          {categoryList.map(eachList => (
            <MenuCategory
              details={eachList}
              key={eachList.id}
              onMenuItemClick={this.onMenuItemClick}
              isActive={activeTab === eachList.id}
            />
          ))}
        </ul>
        <ul className="item-container">
          {filteredResults.map(eachItem => (
            <MenuItems
              details={eachItem}
              key={eachItem.dishId}
              onQuantityIncrease={this.onQuantityIncrease}
              onQuantityDecrease={this.onQuantityDecrease}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="Oval" color="skyblue" height="40" width="40" />
    </div>
  )

  render() {
    const {currentApiStatus, cartCount} = this.state
    return (
      <div className="container">
        <nav className="navbar">
          <h1>UNI Resto Cafe</h1>
          <div className="cart-container">
            <p className="para">My Orders</p>
            <AiOutlineShoppingCart className="cart" />
            <p className="count">{cartCount}</p>
          </div>
        </nav>
        {currentApiStatus === apiStatus.loading && this.renderLoadingView()}
        {currentApiStatus === apiStatus.success && this.renderSuccessView()}
      </div>
    )
  }
}

export default RestaurantPage
