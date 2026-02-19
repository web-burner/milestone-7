import { useState } from "react";

export default function StatusBtn() {
  const [toggle, setToggle] = useState("All");
  const buttons = ["All", "Pending", "Submited", "Reviewed"];
  return (
    <>
      <div className="flex justify-end">
        <div>
          {buttons.map((btn,index) => (
            <button key={index}
              onClick={() => setToggle(btn)}
              className={`toggle-btn hover
               ${index === 0 && "rounded-l-lg"} 
               ${index === buttons.length -1 && "rounded-r-lg"}
               ${toggle === btn && "bg-purple-500! text-white!"}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
