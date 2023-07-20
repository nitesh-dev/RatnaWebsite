
let pieChart = document.querySelector('#pie-chart')

let chart = new Chart(pieChart, {
    type: 'doughnut',
    data: {
        labels: ['Principal Loan Amount', 'Total Interest'],
        datasets: [{
            data: [76, 24],
            borderWidth: 1,
            backgroundColor:[
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

//