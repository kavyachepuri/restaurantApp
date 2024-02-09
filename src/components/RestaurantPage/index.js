import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MenuCategory from '../MenuCategory'
import MenuItems from '../MenuItems'
import './index.css'
import Header from '../Header'

const dishesData = [
  {
    category: 'Salads and Soup',
    addonCat: [
      {
        addon_category: 'Spicy/Non-Spicy',
        addon_category_id: '104',
        addon_selection: 0,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000001&menuAddonCat=104&menuAddonselc=0&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000032',
            dish_name: 'Non Spicy',
            dish_price: 25,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000025.jpg',
            dish_currency: 'SAR',
            dish_calories: 15,
            dish_description: 'Non Spicy',
            dish_Availability: true,
            dish_Type: 1,
          },
        ],
      },
      {
        addon_category: 'Add On',
        addon_category_id: '101',
        addon_selection: 1,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000001&menuAddonCat=101&menuAddonselc=1&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000020',
            dish_name: 'fried onions',
            dish_price: 15,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000020.jpg',
            dish_currency: 'SAR',
            dish_calories: 10,
            dish_description: 'fried onions',
            dish_Availability: true,
            dish_Type: 2,
          },
        ],
      },
    ],
    dishAvailability: true,
    dishType: 2,
    dishCalories: 15,
    dishCurrency: 'SAR',
    dishDescription:
      'Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette',
    dishId: '100000001',
    dishImage: 'https://i.imgur.com/PoJfqsD.jpg',
    dishName: 'Spinach Salad',
    dishPrice: 7.95,
    quantity: 0,
  },
  {
    category: 'Salads and Soup',
    addonCat: [],
    dishAvailability: true,
    dishType: 1,
    dishCalories: 30,
    dishCurrency: 'SAR',
    dishDescription: 'with clams, scallops, and shrimp,',
    dishId: '100000003',
    dishImage: 'https://i.imgur.com/l3PKuH0.jpg',
    dishName: 'Traditional New England Seafood Chowder',
    dishPrice: 12,
    quantity: 0,
  },
  {
    category: 'Salads and Soup',
    addonCat: [],
    dishAvailability: true,
    dishType: 2,
    dishCalories: 30,
    dishCurrency: 'SAR',
    dishDescription: 'Flour Mixed with fresh green leafy vegetables',
    dishId: '100000004',
    dishImage: 'https://i.imgur.com/AkHXoag.jpg',
    dishName: 'Salad Bar Soup',
    dishPrice: 5,
    quantity: 0,
  },
  {
    category: 'Salads and Soup',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 30,
    dishCurrency: 'SAR',
    dishDescription: 'fresh as home-made chicken-soup',
    dishId: '100000005',
    dishImage: 'https://i.imgur.com/PorTefm.jpg',
    dishName: 'chicken-soup',
    dishPrice: 14.89,
    quantity: 0,
  },
  {
    category: 'Salads and Soup',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 25,
    dishCurrency: 'SAR',
    dishDescription: 'One-Pot-Vegetarian-Orzo-Vegetable-Soup',
    dishId: '100000006',
    dishImage: 'https://i.imgur.com/GebmClM.jpg',
    dishName: 'One-Pot-Vegetarian',
    dishPrice: 22,
    quantity: 0,
  },
  {
    category: 'Salads and Soup',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 45,
    dishCurrency: 'SAR',
    dishDescription:
      'wholesomeyum_low-carb-chicken-soup-with-spaghetti-squash-paleo-gluten-free.jpg',
    dishId: '100000007',
    dishImage: 'https://i.imgur.com/y9vjbsn.jpg',
    dishName: 'low-carb-chicken-soup',
    dishPrice: 25,
    quantity: 0,
  },
  {
    category: 'From The Barnyard',
    addonCat: [
      {
        addon_category: 'Add On',
        addon_category_id: '101',
        addon_selection: 1,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000008&menuAddonCat=101&menuAddonselc=1&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000002',
            dish_name: 'Lobster Bisque',
            dish_price: 10,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/1010000001/Item/Items/100000002.jpg',
            dish_currency: 'SAR',
            dish_calories: 19,
            dish_description:
              'Fresh minced lobster in a thick, creamy broth with a touch of sherry',
            dish_Availability: true,
            dish_Type: 1,
          },
          {
            dish_id: '100000033',
            dish_name: 'eggs',
            dish_price: 0,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000033.png',
            dish_currency: 'SAR',
            dish_calories: 345,
            dish_description: 'qqqq',
            dish_Availability: true,
            dish_Type: 1,
          },
        ],
      },
    ],
    dishAvailability: true,
    dishType: 1,
    dishCalories: 50,
    dishCurrency: 'SAR',
    dishDescription:
      'A 6 oz tenderloin wrapped in bacon and served with pureed yukon gold potatoes and haricots verts',
    dishId: '100000008',
    dishImage: 'https://i.imgur.com/nepBV8D.jpg',
    dishName: 'Traditional Filet Mignon',
    dishPrice: 24,
    quantity: 0,
  },
  {
    category: 'From The Barnyard',
    addonCat: [],
    dishAvailability: true,
    dishType: 1,
    dishCalories: 110,
    dishCurrency: 'SAR',
    dishDescription:
      'Tenderloin tips, sautéed with bacon and mushrooms and finished with a bourbon-BBQ sauce',
    dishId: '100000009',
    dishImage: 'https://i.imgur.com/Kim2jDa.jpg',
    dishName: 'Bacon Bourbon Tenderloin Tips',
    dishPrice: 16,
    quantity: 0,
  },
  {
    category: 'From The Barnyard',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 200,
    dishCurrency: 'SAR',
    dishDescription:
      'Thick, hand-cut prime rib, grilled to order, served with a baked potato and seasonal vegetable medley',
    dishId: '100000010',
    dishImage: 'https://i.imgur.com/ix11VUq.jpg',
    dishName: 'Rustlers Ribeye',
    dishPrice: 18,
    quantity: 0,
  },
  {
    category: 'From The Barnyard',
    addonCat: [],
    dishAvailability: true,
    dishType: 1,
    dishCalories: 250,
    dishCurrency: 'SAR',
    dishDescription:
      'A grilled, queen-cut ribeye served with shrimp and scallop alfredo,',
    dishId: '100000011',
    dishImage: 'https://i.imgur.com/KvAGbZR.jpg',
    dishName: 'Surf and Turf',
    dishPrice: 17,
    quantity: 0,
  },
  {
    category: 'From The Barnyard',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 500,
    dishCurrency: 'SAR',
    dishDescription:
      'Slow roasted pork loin finished with a portabella demi-glace. Served with marrow-scented couscous and wilted kale',
    dishId: '100000012',
    dishImage: 'https://i.imgur.com/qbZRVH5.jpg',
    dishName: 'Roast Pork Loin',
    dishPrice: 23,
    quantity: 0,
  },
  {
    category: 'From The Barnyard',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 320,
    dishCurrency: 'SAR',
    dishDescription:
      'Tender veal cutlets sautéed with fresh sage and prosciutto. Finished in the oven with mozzarella and served atop creamy asiago linguini,',
    dishId: '100000014',
    dishImage: 'https://i.imgur.com/7bp5AEW.jpg',
    dishName: 'Veal Saltimbocca',
    dishPrice: 12,
    quantity: 0,
  },
  {
    category: 'From the Hen House',
    addonCat: [],
    dishAvailability: true,
    dishType: 1,
    dishCalories: 75,
    dishCurrency: 'SAR',
    dishDescription:
      'Boneless chicken breast sautéed with fresh sage and prosciutto. Finished in the oven with mozzarella and served atop creamy asiago linguini',
    dishId: '100000016',
    dishImage: 'https://i.imgur.com/RX9onWx.jpg',
    dishName: 'A.D.’s Chicken Saltimbocca',
    dishPrice: 22,
    quantity: 0,
  },
  {
    category: 'From the Hen House',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 80,
    dishCurrency: 'SAR',
    dishDescription:
      'Boneless chicken breast sautéed with mushrooms, spinach, artichoke hearts, fire-roasted red peppers, and sun-dried tomatoes. Finished with a chipotle-chevre sauce',
    dishId: '100000017',
    dishImage: 'https://i.imgur.com/J50jPyH.jpg',
    dishName: 'Emeril’s Chicken',
    dishPrice: 15,
    quantity: 0,
  },
  {
    category: 'Fresh From The Sea',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 150,
    dishCurrency: 'SAR',
    dishDescription:
      'Fresh haddock, sea scallops, gulf shrimp, and chef’s choice of ravioli tossed in your choice of sauce. With garlic and white wine',
    dishId: '100000018',
    dishImage: 'https://i.imgur.com/1QaHAnZ.jpg',
    dishName: 'Seafood Sauté or Alfredo',
    dishPrice: 25,
    quantity: 0,
  },
  {
    category: 'Fresh From The Sea',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 230,
    dishCurrency: 'SAR',
    dishDescription:
      'Fresh haddock, gulf shrimp, and sea scallops sautéed with fresh tomatoes, basil, and garlic, finished with fresh mozzarella',
    dishId: '100000019',
    dishImage: 'https://i.imgur.com/Ur5Iz3t.jpg',
    dishName: 'Sautéed Seafood Caprese',
    dishPrice: 23.5,
    quantity: 0,
  },
  {
    category: 'Biryani',
    addonCat: [],
    dishAvailability: true,
    dishType: 1,
    dishCalories: 150,
    dishCurrency: 'SAR',
    dishDescription:
      'It skips nothing but half-boiled rice layered with fried onions, mint, cooked meat and cooked dum style.',
    dishId: '100000013',
    dishImage: 'https://i.imgur.com/JWTruwi.jpg',
    dishName: 'Hyderabadi Biryani',
    dishPrice: 11,
    quantity: 0,
  },
  {
    category: 'Biryani',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 120,
    dishCurrency: 'SAR',
    dishDescription:
      'Cook up a storm by combining minced lamb with aromatic spices and crunchy nuts. Keema biryani is the delicious amalgamation of rice with aromatic spices and minced meat, dry fruits and rose water that is a delight to relish on',
    dishId: '100000015',
    dishImage: 'https://i.imgur.com/6USbiXM.jpg',
    dishName: 'Keema Biryani',
    dishPrice: 21,
    quantity: 0,
  },
  {
    category: 'Biryani',
    addonCat: [],
    dishAvailability: false,
    dishType: 1,
    dishCalories: 222,
    dishCurrency: 'SAR',
    dishDescription: 'sss',
    dishId: '100000028',
    dishImage: 'https://i.imgur.com/RVCWszh.jpg',
    dishName: 'gpl',
    dishPrice: 36,
    quantity: 0,
  },
  {
    category: 'Fast Food',
    addonCat: [
      {
        addon_category: 'Size',
        addon_category_id: '102',
        addon_selection: 0,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000026&menuAddonCat=102&menuAddonselc=0&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000024',
            dish_name: 'Small',
            dish_price: 80,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000024.jpg',
            dish_currency: 'SAR',
            dish_calories: 610,
            dish_description: 'Small',
            dish_Availability: true,
            dish_Type: 1,
          },
          {
            dish_id: '100000025',
            dish_name: 'Large',
            dish_price: 100,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000025.jpg',
            dish_currency: 'SAR',
            dish_calories: 610,
            dish_description: 'Large',
            dish_Availability: true,
            dish_Type: 1,
          },
        ],
      },
      {
        addon_category: 'Add On',
        addon_category_id: '101',
        addon_selection: 1,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000026&menuAddonCat=101&menuAddonselc=1&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000020',
            dish_name: 'fried onions',
            dish_price: 10,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000020.jpg',
            dish_currency: 'SAR',
            dish_calories: 10,
            dish_description: 'fried onions',
            dish_Availability: true,
            dish_Type: 2,
          },
          {
            dish_id: '100000021',
            dish_name: 'Swiss cheese',
            dish_price: 13,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000021.jpg',
            dish_currency: 'SAR',
            dish_calories: 30,
            dish_description: 'Swiss cheese',
            dish_Availability: true,
            dish_Type: 2,
          },
          {
            dish_id: '100000022',
            dish_name: 'sauce',
            dish_price: 15,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000022.jpg',
            dish_currency: 'SAR',
            dish_calories: 50,
            dish_description: 'sauce',
            dish_Availability: true,
            dish_Type: 2,
          },
          {
            dish_id: '100000023',
            dish_name: 'Honey mustard',
            dish_price: 20,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000023.jpg',
            dish_currency: 'SAR',
            dish_calories: 100,
            dish_description: 'Honey mustard',
            dish_Availability: true,
            dish_Type: 2,
          },
        ],
      },
      {
        addon_category: 'Remove',
        addon_category_id: '103',
        addon_selection: 2,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000026&menuAddonCat=103&menuAddonselc=2&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000022',
            dish_name: 'sauce',
            dish_price: 2,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000022.jpg',
            dish_currency: 'SAR',
            dish_calories: 50,
            dish_description: 'sauce',
            dish_Availability: true,
            dish_Type: 2,
          },
        ],
      },
    ],
    dishAvailability: true,
    dishType: 1,
    dishCalories: 610,
    dishCurrency: 'SAR',
    dishDescription: 'Burger',
    dishId: '100000026',
    dishImage: 'https://i.imgur.com/7hmYZ5o.jpg',
    dishName: 'Burger',
    dishPrice: 30,
    quantity: 0,
  },
  {
    category: 'Fast Food',
    addonCat: [
      {
        addon_category: 'Size',
        addon_category_id: '102',
        addon_selection: 0,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000027&menuAddonCat=102&menuAddonselc=0&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000030',
            dish_name: 'Medium',
            dish_price: 35,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000025.jpg',
            dish_currency: 'SAR',
            dish_calories: 20,
            dish_description: 'Medium',
            dish_Availability: true,
            dish_Type: 1,
          },
        ],
      },
      {
        addon_category: 'Spicy/Non-Spicy',
        addon_category_id: '104',
        addon_selection: 0,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000027&menuAddonCat=104&menuAddonselc=0&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000031',
            dish_name: 'Spicy',
            dish_price: 10,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000025.jpg',
            dish_currency: 'SAR',
            dish_calories: 20,
            dish_description: 'Spicy',
            dish_Availability: true,
            dish_Type: 1,
          },
          {
            dish_id: '100000032',
            dish_name: 'Non Spicy',
            dish_price: 8,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000025.jpg',
            dish_currency: 'SAR',
            dish_calories: 20,
            dish_description: 'Non Spicy',
            dish_Availability: true,
            dish_Type: 1,
          },
        ],
      },
      {
        addon_category: 'Add On',
        addon_category_id: '101',
        addon_selection: 1,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000027&menuAddonCat=101&menuAddonselc=1&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000020',
            dish_name: 'fried onions',
            dish_price: 5,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000020.jpg',
            dish_currency: 'SAR',
            dish_calories: 10,
            dish_description: 'fried onions',
            dish_Availability: true,
            dish_Type: 2,
          },
          {
            dish_id: '100000021',
            dish_name: 'Swiss cheese',
            dish_price: 7,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000021.jpg',
            dish_currency: 'SAR',
            dish_calories: 30,
            dish_description: 'Swiss cheese',
            dish_Availability: true,
            dish_Type: 2,
          },
        ],
      },
      {
        addon_category: 'Remove',
        addon_category_id: '103',
        addon_selection: 2,
        nexturl:
          'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000027&menuAddonCat=103&menuAddonselc=2&limit=10&offset=20&lang=en',
        addons: [
          {
            dish_id: '100000022',
            dish_name: 'sauce',
            dish_price: 3,
            dish_image:
              'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000022.jpg',
            dish_currency: 'SAR',
            dish_calories: 50,
            dish_description: 'sauce',
            dish_Availability: true,
            dish_Type: 2,
          },
        ],
      },
    ],
    dishAvailability: true,
    dishType: 2,
    dishCalories: 20,
    dishCurrency: 'SAR',
    dishDescription: 'pizza',
    dishId: '100000027',
    dishImage: 'https://i.imgur.com/pr3uLur.png',
    dishName: 'Pizza',
    dishPrice: 50,
    quantity: 0,
  },
  {
    category: 'Fast Food',
    addonCat: [],
    dishAvailability: true,
    dishType: 3,
    dishCalories: 225,
    dishCurrency: 'SAR',
    dishDescription: 'Mexican Street Tacos',
    dishId: '100000029',
    dishImage: 'https://i.imgur.com/yz5PpNh.jpg',
    dishName: 'Tacos',
    dishPrice: 25,
    quantity: 0,
  },
]

