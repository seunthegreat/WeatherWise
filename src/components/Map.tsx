//-- Importing the necessary components, types and constants --//
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { Map, NavigationControl, Marker } from 'mapbox-gl';
import { AppConstant } from '../constants';
import { ComponentProps, ConstantProps } from "../types"

const {mapBoxPublicKey, openWeatherMapApiKey, openWeatherURL } = AppConstant;

//-- Sets Mapbox access token for authentication --//
mapboxgl.accessToken = mapBoxPublicKey;

const markedCities = AppConstant.popularCities;

const fetchWeatherData = async (coordinates: [number, number]): Promise<any> => {
  let lng = coordinates[0];
  let lat= coordinates[1];

  const response = await fetch(`${openWeatherURL}lat=${lat}&lon=${lng}&appid=${openWeatherMapApiKey}`);
  const data = await response.json();
  return data;
};

const MapView: React.FC<ComponentProps['Map']> = ({currentSelection}) : JSX.Element => {
  //-- creates a reference to the HTML div element which will contain the map --//
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  const [weatherData, setWeatherData] = useState<any>(null);
  

  useEffect(() => {
    //-- fetch weather data for the selected marker --//
   if (currentSelection) {
    fetchWeatherData(currentSelection.lngLat).then(data => {
      setWeatherData(data);
    });
   }
  }, [currentSelection])

  //--initializes map when component mounts--//
  useEffect(() => {
   if (currentSelection) {
     //-- create a new Mapbox map instance and pass in the necessary options --//
     const map = new Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/light-v10', //--> specifies the style for the map
      center: currentSelection.lngLat, //--> 
      zoom: 10, //--> specifies the initial zoom level of the map
    });
    
    //-- adds the navigation control (zoom buttons) to the map --//
    map.addControl(new NavigationControl(), 'bottom-right');

    const markers: Marker[] = [];

    //-- loop through the array of marker information and create a marker for each one --//
    markedCities.forEach(({ id, city, country, lngLat } : ConstantProps['City']) => {
      
      //-- create a new marker for the current city --//
      const marker = new Marker({
        color: 'bg-primary' //--> specifies the marker color
      })
        .setLngLat(lngLat) //--> sets the marker's lngLat coordinates
        // .setPopup(Popup) //--> sets the marker's popup content
        .addTo(map);  //--> adds the marker to the map

      //-- add the marker to the markers array --//
      markers.push(marker);

      //-- Display popup when marker is clicked --//
    
      map.on('click', (e) => {
        new mapboxgl.Popup()
          .setLngLat(lngLat)
          .setHTML(`
            <div>
              <div style="padding: 10px">
                <h2 style="font-weight: bold; font-size: 1.2em; margin-bottom: 2px">Today</h2>
                <p>Temperature: ${weatherData.list[0].main.temp} &#8451;</p>
                <p>Description: ${weatherData.list[0].weather[0].description}</p>
                <p>Humidity: ${weatherData.list[0].main.humidity}%</p>
                <p>Date: ${weatherData.list[0].dt_txt}</p>
                
              </div>
              <div style="border: 0.5px solid lightgray; margin-top: 10px; margin-bottom: 10px;"></div>
              <div style="padding: 10px">
                <h2 style="font-weight: bold; font-size: 1.2em; margin-bottom: 2px">Tomorrow</h2>
                <p>Temperature: ${weatherData.list[8].main.temp} &#8451;</p>
                <p>Description: ${weatherData.list[8].weather[0].description}</p>
                <p>Humidity: ${weatherData.list[8].main.humidity}%</p>
                <p>Date: ${weatherData.list[8].dt_txt}</p>
                
              </div>
            </div>
            `)
          .addTo(map);
      })
    });

    //-- cleans up on unmount --//
    return () => {
      markers.forEach(marker => {
        marker.remove(); //--> removes each marker from the map
      });
      map.remove();
    };
   }
  }, [currentSelection]); //--> updates each time value of currentSelection changes i.e it is a dependency

  //-- renders an empty div element that will contain the map --//
  return <div className="flex flex-col min-h-screen" ref={mapContainerRef} />;
}

export default MapView;
