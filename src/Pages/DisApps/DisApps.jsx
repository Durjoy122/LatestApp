import React from 'react';
import icd from '../../assets/icd.png';
import icr from '../../assets/icr.png';
import { Link } from 'react-router-dom';

const DisApps = ({ App }) => {
    const {image,title,id,ratingAvg} = App;
    return (
      <Link to={`/cardDetails/${id}`}>
          <div className="card bg-white w-96 rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
                <figure className="px-6 pt-6">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-xl object-cover w-full h-60"
                    />
                </figure>

                <div className="p-6">
                    <h2 className="card-title text-xl font-semibold text-gray-800 mb-4">
                        {title}
                    </h2>
                    <div className="flex justify-between mt-4">
                        <div className="flex items-center bg-green-300 px-3 py-1 gap-2 text-gray-600 rounded-md">
                            <img className="w-6 h-6" src={icd} alt="" />
                            <span className="font-medium">5M</span>
                        </div>
                        <div className="flex items-center gap-2 bg-amber-400 text-white px-3 py-1 rounded-md">
                            <img className="w-5 h-5" src={icr} alt="" />
                            <span className="font-medium">{ratingAvg}</span>
                        </div>
                    </div>
                </div>
           </div>
       </Link>
    );
};

export default DisApps;