// src/App.jsx
import React from "react";
import InstagramProfileCard from "./components/InstagramProfileCard";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
      
      {/* 🟢 here we pass props to the component like attributes */}
      <InstagramProfileCard 
        name="MEOW MEI"    // sends a string into the "name" prop
        bio="Frontend Developer | React Enthusiast" // string into "bio"
        photo="https://images.unsplash.com/photo-1755616491504-04cb286c09c1?q=80&w=2068&auto=format&fit=crop" // string into "photo"
        stats={{ posts: 120, followers: "4.5k", following: 120 }} // object into "stats"
      />
    </div>
  );
}

export default App;
