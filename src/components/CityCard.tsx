import React from 'react';
import { text } from '../style';
import { ConstantProps } from "../types";

type CityCard = {
  info: ConstantProps['City'],
  currentCity: ConstantProps['City'],
  onSelectCity: (item: ConstantProps['City']) => void;
}

const CityCard: React.FC<CityCard> = ({ info, onSelectCity, currentCity}): JSX.Element => {
  return (
    <button onClick={() =>onSelectCity(info)} key={info.id} 
      className={`${info == currentCity && 'bg-hover border-l-[2px] border-primary'} flex flex-row  mb-2 px-5 py-2 shadow-sm w-full items-center hover:bg-gray-100 rounded-[5px]`}>
      <div className='h-12 w-12 bg-gray-300 rounded-[5px]'/>
      <div className='flex flex-col ml-2 items-start '>
        <p className={`${text.normal} ${info == currentCity && 'text-highlight'}`}>{info.city}</p>
        <p className={`${text.body}`}>{info.country}</p>
      </div>
    </button>
  )
};

export default CityCard