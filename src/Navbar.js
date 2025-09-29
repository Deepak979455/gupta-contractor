import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars, FaUserPlus } from 'react-icons/fa';
import Logo from './Logo';
import WorkerModal from './WorkerModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [workerModal, setWorkerModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <div className="p-1 bg-white/10 rounded-full">
              <Logo className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Gupta Contractor
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors duration-200 font-medium">Home</Link>
            <Link to="/services" className="hover:text-blue-200 transition-colors duration-200 font-medium">Services</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors duration-200 font-medium">About</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors duration-200 font-medium">Contact</Link>
            <button 
              onClick={() => setWorkerModal(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors flex items-center gap-2 font-medium"
            >
              <FaUserPlus /> Connect Worker
            </button>
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 rounded-lg text-black text-sm w-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-blue-200 transition-colors duration-200 font-medium py-2">Home</Link>
              <Link to="/services" className="hover:text-blue-200 transition-colors duration-200 font-medium py-2">Services</Link>
              <Link to="/about" className="hover:text-blue-200 transition-colors duration-200 font-medium py-2">About</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors duration-200 font-medium py-2">Contact</Link>
              <button 
                onClick={() => setWorkerModal(true)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors flex items-center gap-2 font-medium mt-2"
              >
                <FaUserPlus /> Connect Worker
              </button>
              <form onSubmit={handleSearch} className="flex items-center space-x-2 mt-4">
                <input 
                  type="text" 
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      
      <WorkerModal 
        isOpen={workerModal}
        onClose={() => setWorkerModal(false)}
      />
    </nav>
  );
};

export default Navbar;