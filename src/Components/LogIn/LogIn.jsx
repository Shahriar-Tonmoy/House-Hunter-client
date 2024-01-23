import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LogIn = () => {

    const [users, setUsers] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [flag, setFlag] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
          .then((res) => res.json())
          .then((data) => {
            setUsers(data)
            console.log(data);
            if(data.length === 0 && flag !== 0){
                toast("Invalid Email/password");
                setFlag(0);
            }
          }
          );
      }, [email,password]);

    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setEmail(email);
        setPassword(password);
        setFlag(1);
    }
    return (
        <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-[#6B240C] to-[#994D1C]">
      <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#F5CCA0] py-20 px-5">
          <h1 className="text-[#6B240C] text-3xl font-bold text-center">
            Sign in
          </h1>
          <form className="card-body" onSubmit={handleLogIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#6B240C] font-bold">
                  Email
                </span>
              </label>
              <input
                type="email"
                className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#6B240C] font-bold">
                  Password
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-opacity-0 font-bold text-[#6B240C] border-[#6B240C] hover:bg-opacity-0 hover:border-[#6B240C]">
                Sign up
              </button>
            </div>
          </form>
          {/* <p className="text-center">Already have an account? <Link className="text-[#00ADB5] underline" to="/SignIn">Sign In</Link> here</p> */}
        </div>
      </div>
    </div>
    );
};

export default LogIn;