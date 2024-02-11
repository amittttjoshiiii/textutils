
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
//  import {
//    BrowserRouter as Router,
//   Routes,
//   Route,
//  } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [clr, setclr] = useState("black");
  const [Alrt, setAlrt] = useState(null);

  const showalrt = (message, type) => {
    setAlrt({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlrt(null);
    }, 2000);
  }

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      setclr('white')
      showalrt("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setclr('dark')
      showalrt("Dark Mode has been disabled", "success")
    }
  }
  let toggleModeRed = () => {
    if (mode === 'light') {
      setMode('danger')
      document.body.style.backgroundColor = '#c40834'
      setclr('white')
      showalrt("Red Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setclr('dark')
      showalrt("Red Mode has been disabled", "success")
    }
  }
  let toggleModeGreen = () => {
    if (mode === 'light') {
      setMode('success')
      document.body.style.backgroundColor = '#088e0a'
      setclr('white')
      showalrt("Green Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setclr('dark')
      showalrt("Green Mode has been disabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} txtclr={clr} />
        <Alert alert={Alrt} />
        <TextForm/>
        {/* <Routes> */}
          {/* <Route  path='/about' element={<About/>}> */}
          {/* </Route>
          <Route  path='/' element={<TextForm text="Write your text here" mode={mode} showalrt={showalrt} />}>
          </Route>
        </Routes>
      </Router> */}
    </>

  );
}

export default App;
