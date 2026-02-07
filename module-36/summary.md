what is react ?
=> react is a javascript library for building user interfaces 
=> react js declarative , efficient and flexile 
=> it is fast and component based 
=> it was initially developed and maintained by facebook 


what is component ? 
=> component is a small block that is part of website . sum of component is make a wbsite . it like a js function 

how to build a component ?
=> export the component 
=> define the function 


advantage is it can reuse . 

what is jsx ?
=> it is html like js . jsx is a syntax extension for js . jsx stand for javascript xml . lets you write html like markup inside a js file . 

fragment is a empty tag the return

component এর নাম বড় হাতের অক্ষর দিয়ে শুরু হয়। 



use style is jsx 
there are 3 ways to use style in jsx 
1. use app.css file with className .
function Student () {
  
  return(
    <div className="student">
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}
2. use object for styling 
function Student () {
  const personStyle = {
    color:"red",
    textAlign : "center"
  }
  return(
    <div className="student" style={personStyle}>
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}

can not use class keyword should use like className like this . 
use camelCase for use css property in jsx . 
reusable component can recieve paremeter as props and use it when different time call it.
props is an object and i have to access the value like object notation 


props types and how to pass and read prop
we can destructuring the props then the can use like a variable . 
i can destructuring inside the as props 

function App() {
  return (
    <>
      <h1>React Core Concept</h1>
      <Student name='Shaon' department='ICT'></Student>
      <Student name='Sajjat' department='ICT'></Student>
      <Student name='Rahim' department='ICT'></Student>
      <Student name='Rana'></Student>
    </>
  );
}
function Student ({name,department = "Self-learner"}) {
  return(
    <div className="student">
      <p>Name: {name}</p>
      <p>Department: {department}</p>
    </div>
  )
} 


i can use a default value as no set value 
this props i can directly send parent to child but cannot send child to parent directly 



read only props two ways of conditional rendering 
1. আলাদা একটা jsx ফাইল কে এক্সেস করতে ওই ফাইল theke export করতে হয় আর যেই file এ use করব সেখানে import করতে হয়। 

<!-- export  -->
function ToDo() {
  return (
    <>
      <h2>ToDos</h2>
    </>
  );
}

export default ToDo;

<!-- import  -->
import "./App.css";
import ToDo from "./todo";

function App() {
  return (
    <>
      <h1>React Core Concept</h1>
      <ToDo></ToDo>
    </>
  );
}

import করার সময় চাইলে ওই ফাঙ্কশন এর নাম বা আলাদা নাম ও use কড়া যায়।
এখন আমড়া চাইলে ওই component এর মধ্যে props পাঠাতে পাড়ি আবার চাইলে কোনও একটা function কেও পাঠাতে পাড়ি props হিসাবে জাতে child to parent data transfer কড়া যায়.

note: কোনও একটা component ফাইল থেকে একটা মাত্র difault export হতে পরে. 


6 ways to to do conditional rendering : if ternary and AND OR 

