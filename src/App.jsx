import { useState } from "react";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";


const App = () => {

  const [token, setToken] = useState('')
  console.log('token', token);

  return (
    <div>
      <Login  setToken={setToken}/>
      {/* <Dashboard /> */}
    </div>
  )
}

export default App