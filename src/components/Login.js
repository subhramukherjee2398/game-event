import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [userlist,setUserlist] = useState([])

  useEffect(()=>{
    console.log()
   let userData = JSON.parse(localStorage.getItem('userlist'));
   console.log(userData)
   setUserlist(userData)
  },[])

  const onSubmit = (data) => {
    console.log(data);

    let islogin = userlist.find((e)=>{
      return e.email === data.email && e.password === data.password
    }) 

    if(islogin){
      navigate('/gamelist')
    }else{
         alert('Please check your email and password')
    }

  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="email@example.com"
            {...register("email", { required: true })}
          />
          {errors.email && <p>This field is required</p>}
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>This field is required</p>}
        </div>
        <button type="submit">Login</button>
        <p style={{textAlign:'center',cursor:'pointer'}} onClick={()=>navigate('/registration')}>Don't have account? Create New</p>
      </form>
    </>
  );
}

export default Login;
