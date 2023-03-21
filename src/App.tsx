import React, { useRef, useEffect, useState } from 'react';
import { Sidebar, Map } from './components';
import { AppConstant } from './constants';
import { ConstantProps } from './types';

const { popularCities } = AppConstant;  
const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<ConstantProps['City'] | null>(popularCities[0]);
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize]);

  const handleSelectCity = (item: ConstantProps['City'] | null ) => {
    setSelectedCity(item);
  }

  return (
    <div className='relate bg-gray-100 flex'>
      <div className='fixed z-10 md:static navbar'>
        <Sidebar
         screenSize={screenSize}
         currentSelection={selectedCity}
         onSelectCity={handleSelectCity}/>
      </div>

      <div className={` max-h-screen w-full flex flex-col`}>
        <Map currentSelection={selectedCity} />
      </div>
      
    </div>
  );
};

export default App;
