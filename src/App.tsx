import React, { useRef, useEffect } from 'react';
import mapboxgl, { Map, NavigationControl } from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2V1bnRoZWdyZWF0IiwiYSI6ImNsZmdvMXNybjI4MnAzcG11dGozMDAzc24ifQ.8vwfnWc5pIEnnsRuwr8g2w';

const App: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new Map({
      container: mapContainerRef.current!,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });
    // add navigation control (the +/- zoom buttons)
    map.addControl(new NavigationControl(), 'bottom-right');
    console.log(map)

    // clean up on unmount
    return () => {
      map.remove();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="flex flex-col min-h-screen" ref={mapContainerRef} />;
};

export default App;
