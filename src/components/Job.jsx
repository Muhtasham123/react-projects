import { FaSuitcase } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useState,useEffect,useContext} from 'react'

const Job = ({job:{id,title,date,status,type,company},setJobs}) => {
  const [translate, setTranslate] = useState(1)

  const handelDelete = (id)=>{
    const jobs = JSON.parse(localStorage.getItem('jobs')) || []

    const newJobs = jobs.filter((item)=> id != item.id)
    localStorage.setItem('jobs',JSON.stringify(newJobs))
    setJobs(newJobs)
  }

  useEffect(()=>{
    setTranslate(0)
  },[])
  return (
    <section className={`${translate === 1 ? 'slidex' : 'slide-none'} md:w-[48%] w-full p-2 shadow-lg mt-10 overflow-x-hidden shadouw-lg bg-gradient-to-br from-black to-gray-800 rounded-lg`}>
        <h1 className = "text-white w-full font-bold text-xl p-4">{title.toUpperCase()}</h1>
        <p className = "text-white font-semibold p-4">{company.toUpperCase()}</p>
        <hr className = "border-white"></hr>
        <div className = "flex flex-wrap justify-between p-4">
            <div className= "text-white flex p-2 items-center space-x-1">
              <FaSuitcase />
              <p>{type}</p>
            </div>
            <div className="text-white flex p-2 space-x-1 items-center">
              <FaCalendarAlt />
              <p>{date}</p>
            </div>
        <div className={`flex p-2 space-x-1 ${status != "interview" ? status != "pending" ? "bg-red-200 border-2 border-red-400 rounded-lg" : "bg-amber-200 border-2 border-amber-400 rounded-lg" : "bg-green-200 border-2 border-green-400 rounded-lg"}`}>
              <p>{status}</p>
            </div>
        </div>

      <div className='flex p-4 space-x-2'>
        <button onClick = {()=>handelDelete(id)}type="button" className="link cursor-pointer text-white font-bold px-5">Delete Job</button>

        <Link className="link text-white font-bold" to={`/edit-job/${id}`}>Edit job</Link>
      </div>      
    </section>
              


        
  )
}

export default Job