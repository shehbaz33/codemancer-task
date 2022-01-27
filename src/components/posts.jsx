import React from 'react';

const posts = ({name,desc,url}) => {
  return <div>
       <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-10">
        <div className="px-4 py-2">
            <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
        </div>

        <img className="object-cover w-full h-48 mt-2 mb-10" src={url} alt="NIKE AIR" />
    </div>
  </div>;
};

export default posts;
