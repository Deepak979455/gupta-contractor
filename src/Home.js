import React, { useState } from "react";
import { FaBolt, FaGem, FaShieldAlt, FaPhone, FaComments, FaBuilding, FaUserPlus } from 'react-icons/fa';
import QuoteModal from './QuoteModal';
import WorkerModal from './WorkerModal';

const Home = () => {
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, service: '' });
  const [workerModal, setWorkerModal] = useState(false);
  
  return (
    <section id="home">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rotate-45"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-yellow-400 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-yellow-400 rotate-12"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Building Your <span className="text-yellow-400">Dreams</span>{" "}
                Into Reality
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                5+ years of excellence in construction, renovation, and design.
                We transform spaces with precision, quality, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setQuoteModal({ isOpen: true, service: 'General Construction' })}
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4 text-white">
                    <FaBuilding />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Quality Construction
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">500+</div>
                      <div>Projects</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">5+</div>
                      <div>Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Gupta Contractor?
            </h2>
            <p className="text-gray-600 text-lg">Excellence in every detail</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBolt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                On-time project completion with quality assurance
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGem className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Using finest materials and expert craftsmanship
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Guaranteed Work</h3>
              <p className="text-gray-600">
                5-year warranty on all construction projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919794554972" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              <FaPhone /> Call Now: +91 9794554972
            </a>
            <button 
              onClick={() => setQuoteModal({ isOpen: true, service: 'Free Consultation' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center gap-2 justify-center"
            >
              <FaComments /> Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Worker Connect Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join Our Expert Team
          </h2>
          <p className="text-xl mb-8">
            Are you a skilled worker? Connect with us for exciting opportunities!
          </p>
          <button 
            onClick={() => setWorkerModal(true)}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
          >
            <FaUserPlus /> Connect as Worker
          </button>
        </div>
      </div>
      
      <QuoteModal 
        isOpen={quoteModal.isOpen}
        onClose={() => setQuoteModal({ isOpen: false, service: '' })}
        service={quoteModal.service}
      />
      
      <WorkerModal 
        isOpen={workerModal}
        onClose={() => setWorkerModal(false)}
      />
    </section>
  );
};

export default Home;
