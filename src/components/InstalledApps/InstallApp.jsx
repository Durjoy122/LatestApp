import React from 'react';
import icon1 from '../../assets/icd.png';
import icon2 from '../../assets/icr.png';

const InstallApp = ({install , onUninstall}) => {
    return (
        <div className="ml-[40px] mr-[50px] flex items-center justify-between bg-white shadow-md hover:shadow-lg transition-all rounded-xl p-4 mb-4 border border-gray-100">
            <div className="flex items-center gap-4">
                <img
                    className="w-20 h-20 object-cover rounded-xl border border-gray-200 shadow-sm"
                    src={install.image}
                    alt={install.title}
                />
                <div>
                <h1 className="text-lg font-semibold text-gray-800">
                    {install.title}
                </h1>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <img className="w-5 h-5" src={icon1} alt="downloads" />
                        <span>5M+</span>
                    </div>

                    <div className="flex items-center gap-1">
                       <img className="w-5 h-5" src={icon2} alt="ratings" />
                       <span>{install.ratingAvg}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span>{install.size} MB</span>
                    </div>
                </div>
                </div>
            </div>
            <button 
              onClick={() => onUninstall(install.id)}
              className="btn btn-sm bg-green-500 text-white hover:bg-red-600 transition px-6 py-5 rounded-lg font-medium">
                Uninstall
            </button>
       </div>
    );
};

export default InstallApp;