'use client'

import React, { useEffect, useState } from 'react';

function AlertTag({type,message}) {
  const [hideAlert, setHideAlert] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  

  useEffect(() => {
    setTimeout(() => {
      setHideAlert(true);
    }, 3000);

    setTimeout(() => {
      setProgressBarWidth(100);
    }, 100);
  }, []);

  const progressBarStyle = {
    width: `${progressBarWidth}%`,
    transition: 'width 3s linear',
  };

  return (
    <div className="w-[250px] lg:w-[350px] 2xl:w-[450px] absolute top-[0%] right-[0%]" >
       
      <div className={`relative p-6 ${hideAlert ? 'hidden' : ''}`}>
        <div className="relative alert bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="mr-2">{message}</span>
              <button className={type ? "text-red-600 hover:text-red-800 transition" : "text-green-600 hover:text-green-800 transition hide" } onClick={() => setHideAlert(true) }>
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm0 18.75a8.75 8.75 0 118.75-8.75 8.76 8.76 0 01-8.75 8.75zM13.59 6.177a.714.714 0 10-1.012 1.009l-1.366 1.37-1.37 1.366a.714.714 0 00-.2.498c0 .196.08.385.21.52a.72.72 0 00.51.215.714.714 0 00.498-.2l1.37-1.366 1.366-1.37a.712.712 0 000-1.01zm0 0" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative mt-2">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              <div className={type ? "h-full bg-red-500" : "h-full bg-green-500"}  style={progressBarStyle}></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-gray-200 transform rotate-45 origin-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default AlertTag;

