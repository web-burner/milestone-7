import { Suspense } from "react";
import "./App.css";
import Counter from "./counter";
import Player from "./Player";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const friendList = async ()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json()
// }


function App() {
  // function handleClick (num){
  //   console.log(5+num)
  //   // alert("Event clicked")
  // }
  // function event (){
  //   const value = document.getElementById("input").value;
  //   console.log(value)
  // }
  // const friendsPromise = friendList();



  return (
    <>
      <h2>Welcome to React Core Concept</h2>
      {/* <Counter></Counter> */}
      {/* <input id='input' type="text" onKeyUp={event} />
    <button onClick={()=>handleClick(7)}>Click Me</button> */}
      {/* <Player></Player> */}
      {/* <Suspense fallback={<h2>Loading.....</h2>}>
        <Users fetchUsers={fetchUsers} friendsPromise = {friendsPromise}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h2>Friends are coming for treat</h2>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense> */}

      <Suspense fallback={<h2>Posts Loding...</h2>}>
        <Posts></Posts>
      </Suspense>
    </>
  );
}

export default App;
