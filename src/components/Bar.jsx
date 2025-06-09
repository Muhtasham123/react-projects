import { useRef,useState,useEffect } from "react"
import { Chart } from "chart.js/auto"

const Bar = ({year}) => {
    const barRef = useRef()
      const [chartData,setChartData] = useState(null)
    
      useEffect(()=>{
        const jobs = JSON.parse(localStorage.getItem("jobs") || "[]")
        const jobsCount = [0,0,0,0,0,0,0,0,0,0,0,0]

        jobs.forEach((job)=>{
            let date = job.date
            console.log(date.substring(0, 4),year.toString())
            if(date.substring(0,4) === year.toString()){
                let index = parseInt(date.substring(5, 7))
                jobsCount[index-1] = jobsCount[index-1]+1
            }
        })

        console.log(jobsCount)
    
        setChartData({
            labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
            datasets: [
                {
                    label:"No of Applications",
                    data:jobsCount,
                    backgroundColor: 'white'
                }
            ]
        })
      },[year])
    
        useEffect(() => {
            if (!chartData || !barRef.current) return;
    
            const chartInstance = new Chart(barRef.current, {
                type: 'bar',
                data: chartData,
                options:{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins:{
                        legend:{
                            labels:{
                                color:"white"
                            }
                        }
                    },
                    scales:{
                        x:{
                            grid:{
                                color:"rgb(105, 105, 105)"
                            },
                            title:{
                                display:true,
                                text:"Months",
                                color:"white"
                            },
                            ticks: {
                                color: "white"
                            }
                        },
                        y: {
                            grid: {
                                color: "rgb(105, 105, 105)"
                            },
                            title: {
                                display: true,
                                text: "Applications",
                                color: "white"
                            },
                            ticks: {
                                color: "white"
                            }
                        }
                    }
                }
            })
    
            return () => {
                chartInstance.destroy();
            };
        },[chartData])
    
    
      return (
          
          <canvas ref={barRef} className="w-full h-full"></canvas>
    )
}

export default Bar