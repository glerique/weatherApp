# WeatherApp

A simple weather application that displays real-time weather information for public transport.

## Features

- Real-time weather information
- Temperature display in Celsius
- "Feels like" temperature
- Humidity percentage
- Weather condition description with icons
- Auto-refresh every hour
- Responsive design 

## Setup

1. Clone the repository
2. Copy `config.example.json` to `config.json`
3. Update `config.json` with your:
   - OpenWeatherMap API key
   - City name

```json
{
    "city": "YourCity",
    "apiKey": "YourOpenWeatherMapAPIKey"
}

# Running Fetch Locally

To run this JavaScript code locally, you need to use Python.
  
1. Install Python from python.org.
2. Start a simple HTTP server in the directory containing your file:

```bash
python -m http.server

Then, open http://localhost:8000/index.html in your browser to execute the code.
