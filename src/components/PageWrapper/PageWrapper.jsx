import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const PageWrapper = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500); // spinner shows for 0.5s
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div className="relative">
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
                    <img
                        src={logo}
                        alt="loading"
                        className="w-20 h-20 animate-spin -translate-y-30"
                    />
                </div>
            )}
            {children}
        </div>
    );
};

export default PageWrapper;