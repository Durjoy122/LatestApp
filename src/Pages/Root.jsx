import React from 'react';
import Navbar from '../components/Header/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper/PageWrapper.jsx';

const Root = () => {
    return (
        <div className="max-w-[2000px] mx-auto">
            <Navbar></Navbar>
            <PageWrapper>
                <Outlet />
            </PageWrapper>
            <Footer></Footer>
        </div>
    );
};

export default Root;