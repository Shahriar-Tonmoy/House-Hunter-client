import React from 'react';
import { Link } from 'react-router-dom';

const OwnerDashboard = () => {
    return (
        <div className='min-h-screen bg-[#6B240C]'>
           <div className='text-center'>
            <Link to='/addnewhouse'><button className="btn bg-[#F5CCA0] text-[#6B240C] font-semibold mx-auto mt-36 hover:bg-[#E48F45]">Add New House</button></Link>
           </div>
        </div>
    );
};

export default OwnerDashboard;