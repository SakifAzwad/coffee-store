import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const coffees = useLoaderData();
  const [cof, setcof] = useState(coffees);

  return (
    <>
     <Header></Header>
      <div className="m-20">
        <h1 className="text-6xl text-center my-20 text-red-600">
          {cof.length}
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {cof && cof.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee} cof={cof} setcof={setcof}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
