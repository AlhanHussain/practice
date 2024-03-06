import React, { useState} from 'react'
import { Link , useNavigate} from 'react-router-dom';


export default function Login() {
  const [credentials, setcredentials]=useState({email:"",password:""})
  let navigate =useNavigate()
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/loginuser',{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({ email:credentials.email, password:credentials.password})
      });
      const json = await response.json()
      console.log(json);

      if(!json.success){
          alert('Enter Valid Credentials')
      }
      if(json.success){
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
          navigate("/");
      }
     

  }

  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
   
    <div>
       <form  onSubmit={handleSubmit}>
  
  <div className="form-group  m-3 mb-3">
    <label htmlFor="exampleInputEmail1"  className='form-label'>Email address</label>
    <input type="email" className="form-control" id='exampleInputEmail1' area-describedby='emailHelp' name='email' value={credentials.email }onChange={onChange} />
    <div type="emailHelp" className="form-text" >we'll never share your email with anyone else</div>
  </div>
  <div className="form-group mb-3 m-3" >
    <label htmlFor="exampleInputPassword2" className='form-label' >Password</label>
    <input type="password" className="form-control mt-3" id="exampleInputPassword2"  placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
  </div>
  

  <button type="submit" className="m-3 btn btn-success mt-3">Submit</button>
  <Link to='/createuser' className='m-3 btn btn-danger'>New User</Link>
</form> 
    </div>
  )
}
