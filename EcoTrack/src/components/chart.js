// Sample data for the chart
const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Carbon Emissions',
        backgroundColor: 'rgba(0, 123, 107, 0.6)',
        borderColor: 'rgba(0, 123, 107, 1)',
        borderWidth: 1,
        data: [50, 75, 60, 80, 70],
    }],
};

// Chart configuration
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

// Initialize and render the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
});
