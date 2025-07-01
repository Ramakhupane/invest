async function fetchStockData() {
  const symbol = document.getElementById('symbolInput').value.toUpperCase();
  if (!symbol) return alert('Enter a stock symbol');
  const API_KEY = 'demo'; // Replace with your real API key from Alpha Vantage

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  const timeSeries = data['Time Series (Daily)'];

  if (!timeSeries) return alert('Invalid stock symbol or API limit');

  const labels = Object.keys(timeSeries).slice(0, 10).reverse();
  const values = labels.map(date => parseFloat(timeSeries[date]['4. close']));

  document.getElementById('stockInfo').innerHTML = `<p><strong>${symbol}</strong> Last Close: ${values[values.length - 1]}</p>`;

  const ctx = document.getElementById('stockChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${symbol} Close Price`,
        data: values,
        borderColor: '#0077ff',
        backgroundColor: 'transparent'
      }]
    }
  });
}