import React from 'react';
import Profilephoto from '../assets/images/profilephoto.svg';
export default function profile() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="flex items-center justify-between p-4 border-b">
        <i className="fas fa-chevron-left text-xl"></i>
        <h1 className="text-xl font-medium">Profile</h1>
        <div></div>
      </div>
      <div className="flex flex-col items-center p-6">
        <img
          src={Profilephoto}
          alt="Profile picture of Andrea Hirata"
          className="rounded-full w-24 h-24 mb-4"
        />
        <h2 className="text-lg font-medium">Andrea Hirata</h2>
        <p className="text-gray-500">hirata@gmail.com</p>
      </div>
      <div className="divide-y">
        <div className="py-2 px-4 text-gray-500">General</div>
        <div className="py-4 px-4">Edit Profile</div>
        <div className="py-4 px-4">Notifications</div>
        <div className="py-4 px-4">My Orders</div>
        <div className="py-2 px-4 text-gray-500">Legal</div>
        <div className="py-4 px-4">Terms of Use</div>
        <div className="py-4 px-4">Privacy Policy</div>
        <div className="py-2 px-4 text-gray-500">Personal</div>
        <div className="py-4 px-4">Report a Bug</div>
        <div className="py-4 px-4">Logout</div>
      </div>
    </div>
  );
}
