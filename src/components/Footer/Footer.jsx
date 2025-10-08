import React from 'react';
import image from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content px-10 py-14">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                    {/* Logo Section */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <img className="w-10" src={image} alt="HERO.IO logo" />
                    <a className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        HERO.IO
                    </a>
                    <p className="text-sm text-gray-400 mt-2 md:mt-0">
                        Building creative digital experiences 🌐
                    </p>
                    </div>
                    {/* Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Services */}
                    <nav>
                        <h6 className="footer-title mb-3 text-lg font-semibold text-white">Services</h6>
                        <ul className="space-y-2">
                        <li><a className="link link-hover">Branding</a></li>
                        <li><a className="link link-hover">Design</a></li>
                        </ul>
                    </nav>

                    {/* Company */}
                    <nav>
                        <h6 className="footer-title mb-3 text-lg font-semibold text-white">Company</h6>
                        <ul className="space-y-2">
                            <li><a className="link link-hover">About us</a></li>
                            <li><a className="link link-hover">Contact</a></li> 
                        </ul>
                    </nav>

                    {/* Legal */}
                    <nav>
                        <h6 className="footer-title mb-3 text-lg font-semibold text-white">Legal</h6>
                        <ul className="space-y-2">
                            <li><a className="link link-hover">Terms of use</a></li>
                            <li><a className="link link-hover">Privacy policy</a></li>
                            <li><a className="link link-hover">Cookie policy</a></li>
                        </ul>
                    </nav>
                    </div>
                </div>  
                <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} HERO.IO — All rights reserved.
                </div>
        </footer>
    );
};

export default Footer;