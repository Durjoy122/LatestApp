import { Link } from 'react-router-dom';

import { Suspense} from 'react';
import DisApps from '../DisApps/DisApps.jsx';

const DisApp = ({ data }) => {
     const limitedData = data.slice(0, 8);
    return (
        <div className="mb-12">
            <div className="flex flex-col justify-center items-center gap-1 mb-8">
                <h1 className="text-3xl font-bold"> Trending Apps </h1>
                <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                <Suspense>
                    <div className="grid ml-[80px] mr-[80px] sm:grid-cols-1 md:grid-cols-4 gap-y-6">
                        {
                            limitedData.map(App => <DisApps key={App.id} App={App}></DisApps>)
                        }
                    </div>
                </Suspense>
            </div>
            <div className="flex justify-center mt-8">
                <Link
                    to="/apps"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition inline-block"
                >
                    Show All Apps
                </Link>
            </div>
        </div>
    );
};

export default DisApp;