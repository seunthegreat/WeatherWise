import React, { useRef, useEffect } from 'react';
import { Sidebar, Map } from './components';

const App: React.FC = () => {    

  return (
    <div className='relate bg-gray-100 flex'>
      <div className='fixed z-10 md:static navbar'>
        <Sidebar />
      </div>

      <div className={` max-h-screen w-full flex flex-col`}>
        <Map />
      </div>
      
    </div>
  );
};

export default App;
