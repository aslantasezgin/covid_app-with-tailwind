import { useState } from "react";
import Card from "./components/Card";
import CoronaForCountry from "./components/CoronaForCountry";
import Header from "./components/Header";


function App() {

  const[key,setKey] = useState(1)

  return (
    <>
     <Header onMenuChange={(_key) => {
      setKey(_key)
     }}> </Header>

     <div className="md:container md:mx-auto p-8 page-content">
     {key===1 && <CoronaForCountry></CoronaForCountry> }
    
     </div>



    </>
  );
}

export default App;
