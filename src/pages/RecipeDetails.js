import {useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import  {AppContext}  from '../ContextProvider'
import Ingredients from '../components/Ingredients'
import Instructions from '../components/Instructions'
import {DotLoader} from 'react-spinners'
import Table from '../components/Table'
import {toast} from 'react-toastify'
import Error from './Error'


const RecipeDetails = () => {
  const key = process.env.REACT_APP_API_KEY
  const {id} = useParams()
  const [ingredients,setIngredients] = useState([])
  const [nutrients,setNutrients] = useState([])
  const [savingData,setSavingData] = useState({})
  const {isLoading,isError,setIsLoading,setIsError,setIsDroped} = useContext(AppContext)

  useEffect(()=>{
    const fetchNutrition = async()=>{
      try{
        setIsDroped(false)
        setIsLoading(true)
        setIsError(false)
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`)

        if(!res.ok){
          throw new Error("Something went wrong...")
        }
        const result = await res.json()
        const {nutrition:{ingredients,nutrients},image,title} = result
        setIsLoading(false)
        setIngredients(ingredients)
        setNutrients(nutrients)
        setSavingData({id,image,title})
        
        console.log(result)
      }catch(err){
        setIsLoading(false)
        setIsError(true)
        console.log(err)
      }
    }
    fetchNutrition()
  },[id])

  const saveRecipe = ()=>{
    const savedRecipies = localStorage.getItem('savedRecipies')
    const parsedData = savedRecipies ? JSON.parse(savedRecipies) : []

    const isNotAlreadySaved = parsedData.every(({id})=>id !== savingData.id)

    if(isNotAlreadySaved){
      const finalData = [savingData,...parsedData]
      localStorage.setItem('savedRecipies',JSON.stringify(finalData))
      toast.success("Recipe saved successfully")
      return
    }

    toast.error("Recipe already exists in saved recipes")
  }

  return (
    <main className = "main" >
      {
      isLoading ? <div style = {{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
      <DotLoader color="#f9ce0e" />
      </div>
      :
      isError ? <Error/>
      :
      <>
        <div className = "save-btn-cont">
          <button onClick = {saveRecipe} className = "save-btn font-w-s c-w bg-color t-d-none hover-e" style = {{padding:"10px",borderRadius:"8px"}}>Save Recipe</button>
        </div>

        <Ingredients ingredients = {ingredients}/>
        <hr className = "line"></hr>
      
        <h1>Instructions : </h1>
        <article>
          <Instructions id = {id}/>
        </article>

        <hr  className = "line"></hr>
        <Table nutrients = {nutrients}/>
      </>
    }
  </main>
  
  )
}

export default RecipeDetails