import{createContext,useState,useEffect} from 'react' 

export const AppContext = createContext()

const ContextProvider = ({children}) => {
  const key = process.env.REACT_APP_API_KEY
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [searchInput,setSearchInput] = useState("")
  const [isDroped,setIsDroped] = useState(false)

  useEffect(()=>{
    const fetchRecipies = async()=>{
      try{
          setIsLoading(true)
          setIsError(false)
          const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${searchInput}&number=100`)
          if(!response.ok){
            throw new Error("Something went wrong")
          }
          const {results} = await response.json()
          setData(results)
          setIsLoading(false)
      }catch(err){
          setIsLoading(false)
          setIsError(true)
          console.log(err)
          return null
      }
    }
    fetchRecipies()
  },[searchInput])

  return (
  <AppContext.Provider value = {{
      data,
      isLoading,
      isError,
      searchInput,
      setSearchInput,
      setIsLoading,
      setIsError,
      isDroped,
      setIsDroped,
    }}>
    {children}
  </AppContext.Provider>
  )
}

export default ContextProvider