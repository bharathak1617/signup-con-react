import React, { useEffect, useState } from "react";
import './login.css'
const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
      });
  }, [user.id]);

  return (
    <div className="loginpage">
      <h2>Profile</h2>
      {profileData ? (
        <pre>{JSON.stringify(profileData, null, 2)}</pre>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Profile;
