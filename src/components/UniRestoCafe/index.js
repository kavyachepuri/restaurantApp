import {Component} from 'react'

import MenuFilterList from '../MenuFilterList'
import RepositoryItem from '../RepositoryItem'

const MenuFiltersData = [
  {id: 'SALADS AND SOUPS', menu: 'Salads and Soups'},
  {id: 'FROM THE BARNYARD', menu: 'From The Barnyard'},
  {id: 'FROM THE HEN HOUSE', menu: 'From The Hen House'},
  {id: 'FRESH FROM THE SEA', menu: 'Fresh From The Sea'},
  {id: 'BIRYANI', menu: 'Biryani'},
  {id: 'FAST FOOD', menu: 'Fast Food'},
]

class UniRestoCafe extends Component {
  state = {
    activeMenuFilterId: MenuFiltersData[0].id,
    repositoryList: [],
    count: 0,
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    const {activeMenuFilterId} = this.state
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    // log the data to understand better

    const array = data.map(each => ({
      tableMenuList: each.table_menu_list,
      restaurantName: each.restaurant_name,
    }))

    const totalDetails = array[0]
    // eslint-disable-next-line
    const {tableMenuList, restaurantName} = totalDetails

    const format = tableMenuList.map(each => ({
      categoryDishes: each.category_dishes.map(each1 => ({
        dishId: each1.dish_id,
        dishName: each1.dish_name,
        dishAvailability: each1.dish_Availability,
        dishCurrency: each1.dish_currency,
        dishType: each1.dish_Type,
        dishCalories: each1.dish_calories,
        dishImage: each1.dish_image,
        dishPrice: each1.dish_price,
        dishDescription: each1.dish_description,
        nextUrl: each1.nexturl,
        addonCat: each1.addonCat,
      })),
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
      menuCategoryImage: each.menu_category_image,
      nextUrl: each.nexturl,
    }))

    console.log('format:-->', format)
    // this.setState({total: format})
    const single = format[0]
    const {categoryDishes} = single
    this.setState({repositoryList: categoryDishes})
    // Now, accordingly you can update the state.
  }

  updateFilterList = activeMenuFilterId => {
    this.setState({activeMenuFilterId}, this.getRepositories)
  }

  renderMenuFilterList = () => (
    <ul>
      {MenuFiltersData.map(eachItem => (
        <MenuFilterList
          key={eachItem.id}
          details={eachItem}
          updateFilterList={this.updateFilterList}
        />
      ))}
    </ul>
  )

  updatePositive = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  updateNegative = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  renderRepositoryItem = () => {
    const {repositoryList} = this.state
    return (
      <ul>
        {repositoryList.map(eachItem => (
          <RepositoryItem
            key={eachItem.id}
            details={eachItem}
            updatePositive={this.updatePositive}
            updateNegative={this.updateNegative}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Uni Resto Cafe</h1>
        <p>My Orders</p>
        <p>{count}</p>
        {this.renderMenuFilterList()}
        {this.renderRepositoryItem()}
      </div>
    )
  }
}

export default UniRestoCafe
