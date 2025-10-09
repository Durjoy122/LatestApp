import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { getStoredApp, removeFromStoredDB } from '../../utility/addToDb';
import InstallApp from '../../components/InstalledApps/InstallApp';
import { FaCaretDown } from "react-icons/fa";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Installation = () => {
    const data = useLoaderData();
    const [installation, setInstallation] = useState([]);
    const [sort, setSort] = useState("");

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id));
        const myReadList = data.filter(app => convertedStoredApps.includes(app.id));
        setInstallation(myReadList);
    }, [data]);

    const handleUninstall = (id) => {
        MySwal.fire({
            title: "App Uninstalled",
            icon: "success",
            draggable: true
        });
        removeFromStoredDB(id);
        const updatedList = installation.filter(app => app.id !== id);
        setInstallation(updatedList);
    };

    const handleSort = (type) => {
        MySwal.fire(`Sorted by ${type.charAt(0).toUpperCase() + type.slice(1)}`);
        setSort(type);
        if(type === "size") {
            const sortedBySize = [...installation].sort((a, b) => a.size - b.size);
            setInstallation(sortedBySize);
        }
        if(type === "ratings") {
            const sortedByRating = [...installation].sort((a, b) => a.ratingAvg- b.ratingAvg);
            setInstallation(sortedByRating);
        }
    }

    return (
        <div className="mb-[220px]">
            {installation.length > 0 ? (
                <>
                    <div className="flex flex-col justify-center items-center gap-1 mb-8 mt-5">
                        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
                        <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center rounded-xl px-6 py-4 mb-6">
                        <h1 className="text-lg font-semibold text-gray-700 ml-[24px]">
                            Total Apps: <span className="text-blue-600">{installation.length}</span>
                        </h1>
                        <details className="dropdown dropdown-end">
                            <summary className="btn btn-outline btn-sm text-gray-700 w-40 px-3 py-2 text-sm hover:bg-blue-500 mr-8 hover:text-white transition flex items-center justify-between">
                                    Sort By {sort ? `: ${sort}` : ""} 
                                    <FaCaretDown className="ml-2" />
                            </summary>
                            <ul className="menu dropdown-content bg-white border border-gray-200 rounded-lg shadow-md w-44 p-2 mt-1">
                                <li>
                                    <a onClick={() => handleSort("ratings")} className="hover:bg-blue-100 rounded-md px-2 py-1 cursor-pointer">
                                        Ratings 
                                    </a>
                                    <a onClick={() => handleSort("size")} className="hover:bg-blue-100 rounded-md px-2 py-1 cursor-pointer">
                                        Size  
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </div>

                    <div>
                        {installation.map(app => (
                            <InstallApp key={app.id} install={app} onUninstall={handleUninstall} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center text-center mt-20 mb-16">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
                        alt="No apps"
                        className="w-40 h-40 mb-6 opacity-80"
                    />
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">
                        No Apps Installed
                    </h2>
                    <p className="text-gray-500 mb-6">
                        You haven’t installed any apps yet. Explore and install your favorite ones!
                    </p>
                    <Link to="/apps">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                            Browse Apps
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Installation;