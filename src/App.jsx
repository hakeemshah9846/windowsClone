// import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LockScreen from "./Pages/lockscreen";
import Main from "./Pages/Main";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<LockScreen />} />
          <Route path='/:name' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
