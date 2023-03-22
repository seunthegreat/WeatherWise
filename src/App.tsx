//-- Importing the necessary components and types --//
import React, { useEffect, useState } from 'react';
import { Sidebar, Map, Navbar } from './components';
import { AppConstant } from './constants';
import { ConstantProps } from './types';

//-- Destructuring the popularCities array from AppConstant --//
const { popularCities } = AppConstant;

//-- Defining the App functional component --//
const App: React.FC = ():JSX.Element => {
  //-- Defining the state variables selectedCity and screenSize using the useState hook --//
  const [selectedCity, setSelectedCity] = useState<ConstantProps['City'] | null>(popularCities[0]);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  //-- Using the useEffect hook to add an event listener for window resize events --//
  useEffect(() => {
    //-- Defining the handleResize function to set the screen size state variable --//
    const handleResize = () => setScreenSize(window.innerWidth);
    //-- Adding the event listener and calling handleResize function to set the initial screen size --//
    window.addEventListener('resize', handleResize);
    handleResize();

    //-- Returning a cleanup function to remove the event listener when the component unmounts or the screen size state variable changes --//
    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize]);

  //-- Defining the handleSelectCity function to update the selectedCity state variable --//
  const handleSelectCity = (item: ConstantProps['City'] | null ) => {
    setSelectedCity(item);
  }

  //-- Returning the JSX for the App component --//
  return (
    <div className='relate bg-gray-100 flex'>
      {/* Conditionally rendering the Sidebar component for screen sizes larger than 768 pixels */}
      {screenSize > 768 && (
        <div className='fixed z-10 md:static navbar'>
          <Sidebar
            screenSize={screenSize}
            currentSelection={selectedCity}
            onSelectCity={handleSelectCity} />
        </div>
      )}

      <div className={` max-h-screen w-full flex flex-col`}>
        {/* Conditionally rendering the Navbar component for screen sizes smaller than 768 pixels */}
        { screenSize < 768 && (<Navbar onSelectCity={handleSelectCity} />)}
        {/* Rendering the Map component with the current selected city */}
        <Map currentSelection={selectedCity} />
      </div>
      
    </div>
  );
};

export default App;
