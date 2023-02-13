import React from "react";
import Mainpage from "./components/Mainpage";
import Singleproductdetail from "./components/Singleproductdetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Productupload  from "./components/productupload/Productupload";

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
              
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;
