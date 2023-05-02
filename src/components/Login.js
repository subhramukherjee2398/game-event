import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
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
        <button onClick={()=>navigate('/registration')}> Signin</button>
      </form>
    </>
  );
}

export default Login;
