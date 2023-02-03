import React from "react";
import Card from "./components/Orderstatus_Card";
import Mainpage from "./components/Mainpage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  // return <Mainpage />;
  return(
<>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Mainpage></Mainpage>}></Route>
  
  
</Routes>
</BrowserRouter>


</>

  )
};
export default App;
