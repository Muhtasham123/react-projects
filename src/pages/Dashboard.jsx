import {useState,useEffect,useRef,useContext} from 'react'
import Job from "../components/Job"

const Dashboard = ({setIsOpen}) => {
  const [jobs,setJobs] = useState([])
  const [translate, setTranslate] = useState(1)
  const [status,setStatus] = useState("all")
  const [type, setType] = useState("all")

  const handleChange = (e) => {
    const allJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const { name, value } = e.target;

    const updatedStatus = name === "status" ? value : status;
    const updatedType = name === "type" ? value : type;

    setStatus(updatedStatus);
    setType(updatedType);

    const filteredJobs = allJobs.filter(
      (job) =>
        (updatedStatus === "all" || job.status === updatedStatus) &&
        (updatedType === "all" || job.type === updatedType)
    );

    setJobs(filteredJobs);
  };
  

  useEffect(()=>{
    const savedJobs = JSON.parse(localStorage.getItem('jobs'))
    setJobs(savedJobs)
    setTranslate(0)
    setIsOpen(false)
  },[])
  return (
    <div className = "w-full h-full overflow-x-hidden">
      <form className={`flex flex-wrap flex-col justify-between md:flex-row p-5 w-full bg-gradient-to-l from-gray-800 to-black rounded-lg shadow-lg mt-30 ${translate === 1 ? 'slide-x' : 'slide-none'}`}>

        <div className={`m-4 ${translate === 1 ? 'slide-y' : 'slide-none'}`}>
          <label className="text-white font-semibold text-lg">Filter by status</label><br></br>
          <select onChange = {(e)=>{handleChange(e)}} value = {status} className="input w-70" name = "status">
            <option value = "interview">interview</option>
            <option value="declined">declined</option>
            <option value = "pending">pending</option>
            <option value="all">all</option>
          </select>
        </div>

        <div className={`m-4 ${translate === 1 ? 'slide-y' : 'slide-none'}`}>
          <label className="text-white font-semibold text-lg">Filter by type</label><br></br>
          <select onChange={(e) => { handleChange(e) }}  value = {type} className="input w-70" name = "type">
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="internship">internship</option>
            <option value="all">all</option>
          </select>
        </div>
        </form>

        <div className = "w-full flex flex-wrap flex-col md:flex-row justify-between">
          {
          (jobs.length == 0) ?
            <h1 className = "w-full font-extrabold text-3xl text-center self-center">No saved jobs</h1>
            :
            jobs.map((job,index)=>{
              return <Job key = {index} job = {job} setJobs = {setJobs}></Job>
            })
          }
        </div>
    </div>
  )
}

export default Dashboard
