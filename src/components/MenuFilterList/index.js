const MenuFilterList = props => {
  const {details, updateFilterList} = props
  const {id, menu} = details
  const onClickFilterItem = () => {
    updateFilterList(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickFilterItem}>
        {menu}
      </button>
    </li>
  )
}
export default MenuFilterList
