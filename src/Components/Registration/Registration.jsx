import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleNewUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = form.role.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = {
      name,
      role,
      phone,
      email,
      password,
    };
    form.reset();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("User created successfully");
        setTimeout(() => {
            navigate("/")
            location.reload();
          }, 2000)
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-[#6B240C] to-[#994D1C]">
      <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#F5CCA0] py-20 px-5">
          <h1 className="text-[#6B240C] text-3xl font-bold text-center">
            Registration
          </h1>
          <form className="card-body" onSubmit={handleNewUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#6B240C] font-bold">
                  Name
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#6B240C] font-bold">
                  Role
                </span>
              </label>
              <select
                name="role"
                className="select select-info border-none focus:outline-none w-full bg-[#E48F45] text-[#6B240C] font-semibold  max-w-xs"
              >
                <option className="bg-orange-300 text-[#6B240C] font-semibold">
                  House Owner
                </option>
                <option className="bg-orange-100 text-[#6B240C] font-semibold">
                  House Renter
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#6B240C] font-bold">
                  Phone Number
                </span>
              </label>
              <input
                type="tel"
                className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                name="phone"
                required
              />
            </div>
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

export default Registration;
