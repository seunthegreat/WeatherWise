import React from 'react';
import { text } from '../style';
import { ComponentProps } from '../types';
import { Search } from '.';

const Navbar: React.FC<ComponentProps['Navbar']> = ({onSelectCity}) => {
  return (
    <div className='z-10 fixed md:static  w-full bg-white shadow-md p-5'>
        <div className={`flex-col`}>
          <div className='flex flex-row justify-between items-center border-b-[0.5px] py-3'>
            <p className={`text-primary`}>Weather Wise</p>
            <button className=''>
                <p className={`${text.body} bg-highlight p-1 px-2 rounded-[2px] text-white`}>Demo</p>
            </button>
          </div>
          
          <div className='mt-4 flex flex-row bg-red-200'>
            <div className='w-full bg-red-200'>
              <Search onClickSearchResult={onSelectCity} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar