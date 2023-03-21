//-- Importing the necessary components and types --//
import React from 'react';
import { text } from '../style';
import { ComponentProps } from '../types';
import { Search } from '.';

//-- Defining the Navbar functional component --//
const Navbar: React.FC<ComponentProps['Navbar']> = ({onSelectCity}) : JSX.Element => {
  //-- Returning the JSX for the Navbar component --//
  return (
    <div className='z-10 fixed md:static  w-full bg-white shadow-md p-5'>
        <div className={`flex-col`}>
          <div className='flex flex-row justify-between items-center border-b-[0.5px] py-3'>
            {/* Rendering the Weather Wise title */}
            <p className={`text-primary`}>Weather Wise</p>
            {/* Rendering the Demo button */}
            <button className=''>
                <p className={`${text.body} bg-highlight p-1 px-2 rounded-[2px] text-white`}>Demo</p>
            </button>
          </div>
          <div className='mt-4 flex flex-row bg-red-200'>
            <div className='w-full bg-red-200'>
              {/* Rendering the Search component and passing the onSelectCity function as a prop */}
              <Search onClickSearchResult={onSelectCity} />
            </div>
          </div>
        </div>
    </div>
  )
}

//-- Exporting the Navbar component --//
export default Navbar;
