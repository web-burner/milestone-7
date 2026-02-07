 
import ToDo from "./todo";
import Actor from "./actor";
import Singer from "./singers";

function App() {
  
  const singers = [
    {id:1,name:"dr. Mahfuz",age:68},
    {id:2,name:"Tahsan",age:45},
    {id:3,name:"shuvro dev",age:55}
  ]
  return (
    <div>
      
      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
    </div>
  );
}
function Student({ name, department = "Self-learner" }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default App;
