import React,{useState} from 'react'
import './ind.css'
import login from'./login.png'

function LoginForm({Login ,error}) {
    const [details,setDetails] = useState({ email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(error !== "")? ( <div className='error'>{error}</div>):""}
            <div className="login">
            <img className='img' src={login} width="300" style={{position: 'relative'}} alt="login"/>
          </div>
            <div className='form-group'>
                <label className='login' htmlFor='email'>Email:</label>
                <input type='email' name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>


            </div>
            <div className='form-group'>
                <label className='login' htmlFor='passwords'>Password:</label>
                <input type='password' name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>


            </div>
            <input className='submit-btn' type="submit" value="LOGIN"/>
            
        </div>
    </form>
  )
}

export default LoginForm