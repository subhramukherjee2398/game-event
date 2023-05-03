import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

function Registration() {
  const { register, handleSubmit, reset,formState: { errors } } = useForm();
  const [newUser,setnewUser] = useState([])

  const onSubmit = ({username,email,password}) => {
    reset();
    setnewUser([...newUser,{id:uuidv4(),username,email,password}])

  };

  return (
    <div className="checkoutPage">
      <h1>Registration Form</h1>
      {console.log(newUser)}
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && <p>This field is required</p>}
        </div>
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
      </form>
    </div>
  );
}

export default Registration;
