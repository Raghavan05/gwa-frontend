import React, { useState, useEffect } from 'react';

const GetData = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    // Fetch user data from sessionStorage
    const userId = sessionStorage.getItem('userId');
    const userEmail = sessionStorage.getItem('userEmail');
    const role = sessionStorage.getItem('role');

    if (userId && userEmail && role) {
      // Set the user data state
      setUserData({ userId, userEmail, role });
    }
  }, []);

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {userData.userEmail}</p>
      <p>Role: {userData.role}</p>
      {/* Display other user data as needed */}
    </div>
  );
};

export default GetData;
