import JobFormLogic from "../components/JobFormLogic"
import {useEffect} from 'react'

const Editjob = ({setIsOpen}) => {
    useEffect(()=>{
        setIsOpen(false)
      },[])
    return <JobFormLogic mode = {"edit"}></JobFormLogic>
}

export default Editjob
