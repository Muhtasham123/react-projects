const Ingredients = ({ingredients}) => {
  return (
    <div className='ing-section'>
        <h1>Ingredients : </h1>
        <ul>
        {
            ingredients.map((ingredient,index) => {
                return <li key = {index}>{ingredient.name},</li>
            })
        }
        </ul>
    </div>
  )
}
export default Ingredients