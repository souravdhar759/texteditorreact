import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

const [mode, setMode] = useState('light');
const [green, setGreen] = useState('light');
const [alert, setAlert] = useState( false);
const showalert=(message,type)=>{
  setAlert({
    message : message,
    type : type
  })
setTimeout(() => {
  setAlert(false);
}, 2000);
}

const switchmode=()=>{
  if(mode==='light'){
    setMode('dark');
  document.body.style.color='white';
  document.body.style.backgroundColor='black';
  showalert("Dark Mode Has Been Enable", "success");
  }
  else{
    setMode('light');
    document.body.style.color='black';
    document.body.style.backgroundColor='white';
    showalert("Light Mode Has Been Enable", "success");
  }
}
const switcgreen=()=>{
  if(green==='light'){
    setGreen('success');
  document.body.style.color='black';
  document.body.style.backgroundColor='lightgreen';
  showalert("Green Mode Has Been Enable", "success");
  }
  else{
    setGreen('light');
    document.body.style.color='black';
    document.body.style.backgroundColor='white';
    showalert("Light Mode Has Been Enable", "success");
  }
}

  return (
    <>
     <Router>
    <Navbar title="TextUlits" aboutText="About" mode={mode} green={green} switchmode={switchmode} switcgreen={switcgreen}/>
 
  <div className="container">

 <Switch>
          <Route path="/about">
          <About />
          </Route>

          <Route path="/">
          <Textform heading="Enter the text to analyze" showalert={showalert}/>
          </Route>
        </Switch>
        <Alert  alert={alert}/>
    </div>
   
    </Router>
    </>
  );
}

export default App;
