import { useForm } from "react-hook-form";

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            name="email"
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
    </>
  );
}

export default Registration;
