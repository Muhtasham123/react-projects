import { useRef, useState, useEffect } from "react"
import { Chart } from "chart.js/auto"

const Line = ({year}) => {
  const lineRef = useRef()
    const [chartData,setChartData] = useState(null)
    
    useEffect(()=>{
      const jobs = JSON.parse(localStorage.getItem("jobs") || "[]")
      const jobsCount = [0,0,0,0,0,0,0,0,0,0,0,0]

      jobs.forEach((job)=>{
          let index = parseInt(job.date.substring(5, 7))
          let date = job.date

          if (job.status === "interview" && date.substring(0, 4) === year.toString()){
            jobsCount[index-1] = jobsCount[index-1]+1
          }
      })
    
      setChartData({
          labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
          datasets: [
              {
                  label:"Success rate ( interview calls )",
                  data:jobsCount,
                  backgroundColor: 'white',
                  borderColor:"white"
              }
          ]
      })
    },[year])
    
      useEffect(() => {
          if (!chartData || !lineRef.current) return;
    
          const chartInstance = new Chart(lineRef.current, {
              type: 'line',
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
                          grid: {
                              color: "rgb(105, 105, 105)"
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
     <canvas ref = {lineRef} className = "w-full h-full"></canvas>
    )
}

export default Line