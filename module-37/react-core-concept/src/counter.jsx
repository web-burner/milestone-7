import { useState } from "react";

export default function Counter() {
    let [count,setCount] = useState(0)
    function counter (){
        const newCount = count+1;
        setCount(newCount)
    }
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={counter}>Add</button>
    </div>
  );
}
