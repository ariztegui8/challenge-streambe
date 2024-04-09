import { useState } from "react";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";


const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token") || '')
  const [nameUser, setNameUser] = useState('')

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken('')
    setNameUser('')
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} setNameUser={setNameUser} />} />
        {token ? 
           <Route path="/dashboard" element={<Dashboard handleLogout={handleLogout} nameUser={nameUser} />} />
           :
           <Route path="*" element={<Login setToken={setToken} setNameUser={setNameUser} />} />

        }
       
      </Routes>
    </Router>
  )
}

export default App