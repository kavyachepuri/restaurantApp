const RepositoryItem = props => {
  const {details, updatePositive, updateNegative} = props
  const {
    dishName,
    dishAvailability,
    dishCurrency,
    dishPrice,
    dishImage,
    dishCalories,
    dishDescription,
  } = details

  const onClickPositive = () => {
    updatePositive()
  }

  const onClickNegative = () => {
    updateNegative()
  }
  return (
    <div>
      <h1>{dishName}</h1>
      <p>{dishAvailability}</p>
      <p>{dishCurrency}</p>
      <p>{dishDescription}</p>
      <p>{dishCalories}</p>
      <p>{dishPrice}</p>
      <img src={dishImage} alt={dishName} />
      <button type="button" onClick={onClickPositive}>
        +
      </button>
      <button type="button" onClick={onClickNegative}>
        -
      </button>
    </div>
  )
}
export default RepositoryItem
