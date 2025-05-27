import {useState,useEffect} from 'react'
import Recipes from '../components/Recipes'
import {useContext} from 'react'
import { AppContext } from '../ContextProvider'

const Save = () => {
  const [saved,setSaved] = useState([])
  const {setIsDroped} = useContext(AppContext)

  useEffect(()=>{
    setIsDroped(false)
    const savedRecipies = localStorage.getItem('savedRecipies')
    const parsedData = savedRecipies ? JSON.parse(savedRecipies) : []

    setSaved(parsedData)
  },[])
  return (
    <main className = "main">
      {
      saved.length === 0 ?
      <h1 style = {{textAlign:"center"}}>No Saved Recipies</h1>
      :
      <section>
        {
          saved.map((item,index)=>{
            return <Recipes key = {index} item = {item} display = {"block"} setSaved = {setSaved}/>
          })
        }
      </section>
      }
    </main>
  )
}

export default Save