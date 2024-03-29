import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider, { AuthContext } from '../../AuthProvider/AuthProvider';

export const LoginAuthContext = createContext(null);

const LogIn = () => {

    const navigate = useNavigate();
    const {SignInUser} = useContext(AuthContext);
    const [users, setUsers] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [flag, setFlag] = useState(0);

    useEffect(() => {
        fetch(`https://house-hunter-server-five.vercel.app/users?email=${email}&password=${password}`)
          .then((res) => res.json())
          .then((data) => {
            setUsers(data)
            console.log(data);
            if(data.length === 0 && flag !== 0){
                toast("Invalid Email/password");
                setFlag(0);
            }
            else if(data.length!== 0){
                toast("login Successfully");
                setTimeout(() => {
                navigate("/")
                //location.reload();
                console.log(flag);
              }, 2000);
            }
          }
          );
      }, [email,password,flag,navigate]);

    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const userEmail = form.email.value;
        const password = form.password.value;

        SignInUser(userEmail);

        setEmail(userEmail);
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
                Log In
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