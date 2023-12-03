import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../assets/logo/logo.png";
import useUsers from "./../hooks/useUsers";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser } = useUsers();

  const onSubmit = (data) => {
    createUser(data);
    reset({});
  };

  return (
    <div className="grid grid-cols-2 mx-10 my-4 bg-slate-300 rounded-2xl">
      <div className="flex flex-col justify-center ">
        <span className="rounded-full flex items-center justify-center mb-1">
          <img src={Logo} alt="logo" className="w-16 h-16 rounded-full  " />
        </span>
        <p className="font-bold text-4xl  flex items-center justify-center">
          {" "}
          <span className="text-yellow-600">Electro</span>
          <span className="text-red-500">Hub</span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-20  border bg-slate-100 rounded-r-2xl"
      >
        <div className="mb-6">
          <h2 className="text-3xl font-bold flex justify-center mb-2 text-red-600">
            Sign up to your account
          </h2>
          <span className="text-xs flex justify-center">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-600 ms-1">
              Sign In
            </Link>{" "}
          </span>
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block font-semibold mb-1">
            Full Name
          </label>
          <input
            {...register("fullName")}
            type="text"
            id="fullName"
            placeholder="Enter full name"
            className="px-3 py-1 w-full bg-slate-300 border-slate-300 active:border-slate-500 border-2 rounded-md"
          />
          {errors.fullName && (
            <p className="text-danger">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="Enter your email"
            className="px-3 py-1 w-full bg-slate-300 border-slate-300 active:border-slate-500 border-2 rounded-md"
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-semibold mb-1">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Password"
            className="px-3 py-1 w-full bg-slate-300 border-slate-300 active:border-slate-500 border-2 rounded-md"
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-700 w-full px-5 py-2 font-semibold rounded-lg "
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
