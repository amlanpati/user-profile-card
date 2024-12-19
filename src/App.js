// Stylish Design

import React, { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/solid";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg">
        <img
          src={user.picture.large}
          alt="User Profile"
          className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-pink-500 to-yellow-500 p-1"
        />
        <h2 className="text-xl font-bold text-gray-800 mt-4">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-base text-gray-700 mt-2">{user.gender}</p>
        <p className="flex items-center text-base text-gray-700 mt-2">
          <PhoneIcon className="w-5 h-5 text-blue-500 mr-2" />
          {user.phone}
        </p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default App;




// Simple Design

// import React, { useEffect, useState } from "react";
// import './App.css';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
//       .then((response) => response.json())
//       .then((data) => setUser(data.results[0]))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   if (!user) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 p-10 bg-white rounded-lg shadow-md flex">
//         <img
//           src={user.picture.large}
//           alt="User Profile"
//           className="w-24 h-24 rounded-full border-2 border-gray-300"
//         />
//         <div className="ml-4">
//           <h2 className="text-lg font-semibold">{user.name.first} {user.name.last}</h2>
//           <p className="text-sm text-gray-600 mt-2">{user.gender}</p>
//           <p className="text-sm text-gray-600 mt-2">{user.phone}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
