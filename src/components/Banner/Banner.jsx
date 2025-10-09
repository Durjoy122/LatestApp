import React from 'react';
import googlePlay from '../../assets/googleplay.png';
import appStore from '../../assets/appstore.png';
import hero from '../../assets/hero.png';
const Banner = () => {
    return (
        <div>
            <div className="h-[280px] flex flex-col justify-center items-center gap-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">
                        We Build <br />
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Productive
                        </span>{' '}
                        Apps
                    </h1>
                    <p className="mt-4 text-gray-500">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more
                        exciting. <br /> Our goal is to turn ideas into digital experiences that truly make an impact.
                    </p>
               </div>
                <div className="flex gap-4">
                    <a
                        href="https://play.google.com/store/games?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn bg-white flex items-center gap-2">
                            <img src={googlePlay} alt="Google Play" className="h-6" />
                            Google Play
                        </button>
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn bg-white flex items-center gap-2">
                            <img src={appStore} alt="App Store" className="h-6" />
                            App Store
                        </button>
                    </a>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={hero} alt="Hero" className="w-[550px] h-auto" />
            </div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Trusted By Millions, Built For You</h2>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-6">
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-200">Total Downloads</h3>
                        <p className="text-4xl font-extrabold mt-2">29.6M</p>
                        <p className="text-sm text-gray-300 mt-1">21% More Than Last Month</p>
                    </div>

                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-200">Total Reviews</h3>
                        <p className="text-4xl font-extrabold mt-2">906K</p>
                        <p className="text-sm text-gray-300 mt-1">46% More Than Last Month</p>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-200">Active Apps</h3>
                        <p className="text-4xl font-extrabold mt-2">132+</p>
                        <p className="text-sm text-gray-300 mt-1">31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;