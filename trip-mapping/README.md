# Weather Mapping

This miniproject explores working with the [OpenWeatherMap](https://openweathermap.org/api) and [Google Maps](https://cloud.google.com/maps-platform/) APIs.


## Files

##### `1-collect.ipynb` - collect weather data for at least 1000 cities around the world
- 3500 lat-long coordinates are randomly generated
- 1111 of these coordinates (about 1/3) had a nearby city
- 1023 of these cities were found with the OpenWeatherMap API
- Weather data was pulled for these 1023 cities from the API
- The weather data was saved as `weather.csv` into the `data/` directory

##### `2-visualize.ipynb` - visualize 6 different weather variables for the weather data from `data/weather.csv`
- Weather variables: `Max Temp`, `Humidity`, `Wind Speed`, `Cloudiness`, `Rain`, and `Snow`
- Each weather variable was ploted against the `latitude` in a scatter plot, with a regression line
- The plots were plotted again separately for the north and south hemispheres
- A geographic heatmap was created for each weather variable

##### `3-search.ipynb` - find hotels based on the user's weather preference
- The user is prompted for their preferred minimum/maximum temperatures and rain/snow preference
- The values entered for these values were: 70 (min temp), 80 (max temp), no (rain), and no (snow)
- The weather data from `data/weather.csv` was filtered based on these weather preferences, leaving 214 cities
- 194 of these cities had a nearby hotel
- These cities were displayed on a geographic heatmap with popup information
- The hotel data was saved as `hotels.csv` into the `data/` directory

##### `4-create` - create a travel itinerary based on the user's weather preference
- The user is prompted for their preferred minimum/maximum temperatures and rain/snow preference
- The values entered for these values were: 76 (min temp), 78 (max temp), no (rain), and no (snow)
- The hotel data from `data/hotels.csv` was filtered based on these weather preferences, leaving 61 cities
- These cities were displayed on a geographic heatmap with popup information
- A travel itinerary was created consisting of 4 Brazilian cities: "Miracema do Tocantins", "Carutapera", "Cabedelo", and "Pitimbu"
- These 4 cities were displayed on a map with a route going from "Miracema do Tocantins" to "Carutapera" to "Cabedelo" to "Pitimbu"

##### `config.py` (not included) - store API keys for OpenWeatherMap and Google Maps
- Go through the following steps in order to run the notebooks
- Create an account at [OpenWeatherMap](https://openweathermap.org/api) and get an API key
- Create an account at [Google Maps](https://cloud.google.com/maps-platform/), create a new project, and get an API key
- In the Google Maps project, enable billing and enable the APIs listed in `Requirements` below
- Create a file named `config.py` 
- In `config.py`, store the OpenWeatherMap API key in a variable called `OWM_KEY`
- In `config.py`, store the Google Maps API key in a variable called `GMAPS_KEY`

##### `data/` - directory to hold data files
- `weather.csv` - weather data for 1023 cities pulled from OpenWeatherMap
    - This file was output from notebook 1
- `hotels.csv` - hotel data for 194 cities pulled from Google Maps (Places API)
    - This file was output from notebook 3
    
##### `imgs/` - directory to hold plots and maps generated from the analysis
- `heatmaps/` - contains the 6 weather heatmaps: `cloudiness.png`, `humidity.png`, `max_temp.png`, `rain.png`, `snow.png`, and `wind_speed.png` (from notebook 2)
- `hemisphere_weather.png` - scatter subplots with regression lines comparing the weather between the northern and southern hemispheres (from notebook 2)
- `travel_destinations.png` - map showing travel destinations with a maximum temperature between 76 and 78 degrees Fahrenheit, no rain, and no snow (from notebook 4)
- `brazil_itinerary.png` - map showing a travel itinerary with 4 cities in Brazil (from notebook 4)
- `brazil_cities.png` - map showing the Brazilian cities in the travel itinerary, except for Cabedelo, which is covered (from notebook 4)


## Requirements
- Python 3
- Python packages: Requests, Scipy, Numpy, Pandas, Matplotlib, Citipy, Gmaps
- Jupyter notebook/lab
- API keys for the [OpenWeatherMap](https://openweathermap.org/api) and [Google Maps](https://cloud.google.com/maps-platform) APIs
- Google Maps APIs to enable: [Maps Javascript](https://developers.google.com/maps/documentation/javascript), [Places API](https://developers.google.com/places/web-service), [Directions API](https://developers.google.com/maps/documentation/directions)