import React from "react";
import Card from "./components/Orderstatus_Card";
import Mainpage from "./components/Mainpage";
import Singleproductdetail from "./components/Singleproductdetail";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUpForm from "./components/Signup/signUpForm";
import LoginForm from "./components/Login/loginForm";

const App = () => {
  // return <Mainpage />;
  return(
<>
{/* <BrowserRouter>

<Routes>
  <Route path='/' element={<Mainpage></Mainpage>}></Route>
  <Route path='/:id' element={<Singleproductdetail></Singleproductdetail>}> </Route>
  
  
</Routes>
  </BrowserRouter>*/}
<LoginForm/>

 
<SignUpForm />


</>

  )
};
export default App;
