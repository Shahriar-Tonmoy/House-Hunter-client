import React from 'react';

const House = ({ house }) => {
    const {name, address, city, bedroom, bathroom, roomSize, photo, date, phoneNumber} = house;

    return (
        
        <div>
            
            <div className="card lg:card-side bg-[#F5CCA0] shadow-xl border-2 border-[#6B240C] h-full">
            <figure className="w-1/2">
              <img  
                src={photo}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#6B240C]">{name}</h2>
              <p className="text-[#6B240C]">{address}</p>
              <p className="text-[#6B240C] font-semibold">City - {city}</p>
              <p className="font-semibold text-[#6B240C]">Bedrooms - {bedroom}</p>
              <p className="font-semibold text-[#6B240C]">Bathrooms - {bathroom}</p>
              <p className="font-semibold text-[#6B240C]">room size - {roomSize}</p>
              <p className="font-semibold text-[#6B240C]">Date - {date}</p>
              <p className="font-semibold text-[#6B240C]">Phone Number - {phoneNumber}</p>
              
              <div className="card-actions justify-start">
                {/* <Link to={`/details/${_id}`}><button className="btn bg-[#00ADB5] text-[#EEEEEE] hover:bg-green-500">Details</button></Link> */}
                
              </div>
            </div>
          </div>
        </div>
    );
};

export default House;