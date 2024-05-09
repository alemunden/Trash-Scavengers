import styles from './VerticalChart.module.css'
import { Bar, Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: ["Paper", "Rigid Plastic", "Flexible Plastic", "Metal", "Glass"],
            datasets: [
                {
                    label: 'Recovery Rate Percentage',
                    data: [95, 60, 23, 73, 101],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(158,186,229,0.8)'
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Recycled Material Recovery Rate in British Columbia (2022)"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    return(
        <>
            <Bar data={chartData} options={chartOptions} style={{width: '414px', height: '500px'}} />
        </>
    )
}