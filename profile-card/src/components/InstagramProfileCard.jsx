// src/components/InstagramProfileCard.jsx
import React from "react";

// 🟢 we tell the component: "I will receive some inputs (props)"
// instead of writing (props), we "destructure" to directly grab the names
const InstagramProfileCard = ({ name, bio, photo, stats }) => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-2xl p-6 text-center">
      
      {/* 🟢 photo now comes from props instead of a fixed link */}
      <img
        src={photo}
        alt={`${name} profile`}  // alt text also uses the name prop
        className="w-24 h-24 rounded-full mx-auto border-4 border-gray-200"
      />

      {/* 🟢 show the name we passed in from parent */}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>

      {/* 🟢 show the bio we passed in */}
      <p className="text-gray-500 text-sm">{bio}</p>

      {/* 🟢 use stats object props to display numbers */}
      <div className="flex justify-around mt-4 text-sm text-gray-600">
        <div>
          <span className="block font-bold text-gray-800">{stats.posts}</span>
          <span>Posts</span>
        </div>
        <div>
          <span className="block font-bold text-gray-800">{stats.followers}</span>
          <span>Followers</span>
        </div>
        <div>
          <span className="block font-bold text-gray-800">{stats.following}</span>
          <span>Following</span>
        </div>
      </div>

      {/* 🟢 button is still static for now */}
      <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
        Follow
      </button>
    </div>
  );
};

export default InstagramProfileCard;
