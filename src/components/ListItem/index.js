const ListItem = props => {
  const {details} = props
  const {name, price, currency, imageUrl, calories, description} = details
  return (
    <li>
      <h1>{name}</h1>
      <p>{currency}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{calories}</p>
      <img src={imageUrl} alt={name} />
    </li>
  )
}
export default ListItem
