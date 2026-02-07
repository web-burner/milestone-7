// import { use, useState } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./post";
export default function Posts() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div className="friend">
      <h2>Users {user.length}</h2>
      
    </div>
  );
}
