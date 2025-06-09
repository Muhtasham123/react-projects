import Form from "../components/Form"
import { useRef,useEffect } from "react"
import { useParams } from "react-router-dom"
import {useNavigate} from 'react-router-dom'

const JobFormLogic = ({mode}) => {
    const titleRef = useRef()
    const dateRef = useRef()
    const companyRef = useRef()
    const statusRef = useRef()
    const typeRef = useRef()
    const {id} = useParams()
    const navigate = useNavigate()

    
    useEffect(()=>{
        if (mode === "edit") {
          const job = JSON.parse(localStorage.getItem("jobs")).find((job) => id == job.id)

          if(job){
            const {title,date,company,status,type} = job
            titleRef.current.value = title
            dateRef.current.value = date
            companyRef.current.value = company
            statusRef.current.value = status
            typeRef.current.value = type
          }
          else{
            console.log("Job not found")
          }
        }
    },[id,mode])

    
    const handleSubmit = (e)=>{
      e.preventDefault()
      if (!titleRef.current.value
         || !dateRef.current.value
         || !companyRef.current.value 
         || !statusRef.current.value 
         || !typeRef.current.value) {
        console.log("All fields are required")
        return
      }
      let jobs = JSON.parse(localStorage.getItem('jobs') || "[]")
  
      const newJob = {
        id : mode === "edit" ? id : jobs.length,
        title: titleRef.current.value,
        date : dateRef.current.value,
        company: companyRef.current.value,
        status : statusRef.current.value,
        type : typeRef.current.value
      }
      if(mode === "edit"){
        jobs = jobs.map((job)=>{
          if(job.id == id)return newJob
          return job;
        })
      }
      else{
        jobs = [newJob, ...jobs]
      }

      localStorage.setItem('jobs',JSON.stringify(jobs))
  
      titleRef.current.value = ""
      dateRef.current.value = ""
      companyRef.current.value = ""
      navigate('/')
    }
  return (
    <Form handleSubmit = {handleSubmit} title = {mode === "edit" ? "Edit job":"Add job"} refs = {{titleRef,dateRef,companyRef,statusRef,typeRef}}></Form>
  )
}

export default JobFormLogic
