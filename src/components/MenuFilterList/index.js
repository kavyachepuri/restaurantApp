const MenuFilterList = props => {
  const {details} = props
  const {category, updateMenuCategoryId} = details
  const onClickMenuCategory = id => {
    updateMenuCategoryId(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickMenuCategory}>
        {category}
      </button>
    </li>
  )
}

export default MenuFilterList
