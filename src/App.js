import { useState } from "react";
import Header from "./components/Header";


function App() {

  const[key,setKey] = useState(1)

  return (
    <>
     <Header onMenuChange={(_key) => {
      setKey(_key)
     }}> </Header>

     {key===1 && <div>Merhaba</div> }
     {key===2 && <div>Hey</div> }

    </>
  );
}

export default App;
