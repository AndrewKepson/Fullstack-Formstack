import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const LatestFormSubmissions = ({ forms }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]

  //   const newForms = [...forms]

  //   const dataObjects = forms.map(form => ({
  //     label: form.id,
  //     data: form.last_submission_time,
  //     borderColor: 'rgb(255, 99, 132)',
  //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //   }))

  //   console.log(dataObjects)

  //   const data = {
  //     labels,
  //     datasets: dataObjects,
  //   }

  //   return <Line options={options} data={data} />

  return <ul></ul>
}
