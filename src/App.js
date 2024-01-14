import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/header";
import { Cart } from "./pages/cart";
import { useReducer } from "react";
import {initialState,reducer} from './components/items/items'
import { itemContext } from "./components/items/itemContext";
import { Footer } from "./components/footer/footer";

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
  // dispatch({type:"ball-increase"})

  return (
    <div className="App">
      <itemContext.Provider value={{state,dispatch}}>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </Router>
      </itemContext.Provider>
    </div>
  );
}

export default App;
