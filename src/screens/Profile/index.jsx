import React, { useState, useEffect } from "react";
import {} from "./action";
import UserInfo from "./userInfo";
import UserDetails from "./userDetails";
import './index.css';

const Profile = () => {
  // const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {});

  return (
    <div
      className="profile"
    >
        <UserInfo />
        <UserDetails />
    </div>
  );
};

export default Profile;
