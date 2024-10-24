'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend );



const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b5", "#2265d8", "#2f91fa"]
      }
    ],
    labels: [
      "Bank1", "Bank2", "Bank3"
    ]
  }
  return (
    
      <Doughnut data={data}
        options = {{
          responsive: true,
          cutout: "60%",
          plugins : {
            legend: {
              display: false
            }
          }
        }}
      />
    
  )
}

export default DoughnutChart