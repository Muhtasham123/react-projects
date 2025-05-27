import {useContext, useEffect,useRef} from 'react'
import { AppContext } from '../ContextProvider'
import Recipes from '../components/Recipes'
import {DotLoader} from 'react-spinners'
import Error from './Error'

const Home = () => {
  const {data,isLoading,isError,searchInput,setSearchInput,setIsDroped} = useContext(AppContext)
  const search = useRef(null)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setSearchInput(search.current.value)
  }

  useEffect(()=>{
    setIsDroped(false)
  },[])
  
  return (
    <main className = "main">
    <form onSubmit = {handleSubmit} style = {{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <input ref = {search} type = "search" placeholder = "Search recipe here" className = "search-bar"></input>
    <button type = "submit" className = "save-btn c-w bg-color hover-e">Search</button>
    </form>
    {
    isLoading ? <div style = {{display:"flex",width:"100%",heihgt:"100%",alignItems:"center",justifyContent:"center"}}>
      <DotLoader color="#f9ce0e" />
      </div>
      :
      isError ? <Error/>
      :
      <section>
        {
          data.map((item,index) =>{
            return <Recipes key = {index} item = {item} display = {"none"}/>
          })
        }
    </section>
    }
  </main>
  )
}

export default Home