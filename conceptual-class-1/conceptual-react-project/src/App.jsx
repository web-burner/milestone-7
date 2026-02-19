import Navbar from "./Navbar";
import "./App.css";
import Issues from "./Issues";
import { Suspense } from "react";

const fetchIssues = () => {
  const fetchdata = fetch("../public/data.json").then((res) => res.json());
  return fetchdata;
};


function App() {
  const fetchPromise = fetchIssues();
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<p className="text-center">Loading</p>}>
        <Issues fetchData={fetchPromise}></Issues>
      </Suspense>
    </div>
  );
}

export default App;
