import React from 'react'
import { text } from '../style'


type Props = {}

const Sidebar: React.FC = (props: Props): JSX.Element => {
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

      <div className='my-2'>
        <p className={`${text.normal} text-highlight`}>Popular Cities</p>

        <div className='mt-5'>
          <button className='flex flex-row border-b-[0.5px] px-5 py-2 shadow-sm w-full hover:border-primary'>
            <div className='h-12 w-12 bg-gray-300 rounded-[5px]'/>
            <div className='flex flex-col ml-2 items-start'>
              <p className={`${text.normal}`}>Paris</p>
              <p className={`${text.body}`}>France</p>
            </div>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Sidebar