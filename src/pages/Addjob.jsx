import { useEffect } from "react"
import JobFormLogic from "../components/JobFormLogic"

const Addjob = ({setIsOpen}) => {
  useEffect(()=>{
    setIsOpen(false)
  },[])
  return <JobFormLogic mode={"add"}></JobFormLogic>
}

export default Addjob