1. create react folder by using (npm create vite@latest projectName -- --template react)

2. different way to handle event in react

onclick keyword টা হবে camelCase (onClick)
and inside the onclick(just function name do not call)

3. now if need to pass an argument then only function will not work for this i have to do like
   arrow function inside onclick

<button onClick={()=>handleClick(7)}>Click Me</button>

i have to wrap it by arrow function

4. state change in react

প্রথমে আমড়া একটা ফাঙ্কশন ডিক্লেয়ার করব একটা parameter সহকারে তারপর ওই parameter এর ভ্যালু কে ফাঙ্কশন এর প্রাইমারি ভ্যারিয়েবল declare করে একটা inner function ডিক্লেয়ার করব এবং ওই ফাংশনের একটা প্যারামিটার নিব। inner function থেকে প্রাইমারি ভ্যারিয়েবল এর value তা চেঞ্জ করব তারপর return করব [primary variable, inner function]

তারপর ওই inner function এর মাধ্যমে primary variable এর মান কে চেঞ্জ kora যায় 

like this > 

import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Add</button>
    </div>
  );
}
এখানে useState এর initial value 0 যা count এর ভ্যালু। 

same like counter but useState is shortter to use and easy . 

useState === counter (proved)
 
5 use cases of useState()
1. state management 
2. conditional rendering 
3. toggle flags (true/false)
4. counter
5. store api data in state 

<!-- use() hook in react (server side data load using fetch) -->

1. suspence use for loading when data will take time to load . it is look like a component . and use a fallback( before data load what will show in UI)

2. use() is used for get the data from fetch response promise 


<!-- load dynamic data , api call using use() -->

1. first way is direct fetch then pass the promise to the component 
2. second way is async await 


first of all i create a component then  go to the app.jsx file then fetch the url and get the json promise then import suspense and set a fallback (show something until data load) and then import the component where i want to send the json promise and send as any name then destructure there after that before return declare a variable and import use hook then using use hook get data from json promise .
and lastly i can use the data 


<!-- dynamic card rendering -->
for card i have to declare another component and then after i map the array send the single element to the component and everytime i sent the data the component will show everytime for each data 



<!-- load data using useEffect hook -->








hooks 
1. useState()
2. use()
3. suspence()