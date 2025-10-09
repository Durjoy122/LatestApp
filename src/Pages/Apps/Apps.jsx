import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisApps from '../DisApps/DisApps.jsx';
import AppNotFound from '../../assets/AppNotFound.png';

const Apps = () => {
    const data = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredApps = Array.isArray(data)
        ? data.filter(app =>
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : [];

    return (
        <div className="mb-12 mt-8">
            {filteredApps.length === 0 ? (
                <div>
                    <img className="mx-auto mt-20" src={AppNotFound} alt="No Apps Found" />
                </div>
            ) : (
                 <div>
                    <div className="flex flex-col justify-center items-center gap-1 mb-8">
                        <h1 className="text-3xl font-bold">Our All Applications</h1>
                        <p className="text-gray-500">Explore All Apps on the Market developed by us</p>
                    </div>
                    <div className="flex items-center justify-between mb-5 ml-[20px] mr-[20px]">
                        <p className="text-gray-700 ml-[65px] font-medium">Apps Found: {filteredApps.length}</p>
                        <input
                            type="text"
                            placeholder="Search Apps"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 mr-[111px] border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <div className="grid ml-[80px] mr-[80px] sm:grid-cols-1 md:grid-cols-4 gap-y-6">
                        {filteredApps.map(app => <DisApps key={app.id} App={app} />)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Apps;