# Weather Mapping

This miniproject explores working with the [OpenWeatherMap](https://openweathermap.org/api) and [Google Maps](https://cloud.google.com/maps-platform/) APIs.


## Files

##### `1-collect.ipynb` - collect weather data for at least 1000 cities around the world
- 3500 lat-long coordinates are randomly generated
- 1111 of these coordinates (about 1/3) had a nearby city
- 1023 of these cities were found with the OpenWeatherMap API
- Weather data was pulled for these 1023 cities from the API
- The weather data was saved as `weather.csv` into the `data/` directory

##### `2-visualize.ipynb` - visualize 6 different weather features for the weather data from `data/weather.csv`
- Weather features: `max temp`, `humidity`, `cloudiness`, `wind speed`, `rain`, and `snow`
- Each weather feature was ploted against the `latitude` in a scatter plot, including a regression line
- The plots were repeated for the north and south hemispheres separately
- A geographic heatmap was created for each weather feature

##### `3-search.ipynb` - find hotels based on the user's weather preference
- The user is prompted for their preferred minimum/maximum temperatures and rain/snow preference.
- The values entered for these values were: 70 (min temp), 90 (max temp), yes (rain) and no (snow)
- The weather data from `data/weather.csv` was filtered based on these weather preferences, leaving 70 cities
- 64 of these cities had a nearby hotel
- These cities were displayed on a geographic heatmap with popup information
- The hotel data was saved as `hotels.csv` into the `data/` directory

##### `4-create` - create a travel itinerary based on the user's weather preference
- The user is prompted for their preferred minimum/maximum temperatures and rain/snow preference.
- The values entered for these values were: 75 (min temp), 85 (max temp), yes (rain) and no (snow)
- The hotel data from `data/hotels.csv` was filtered based on these weather preferences, leaving 46 cities
- These cities were displayed on a geographic heatmap with popup information
- A travel itinerary was created consisting of 4 Brazilian cities: Altamira, São Félix do Xingu, Miracema do Tocantins, and São Miguel do Araguaia
- These 4 cities were displayed on a map with a route going from Altamira to São Félix do Xingu to Miracema do Tocantins to São Miguel do Araguaia

##### `config.py` (not included) - store API keys for OpenWeatherMap and Google Maps
- Go through the following steps in order to run the notebooks
- Create an account at [OpenWeatherMap](https://openweathermap.org/api) and get an API key
- Create an account at [Google Maps](https://cloud.google.com/maps-platform/), create a new project, and get an API key
- In the Google Maps project, enable billing and enable the APIs listed in `Requirements` below
- Create a file named `config.py` 
- In `config.py`, store the OpenWeatherMap API key in a variable called `OWM_API_KEY`
- In `config.py`, store the Google Maps API key in a variable called `GMAPS_API_KEY`

##### `data/` - directory to hold data files
- `weather.csv` - weather data for 1023 cities pulled from OpenWeatherMap
    - This file was output from notebook 1
- `hotels.csv` - hotel data for 64 cities pulled from Google Maps (Places API)
    - This file was output from notebook 3


## Requirements
- Python 3
- Python packages: Requests, Scipy, Numpy, Pandas, Matplotlib, Citipy, Gmaps
- Jupyter notebook/lab
- API keys for the [OpenWeatherMap](https://openweathermap.org/api) and [Google Maps](https://cloud.google.com/maps-platform) APIs
- Google Maps APIs to enable: [Maps Javascript](https://developers.google.com/maps/documentation/javascript), [Places API](https://developers.google.com/places/web-service), [Directions API](https://developers.google.com/maps/documentation/directions)