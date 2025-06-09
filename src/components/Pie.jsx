import { Chart } from "chart.js/auto"
import { useRef,useEffect,useState } from "react"

const Pie = ({year}) => {
  const pieRef = useRef()
  const [chartData,setChartData] = useState(null)

  useEffect(()=>{
    const jobs = JSON.parse(localStorage.getItem("jobs") || "[]")
    const intr = jobs.reduce((acc,crr)=>{
        if(crr.status === "interview" && crr.date.substring(0,4) === year.toString())return acc+1
        return acc;
    },0)
    const declined = jobs.reduce((acc, crr) => {
        if (crr.status === "declined" && crr.date.substring(0, 4) === year.toString()) return acc + 1
        return acc;
    }, 0)
    const pending = jobs.reduce((acc, crr) => {
        if (crr.status === "pending" && crr.date.substring(0, 4) === year.toString()) return acc + 1
        return acc;
    }, 0)

    setChartData({
        labels: ['Interviewed', 'Declined', 'Pending'],
        datasets: [
            {
                data: [intr,declined,pending],
                backgroundColor: ['black','gray','white']
            }
        ],
    })
  },[year])

    useEffect(() => {
        if (!chartData || !pieRef.current) return;

        const chartInstance = new Chart(pieRef.current, {
            type: 'pie',
            data: chartData,
        })

        return () => {
            chartInstance.destroy();
        };
    },[chartData])


  return (
   <canvas ref = {pieRef} className = "w-full h-full overflow-hidden"></canvas>
  )
}

export default Pie