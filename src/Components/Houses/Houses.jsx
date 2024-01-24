import React, { useEffect, useState } from 'react';
import House from '../House/House';

const Houses = () => {

    const [houses, setHouses] = useState([]);
    const [city, setCity] = useState('');
    useEffect(() => {
        fetch(`https://house-hunter-server-five.vercel.app/houses?city=${city}`)
          .then((res) => res.json())
          .then((data) => setHouses(data));
      }, [city]);
      const handleCitySearch = e => {
        e.preventDefault();
        const searchedCity = e.target.city.value;
        setCity(searchedCity);
      }
    return (

        <div className="min-h-screen bg-[#6B240C]">
            <div className='text-center'>
             <form action="" onSubmit={handleCitySearch}>
             <input
                type="text"
                className="input input-bordered focus:outline-none text-[#6B240C] font-semibold bg-[#E48F45]"
                name="city"
              />
            <button className="btn bg-[#F5CCA0] text-[#6B240C] font-semibold mx-auto mt-36 hover:bg-[#E48F45]">Filter with city</button>
             </form>   
           </div>
      <div className="flex flex-col">
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#E48F45]">
        All Houses
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto mt-10 mb-16">
        {houses.map((house) => (
          <House
            key={house._id}
            house={house}
          ></House>
        ))}
      </div>
    </div>
    );
};

export default Houses;