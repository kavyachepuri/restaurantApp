import {Component} from 'react'
import {BsCart3} from 'react-icons/bs'
import MenuFilterList from '../MenuFilterList'
import ListItem from '../ListItem'

const MenuFiltersData = [
  {menu_category: 'Salads and Soup', menu_category_id: '11'},
  {menu_category: 'From The Barnyard', menu_category_id: '12'},
  {menu_category: 'From the Hen House', menu_category_id: '13'},
  {menu_category: 'Fresh From The Sea', menu_category_id: '14'},
  {menu_category: 'Biryani', menu_category_id: '15'},
  {menu_category: 'Fast Food', menu_category_id: '17'},
]

class UniRestoCafe extends Component {
  state = {
    activeFilterId: MenuFiltersData[0].menu_category_id,
    menuListItems: [],
  }

  componentDidMount() {
    this.getMenuItems()
  }

  getMenuItems = async () => {
    const {activeFilterId} = this.state
    
    const url = `https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc?menu_category_id=${activeFilterId}`
    const response = await fetch(url)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.category_dishes.map(eachItem => ({
        id: eachItem.dish_id,
        name: eachItem.dish_name,
        price: eachItem.dish_price,
        imageUrl: eachItem.dish_image,
        currency: eachItem.dish_currency,
        calories: eachItem.dish_calories,
        description: eachItem.dish_description,
      }))
      this.setState({menuListItems: updatedData})
    }
  }

  updateMenuCategoryId = id => {
    this.setState({activeFilterId: id}, this.getMenuItems)
  }

  renderMenuFilterList = () => (
    <ul>
      {MenuFiltersData.map(eachMenu => (
        <MenuFilterList
          key={eachMenu.id}
          details={eachMenu}
          updateMenuCategoryId={this.updateMenuCategoryId}
        />
      ))}
    </ul>
  )

  renderListItem = () => {
    const {menuListItems} = this.state
    return (
      <ul>
        {menuListItems.map(eachItem => (
          <ListItem details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    return(
    <div>
      <div>
        <h1>UNI Resto Cafe</h1>
        <h1>My Orders</h1>
        <BsCart3 />
      </div>
        {this.renderMenuFilterList()}
        {this.renderListItem()}
    </div>
    )
  }
export default UniRestoCafe