// import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LockScreen from "./Pages/lockscreen";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<LockScreen />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
