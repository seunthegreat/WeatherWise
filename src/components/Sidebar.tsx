import React, { useState } from 'react'
import { text } from '../style'
import { CityCard } from '.';
import { AppConstant } from '../constants';
import { ConstantProps } from '../types';

const {popularCities} = AppConstant


type Props = {
  currentSelection: ConstantProps['City'];
  onSelectCity: (item: ConstantProps['City']) => void;
}

const Sidebar: React.FC<Props> = ({onSelectCity, currentSelection}): JSX.Element => {
  
  return (
    <div className='h-screen md:overflow-hidden shadow-2xl overflow-auto md:hover:overflow-auto p-3 z-10 w-96 bg-white'>
      <div className='mt-2 h-20 border-b-[1px] flex flex-row justify-between items-start'>
        <p className={`${text.subHeading}`}>Weather Wise</p>

        <button className=''>
          <p className={`${text.body} bg-highlight p-1 px-2 rounded-[2px] text-white`}>Demo</p>
        </button>
      </div>

      <div className='py-2'>
        <div className='rounded-[5px] bg-gray-200 w-full h-10'></div>
      </div>

      <div className='my-2 flex flex-col h-[100%] w-full'>
        <p className={`${text.body}`}>Popular Cities</p>

        <div className='overflow-scroll mt-3 py-2'>
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
  )
}

export default Sidebar