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

## Local Development Setup

1. Prerequisites:

# Install Node.js and npm
sudo apt update
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