const categoryItems = [
  {
    id: 'Salads and Soup',
    value: 'Salads and Soup',
  },
  {
    id: 'From The Barnyard',
    value: 'From The Barnyard',
  },
  {
    id: 'From the Hen House',
    value: 'From the Hen House',
  },
  {
    id: 'Fresh From The Sea',
    value: 'Fresh From The Sea',
  },
  {
    id: 'Biryani',
    value: 'Biryani',
  },
  {
    id: 'Fast Food',
    value: 'Fast Food',
  },
]

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

class RestaurantPage extends Component {
  state = {
    activeTab: 'Salads and Soup',
    categoryList: categoryItems,
    categoryItem: dishesData,
    currentApiStatus: apiStatus.success,
    cartCount: 0,
  }

  componentDidMount() {
    this.getData()
  }

  onMenuItemClick = id => {
    this.setState({activeTab: id})
  }

  getData = async () => {
    // this.setState({currentApiStatus: apiStatus.loading})
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const menuList = data[0].table_menu_list.map(eachItem => ({
        id: eachItem.menu_category,
        value: eachItem.menu_category,
      }))
      // console.log(menuList)
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

      /* this.setState({
              activeTab: menuList[0].id,
              categoryList: menuList,
              categoryItem: updatedData,
              currentApiStatus: apiStatus.success,
            }) */
    }
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
        if (eachItem.quantity > 0) {
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
      <>
        <Header />
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
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="Oval" color="skyblue" height="40" width="40" />
    </div>
  )

  render() {
    const {currentApiStatus} = this.state
    return (
      <div className="container">
        {currentApiStatus === apiStatus.loading && <h1>UNI Resto Cafe</h1>}
        {currentApiStatus === apiStatus.loading && this.renderLoadingView()}
        {currentApiStatus === apiStatus.success && this.renderSuccessView()}
      </div>
    )
  }
}

export default RestaurantPage
