
let pieChartCanvas = document.querySelector('#pie-chart')

let pieChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: {
        labels: ['Principal Loan Amount', 'Total Interest'],
        datasets: [{
            data: [76, 24],
            borderWidth: 1,
            backgroundColor: [
                '#1669F6',
                '#F6D216'
            ]
        }]
    },
    options: {
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
    }
});






const labels = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034];

function generateData(max, count, isMax = false) {
    const tempData = []
    for (let index = 0; index < count; index++) {
        if (isMax) {
            tempData.push(max)
        } else {
            tempData.push(Math.floor(Math.random() * max))
        }

    }

    return tempData
}

const data = {
    labels: labels,
    datasets: [

        {
            label: 'Principle',
            data: generateData(10000, labels.length, true),
            backgroundColor: '#1669F6',
            barThickness: 15,
            order: 2
        },
        {
            label: 'Interest',
            data: generateData(10000, labels.length),
            backgroundColor: '#8CABDF',
            barThickness: 15,
            order: 1
        },
        {
            label: 'Balance',
            data: generateData(20000, labels.length),
            backgroundColor: '#ffffff',
            type: 'line',
            borderColor: '#C72626',
            borderWidth: 2,
            order: 0,
            yAxisID: "right-y-axis",
            tension: 0.1,
            grid: {
                display: false
            }
        },

    ]
};

let barGraphCanvas = document.querySelector('#bar')
let barGraph = new Chart(barGraphCanvas, {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: false
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                stacked: false,
                ticks: {
                    beginAtZero: true,
                },
                id: "right-y-axis",
                type: "linear",
                position: "right",
                gridLines: {
                    display: false
                }
            }
        }
    }
})