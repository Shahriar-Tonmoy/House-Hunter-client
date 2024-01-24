import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewHouse = () => {
  const handleNewHouse = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const city = form.city.value;
    const bedroom = form.bedroom.value;
    const bathroom = form.bathroom.value;
    const roomSize = form.roomSize.value;
    const photo = form.photo.value;
    const date = form.date.value;
    const phoneNumber = form.phoneNumber.value;

    const newHouse = {
      name,
      address,
      city,
      bedroom,
      bathroom,
      roomSize,
      photo,
      date,
      phoneNumber
    };
    form.reset();
    fetch("https://house-hunter-server-five.vercel.app/houses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newHouse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("House added successfully!");
      });
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-[#6B240C] to-[#994D1C]">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#6B240C] bg-[#F5CCA0] py-20 px-5">
            <h1 className="text-[#6B240C] text-center text-3xl font-bold">
              Add New House
            </h1>
            <form className="card-body" onSubmit={handleNewHouse}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold ">
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
                    <span className="label-text text-[#6B240C] font-bold ">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                    name="address"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold ">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                    name="city"
                    required
                    //   min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold ">
                      Bedrooms
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                    name="bedroom"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold ">
                      Bathrooms
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                    name="bathroom"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold ">
                      Room size
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                    name="roomSize"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold ">
                      Photo
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                    name="photo"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold">
                      Availability Date
                    </span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered bg-[#E48F45] text-[#6B240C]"
                    name="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#6B240C] font-bold ">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                    name="phoneNumber"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-opacity-0 border-[#6B240C] text-[#6B240C] font-extrabold hover:bg-opacity-0 w-[20%] mx-auto">
                  Add
                </button>
              </div>
            </form>
            <div className="text-center">
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewHouse;
