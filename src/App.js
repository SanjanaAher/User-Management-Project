import {useState} from 'react';
import  LoginForm from "./Page/Dashboard/LoginForm"
import "./Page/Dashboard/ind.css"
import './App.css';
import Dashboard  from './Page/Dashboard/Dashboard';

function App() {
  const adminUser={
    email:"admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const login = details =>{
    console.log(details);
    if(details.email === adminUser.email && details.password===adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email,
        password:details.password
      })
    }else{
      console.log("Details do not match! ")
      setError("Wrong Username or password!")
    }
  }

  const logout = () => {
    console.log("Logout")
    setUser({email:""})
  }
  return (
    <div className="gradient__bg" id='first'>
       {(user.email !== "") ? (
        <div className='welcome'>
          <div>
          <button className='log' onClick={logout}>Logout</button>
          </div>
          <Dashboard/>
         
        </div>
      ):(
        <LoginForm Login={login} error={error}/>
      )}
     
    </div>
  );
}

export default App;
