import React, { useRef, useEffect } from 'react';
import mapboxgl, { Map, NavigationControl } from 'mapbox-gl';
import { AppConstant } from '../constants';

//-- Sets Mapbox access token for authentication --//
mapboxgl.accessToken = AppConstant.mapBoxPublicKey;

type Props = {}

const MapView: React.FC<Props> = () : JSX.Element => {
  //-- creates a reference to the HTML div element which will contain the map --//
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  //--initializes map when component mounts--//
  useEffect(() => {
    //-- create a new Mapbox map instance and pass in the necessary options --//
    const map = new Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/light-v10', //--> specifies the style for the map
      center: [-104.9876, 39.7405], //--> 
      zoom: 12.5, //--> specifies the initial zoom level of the map
    });
    
    //-- adds the navigation control (zoom buttons) to the map --//
    map.addControl(new NavigationControl(), 'bottom-right');

    //-- cleans up on unmount --//
    return () => {
      map.remove();
    };
  }, []);

  //-- renders an empty div element that will contain the map --//
  return <div className="flex flex-col min-h-screen" ref={mapContainerRef} />;
}

export default MapView;
