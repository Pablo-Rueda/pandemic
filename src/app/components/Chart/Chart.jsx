import React from 'react';
import {Bar} from "react-chartjs-2";
import styles from "./Chart.module.css"

const Chart = ({data,country}) => {
    console.log(data)

    const barChart = (
        data ? (
            <Bar 
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "People",
                        backgroundColor: [
                            "rgba(0,0,255, 0.5)",
                            "rgba(111, 194, 107, 0.5)",
                            "rgba(186, 54, 54, 0.5)"
                        ],
                        data: [data.All.confirmed, data.All.recovered, data.All.deaths]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display:true, text: `Current ${country} situation ` }
                }}
            />
        ): null
    )
    return ( 
        <div className={styles.container}>
         {barChart}
        </div>
     );
}
 
export default Chart;