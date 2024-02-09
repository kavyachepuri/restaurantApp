import './index.css'

const MenuCategory = props => {
  const {details, onMenuItemClick, isActive} = props
  const {value, id} = details
  const onCategoryClick = () => {
    onMenuItemClick(id)
  }
  return (
    <button
      type="button"
      className={isActive ? 'active-category-button' : 'category-button'}
      onClick={onCategoryClick}
    >
      {value}
    </button>
  )
}

export default MenuCategory
