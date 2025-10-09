import { useParams , useLoaderData } from 'react-router-dom';
import icon1 from '../../assets/icd.png';
import icon2 from '../../assets/icr.png';
import review from '../../assets/review.png';
import { addToStoredDB } from '../../utility/addToDb';

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const CardDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const app = data.find(item => item.id === appId);
    const appRatings = app.ratings;
    const handleMarkAsRead = (appId) => {
        addToStoredDB(appId);
    }
    return (
        <div className="bg-gray-100">
            <div className="flex flex-col shadow-md md:flex-row items-center md:items-start gap-20 p-10 bg-gradient-to-br ml-[70px] mb-[30px]
            to-gray-100 rounded-2xl transition-all duration-300">
                <div className="flex justify-center md:justify-start">
                    <img
                        className="w-[280px] h-[280px] object-cover rounded-2xl shadow-md border border-gray-200"
                        src={app.image}
                        alt={app.title}
                    />
                </div>  
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-1">{app.title}</h1>
                        <h2 className="text-lg text-gray-600 mb-6">
                            Developed by:{" "}
                            <span className="font-semibold text-blue-600">{app.companyName}</span>
                        </h2>    
                        <div className="w-357 h-[3px] bg-gray-200 rounded-full mt-3 mb-6"></div>
                        <div className="flex flex-wrap gap-12 mt-4">
                            <div className="flex flex-col items-center text-center">
                                <img className="w-6 h-6 mb-1" src={icon1} alt="Downloads" />
                                <h3 className="text-sm font-medium text-gray-500">Downloads</h3>
                                <p className="font-bold text-[30px] text-gray-800">5M+</p>  
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img className="w-6 h-6 mb-1" src={icon2} alt="Ratings" />
                                <h3 className="text-sm font-medium text-gray-500">Average Rating</h3>
                                <p className="font-bold text-[30px] text-yellow-500">{app.ratingAvg} ★</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img className="w-6 h-6 mb-1" src={review} alt="Reviews" />
                                <h3 className="text-sm font-medium text-gray-500">Total Reviews</h3>
                                <p className="font-bold text-[30px] text-gray-800">{app.reviews.toString().slice(0, 2)}K</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleMarkAsRead(appId)} className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 
                        rounded-xl font-semibold shadow-md 
                        hover:scale-105 hover:shadow-lg">
                            Download Now ({app.size} MB)
                        </button> 
                    </div>
                </div>
            </div>
            {/* Line Chart section */}
            <div className="bg-gray-100 shadow-md rounded-xl p-6 mt-8">
                <h2 className="text-xl ml-[40px] font-semibold mb-4 text-gray-700">Ratings</h2>
                <div className="w-full h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                                    layout="vertical"
                                    data={appRatings}
                                    margin={{
                                    top: 20,
                                    right: 40,
                                    bottom: 20,
                                    left: 20,
                                }}
                        >
                                <CartesianGrid stroke="#f0f0f0" />
                                <XAxis type="number" tick={{ fill: "#6B7280" }} />
                                <YAxis
                                dataKey="name"
                                type="category"
                                scale="band"
                                tick={{ fill: "#6B7280", fontWeight: 500 }}
                                width={70}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #e5e7eb",
                                }}  
                            />
                            <Bar dataKey="count" barSize={24} radius={[0, 10, 10, 0]}>
                                {appRatings.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill="#FFA500" />
                                ))}
                            </Bar>
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className = "mt-10 p-10">
                <h2 className="text-xl ml-[30px] font-semibold mb-4 text-gray-700">Description</h2>
                <p className="text-gray-600 text-lg ml-[30px] mr-[40px]">{app.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;