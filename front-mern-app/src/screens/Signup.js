import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setcredentials]=useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name , email:credentials.email, password:credentials.password,  location:credentials.geolocation})
        },)
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert('Enter Valid Credentials')
        }
       
    }

    const onChange=(event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (


    <>
    <div className='container'>
     <form onSubmit={handleSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="name" className='form-label' >Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputEmail1"  className='form-label'>Email address</label>
    <input type="email" className="form-control" id='exampleInputEmail1' area-describedby='emailHelp' name='email' value={credentials.email} onChange={onChange}/>
    <div type="emailHelp" className="form-text" >we'll never share your email with anyone else</div>
  </div>
  <div className="form-group mb-3" >
    <label htmlFor="exampleInputPassword1" className='form-label' >Password</label>
    <input type="password" className="form-control mt-3" id="exampleInputPassword1"  placeholder="Password" name='password' value={credentials.password}  onChange={onChange}/>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="exampleInputPassword1" className='form-label'>address</label>
    <input type="text" className="form-control mt-3" id="exampleInputPassword2" placeholder="address" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>

  <button type="submit" className="m-3 btn btn-success mt-3">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
</form> 
</div>
    </>
  )
}
