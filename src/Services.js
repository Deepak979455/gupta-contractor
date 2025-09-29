import React from 'react';
import { FaBuilding, FaHammer, FaHome, FaWrench, FaBolt, FaWarehouse } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Construction",
      description: "Complete building construction from foundation to finishing",
      icon: <FaBuilding className="text-blue-600" />
    },
    {
      title: "Renovation",
      description: "Transform your existing space with modern upgrades",
      icon: <FaHammer className="text-orange-600" />
    },
    {
      title: "Interior Design",
      description: "Beautiful and functional interior solutions",
      icon: <FaHome className="text-purple-600" />
    },
    {
      title: "Plumbing",
      description: "Professional plumbing installation and repairs",
      icon: <FaWrench className="text-green-600" />
    },
    {
      title: "Electrical Work",
      description: "Safe and reliable electrical services",
      icon: <FaBolt className="text-yellow-600" />
    },
    {
      title: "Roofing",
      description: "Quality roofing solutions and maintenance",
      icon: <FaWarehouse className="text-red-600" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;