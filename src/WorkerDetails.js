import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaTools, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const WorkerDetails = () => {
  const workers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      phone: "+91 9876543210",
      email: "deepakgupta97945549@mail.com",
      skills: "Plumbing, Electrical",
      experience: "8 years",
      location: "South Delhi",
      status: "Available"
    },
    {
      id: 2,
      name: "Amit Singh",
      phone: "+91 9876543211",
      email: "deepakgupta97945549@mail.com",
      skills: "Construction, Masonry",
      experience: "12 years",
      location: "North Delhi",
      status: "Busy"
    },
    {
      id: 3,
      name: "Suresh Sharma",
      phone: "+91 9876543212",
      email: "deepakgupta97945549@mail.com",
      skills: "Interior Design, Painting",
      experience: "6 years",
      location: "East Delhi",
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Expert Workers</h1>
          <p className="text-xl">Meet our skilled professionals</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workers.map(worker => (
            <div key={worker.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUser className="text-3xl text-gray-600" />
                </div>
                <h3 className="text-xl font-bold">{worker.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  worker.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {worker.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-600" />
                  <a href={`tel:${worker.phone}`} className="text-blue-600 hover:underline">
                    {worker.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-600" />
                  <a href={`mailto:${worker.email}`} className="text-orange-600 hover:underline">
                    {worker.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaTools className="text-purple-600" />
                  <span className="text-gray-700">{worker.skills}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-green-600" />
                  <span className="text-gray-700">{worker.experience}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-600" />
                  <span className="text-gray-700">{worker.location}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Assign Task
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Worker */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            Add New Worker
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetails;