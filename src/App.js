import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./pages/banner";
import { Cart } from "./pages/cart";
import { useReducer } from "react";
import {initialState,reducer} from './items/items'
import { itemContext } from "./items/itemContext";


function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
  // dispatch({type:"ball-increase"})

  return (
    <div className="App">
      <itemContext.Provider value={{state,dispatch}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </itemContext.Provider>
    </div>
  );
}

export default App;
