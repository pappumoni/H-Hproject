const ctx1 = document.getElementById("ptChart").getContext('2d');
const ctx2 = document.getElementById("sHnChart").getContext('2d');
const ctx3 = document.getElementById("sHlChart").getContext('2d');
const myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ["starts", "Dec-2021", "Jun-2022",
    "Dec-2022", "Jun-2023", "Dec-2023", "Ends"],
    datasets: [{
      label: 'Trained Candidates in Project (Dummy Data)',
      backgroundColor: 'rgba(161, 198, 247, 1)',
      borderColor: 'rgb(47, 128, 237)',
      data: [1000, 1500, 500, 2000, 2500, 3500, 900],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});
const myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["Dimapur", "Kiphire", "Kohima", "Longleng",
    "Mokokchung", "Mon", "Noklak", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    datasets: [{
      label: 'District Wise Handicraft (Dummy data)',
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: [300, 400, 200, 500, 600, 850, 200, 200, 500, 800, 750, 200],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});
const myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ["Dimapur", "Kiphire", "Kohima", "Longleng",
    "Mokokchung", "Mon", "Noklak", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    datasets: [{
      label: 'District wise Handloom (Dummy Data)',
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: [300, 400, 200, 500, 600, 850, 200, 200, 500, 800, 750, 200],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});

