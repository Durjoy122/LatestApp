import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import DisApp from '../DisApp/DisApp.jsx';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="space-y-12">
            <Banner></Banner>
            <DisApp data={data}></DisApp>
        </div>
    );
};

export default Home;