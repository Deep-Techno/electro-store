import React from "react";
import Card from "./components/Orderstatus_Card";
import Mainpage from "./components/Mainpage";
import Singleproductdetail from "./components/Singleproductdetail";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Productupload  from "./components/productupload/Productupload";
const App = () => {
  // return <Mainpage />;
  return(
<>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Mainpage></Mainpage>}></Route>
  <Route path='/:id' element={<Singleproductdetail></Singleproductdetail>}> </Route>
  <Route path='/productupload' element={<Productupload></Productupload>}> </Route>
  
  
</Routes>
</BrowserRouter>


</>

  )
};
export default App;
