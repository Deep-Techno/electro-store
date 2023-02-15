import React from "react";
import Card from "./components/Orderstatus_Card";
import Mainpage from "./components/Mainpage";
import Singleproductdetail from "./components/Singleproductdetail";
<<<<<<< Updated upstream
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Productupload  from "./components/productupload/Productupload";
import Table from './components/product-updata-and-delete/Table';
import Updataproduct from "./components/updata-product/Updataproduct";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/:id" element={<Singleproductdetail />} />
              <Route path='/productupload' element={<Productupload></Productupload>}> </Route>
              <Route path='/admin/productinfo' element={<Table></Table>}> </Route>
              <Route path='/admin/productinfo/updata/:id' element={<Updataproduct></Updataproduct>}> </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
>>>>>>> Stashed changes
};
export default App;
