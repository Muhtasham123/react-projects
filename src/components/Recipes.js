import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import {toast} from 'react-toastify'

const Recipes = ({item:{image,title,id},display,setSaved}) => {
  const handelDelete = ()=>{
    const savedRecipies = localStorage.getItem('savedRecipies')
    const parsedData = savedRecipies ? JSON.parse(savedRecipies) : []

    const filteredData = parsedData.filter((item)=> item.id !== id)

    setSaved(filteredData)

    localStorage.setItem('savedRecipies',JSON.stringify(filteredData))
    toast.success("Recipe deleted successfully")
  }
  return (
    <section className = "recipe-container font-w-s">
        <div className = "img-cont">
            <img src = {image} alt = "photo"></img>
        </div>
        <p>{title.length > 20 ? `${title.substring(0,30)}...` : title}</p>
        <div className = "viewBtn-cont">
          <Link to = {`/recipe-details/${id}`} className = "c-w bg-color t-d-none hover-e" style = {{padding:"10px",borderRadius:"8px"}}>View Recipe</Link>
        </div>
        <button onClick = {handelDelete} className = "del-btn" style = {{display:display}}>
          <MdDelete />
        </button>
    </section>
  )
}

export default Recipes