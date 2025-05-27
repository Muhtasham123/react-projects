import {useEffect,useState} from 'react'
import {DotLoader} from 'react-spinners'

const Instructions = ({id}) => {
     const key = process.env.REACT_APP_API_KEY
    const [instructions,setInstructions] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)
    useEffect(()=>{
        const fetchInstructions = async()=>{
          try{
            const instRes = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${key}`)
    
            if(!instRes.ok){
              throw new Error("Something went wrong...")
            }
            const instResult = await instRes.json()
            const {steps} = instResult[0] || []
            console.log(steps)
            setIsLoading(false)
            setInstructions(steps)
          }catch(err){
            setIsLoading(false)
            setIsError(true)
            console.log(err)
          }
        }
        fetchInstructions()
      },[id])
  return (
    isLoading ? <div style = {{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
        <DotLoader color="#f9ce0e" />
        </div>
        :
        isError ? <h1 style = {{alignSelf:"center",textAlign:"center"}}>Something went wrong...</h1>
        :
    <ol className = "inst-p" type = '1'>
        {instructions.map((item,index)=>{
            return <li key = {index}>{item.step}</li>
        })}
    </ol>
  )
}

export default Instructions