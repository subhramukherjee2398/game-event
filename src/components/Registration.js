import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Registration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [newUser, setnewUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(newUser);
    localStorage.setItem("userlist", JSON.stringify(newUser));
  }, [newUser]);

  const onSubmit = ({ username, email, password }) => {
    //reset();
    setnewUser([
      ...newUser,
      { id: uuidv4().slice(0, 8), username, email, password },
    ]);
    alert("account create successfully");
    //navigate("/");
  };

  return (
    <div className="checkoutPage">
      {console.log(newUser)}
      <h1>Registration Form</h1>
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
          {errors.username && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
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
          {errors.email && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
        </div>
        <button type="submit">Create Account</button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Registration;
