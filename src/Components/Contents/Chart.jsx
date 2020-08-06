import React from 'react';
import ReactApexChart from 'react-apexcharts'  



const Chart = ({total, male, female}) => {


        let numberMale = male.map(Number);
        let numberFemale = female.map(Number);
        let femaleReversed = numberFemale.reverse();
        const dataFemale = femaleReversed.map( s => -Math.abs(s));
        const dataMale = numberMale.reverse();

        const maxYaxis = Math.max(...numberMale)*1.2;
        const minYaxis = Math.min(...dataFemale)*1.2;
        
        const series = [{
            name: 'Females',
            data: dataFemale
        },
        {
            name: 'Males',
            data: dataMale
        }
        ];
        const options = {
            chart: {
            type: 'bar',
            height: 440,
            stacked: true
            },
            colors: ['#008FFB', '#FF4560'],
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '100%',
                    dataLabels: {
                    position: 'top',
                    },
                },
            },
            dataLabels: {
                formatter: function (val) {
                    return Math.abs(val)
            },
                enabled: true,
                style: {
                    fontSize: '9px',
                    colors: ['#333']
                },
                offsetX: 30
            },
            stroke: {
                width: 1,
                colors: ["#fff"]
            },
            grid: {
                xaxis: {
                    lines: {
                    show: false
                    }
                }
            },
            yaxis: {
                min: minYaxis,
                max: maxYaxis,
                forceNiceScale: false,
                floating: false,
                title: {
                    // text: 'Age',
            },
            },
            tooltip: {
                shared: false,
                    x: {
                        formatter: function (val) {
                        return val
                        }
                    },
                    y: {
                        formatter: function (val) {
                        return Math.abs(val) 
                        }
                    }
            },
            title: {
                text: ` Population Pyramid 2020`
            },
            xaxis: {
                categories: ['100+','95-99','90-94','85-89', '80-84', '75-79', '70-74', 
                '65-69', '60-64', '55-59', '50-54','45-49', '40-44', '35-39', '30-34', 
                '25-29', '20-24', '15-19', '10-14', '5-9','0-4'
            ],
            title: {
                text: 'Total'
            },
            labels: {
                formatter: function (val) {
                return Math.abs(Math.round(val)) + ""
                }
            }
            },
        }
    
    return (           
        <div>
            <ReactApexChart options={options} series={series} type="bar" height={440} />
            <p>{Math.random()}</p>
        </div>
    )
}
export default Chart
