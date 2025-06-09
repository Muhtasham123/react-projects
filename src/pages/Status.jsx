import Pie from "../components/Pie"
import Bar from "../components/Bar"
import Line from "../components/Line"
import {useEffect,useState} from 'react'

const Status = ({setIsOpen}) => {
  const [crrYear, setCrrYear] = useState(new Date().getFullYear())

  const handleChange = (e)=>{
    setCrrYear(e.target.value)
  }

  useEffect(()=>{
    setIsOpen(false)
  },[])

  return (
    <div className = "hide-scrollbar w-full mt-10 min-h-screen flex flex-col items-center p-5">
      
      <div className="m-4">
        <label className="text-white font-semibold text-lg">Enter year</label><br></br>
        <input value = {crrYear} onChange = {(e)=>handleChange(e)} className="input" type="number" max = {new Date().getFullYear().toString()}></input>
      </div>

      <div className="md:h-[70vh] h-[80vh] items-center w-full flex justify-center mt-20 p-4 bg-gradient-to-br from-gray-800 to-black">
        <Bar year = {crrYear}></Bar>
      </div>
      
      
      <div className = "h-[70vh] w-full flex justify-center overflow-hidden items-center mt-20 p-4 bg-gradient-to-br from-gray-800 to-black">
        <Pie year={crrYear}></Pie>
      </div>
      
      

      <div className="md:h-[70vh] h-[80vh] w-full items-center flex justify-center mt-20 p-4 bg-gradient-to-br from-gray-800 to-black">
        <Line year={crrYear}></Line>
      </div>
    </div>


  )
}

export default Status