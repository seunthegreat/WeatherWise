//-- Importing the necessary components, types and constants --//
import React, { useState } from 'react'
import { text } from '../style'
import { CityCard, Search } from '.';
import { AppConstant } from '../constants';
import { ComponentProps } from '../types';

const {popularCities} = AppConstant

//-- Define the Sidebar component as a functional component --//
const Sidebar: React.FC<ComponentProps['Sidebar']> = ({ onSelectCity, currentSelection, screenSize }): JSX.Element => {
  return (
    <div className='flex'>
      {/* Only render the Sidebar if the screen size is larger than 600 pixels */}
      {screenSize > 768 && (
        <div className={`${screenSize > 768 ? 'w-96' : 'w-72'} h-screen md:overflow-hidden shadow-2xl overflow-auto md:hover:overflow-auto p-3 z-10 bg-white`}>
          <div className='mt-2 h-14 border-b-[1px] flex flex-row justify-between items-start'>
            <p className={`${text.subHeading}`}>Weather Wise</p>
  
            <button className=''>
              <p className={`${text.body} bg-highlight p-1 px-2 rounded-[2px] text-white`}>Demo</p>
            </button>
          </div>
  
          <div className='py-2'>
            {/* Render the Search component and pass in the `onSelectCity` function */}
            <Search onClickSearchResult={onSelectCity} />
          </div>
  
          <div className='my-2 flex flex-col h-[100%] w-full'>
            <p className={`${text.body}`}>Popular Cities</p>
  
            <div className='overflow-scroll mt-3 py-2'>
              {/* Render the CityCard component for each city in the `popularCities` array */}
              {popularCities.map((item, index) => (
                <CityCard
                  key={index}
                  info={item}
                  currentCity={currentSelection}
                  onSelectCity={onSelectCity}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default Sidebar