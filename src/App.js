
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("success", "The Dark Mode has been enabled Successfully.")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("success", "The Light Mode has been enabled Successfully.")
    }
  }

  const [alert, setAlert] = useState(null)// most cases it wont work coz of null properties prop.alert && 
  // before any div or the property we gonna use 

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [palMode, setPalMode] = useState('primary')

  const forPalMode = () => {
    if (palMode === 'primary') {
      setPalMode('primary')
      document.body.style.backgroundColor = '#0d6efd'
      document.body.style.color = 'white'
    }

    // else if (document.getElementById('danger') === 'danger') {
    //   setPalMode('danger')
    //   document.body.style.backgroundColor = '#dc3545'
    //   document.body.style.color = 'white'
    // }

    // else if (document.getElementById('warning') === 'warning') {
    //   setPalMode('warning')
    //   document.body.style.backgroundColor = '#ffc107'
    //   document.body.style.color = 'white'
    // }

    // else if (document.getElementById('success') === 'success'){
    //   setPalMode('success')
    //   document.body.style.backgroundColor = '#198754'
    //   document.body.style.color = 'white'
    // }


  }

  const [dngMode, setDngMode] = useState('danger')

  const forDngMode = () => {
    if (dngMode === 'danger') {
      setDngMode('danger')
      document.body.style.backgroundColor = '#dc3545'
      document.body.style.color = 'white'
    }
  }
  const [warMode, setWarMode] = useState('warning')

  const forWarMode = () => {
    if (warMode === 'warning') {
      setWarMode('warning')
      document.body.style.backgroundColor = '#ffc107'
      document.body.style.color = 'white'
    }
  }

  const [sucMode, setSucMode] = useState('success')

  const forSucMode = () => {
    if (sucMode === 'success') {
      setSucMode('success')
      document.body.style.backgroundColor = '#198754'
      document.body.style.color = 'white'
    }
  }




  return (

    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} forDngMode={forDngMode} forWarMode={forWarMode} setPalMode={setPalMode} forSucMode={forSucMode} forPalMode={forPalMode} aboutText="About TextUtils" />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}/> */}
              
            
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}/> */}
              <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
            {/* </Route> */}
          {/* </Routes> */}
          {/* <About/> */}

        </div>
      {/* </Router> */}
    </>

  );
}
export default App;


