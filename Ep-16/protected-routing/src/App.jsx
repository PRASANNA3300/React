import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./App/Store";
import PrivateRoute from "./Components/privateRoute";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
