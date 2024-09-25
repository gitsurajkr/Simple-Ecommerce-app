import React from 'react';

const Card = ({ icon, title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-3 text-gray-700 dark:text-gray-200">{icon}</div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-2xl font-bold text-gray-800 dark:text-gray-300 mt-2">{value}</p>
    </div>
  );
};

export default Card;
