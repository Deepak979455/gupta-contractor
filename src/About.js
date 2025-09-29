import React from "react";
import {
  FaAward,
  FaUsers,
  FaTools,
  FaHandshake,
  FaHistory,
  FaCertificate,
  FaHeart,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Gupta Contractor</h1>
          <p className="text-xl">
            Building Dreams, Creating Legacies Since 2019
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
              <FaHistory className="text-blue-600" />
              Our Journey
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Gupta Contractor was founded in 2019 by Mr. Deepak Gupta Gupta
              with a simple vision: to provide honest, quality construction
              services to families and businesses in New Delhi. What started as
              a one-man operation has grown into a trusted construction company
              with over 50 skilled professionals.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Over the past 5 years, we have completed more than 500 successful
              projects, ranging from residential homes to commercial complexes.
              Our commitment to excellence has earned us the trust of thousands
              of satisfied customers.
            </p>
            <p className="text-gray-600 text-lg">
              Today, we are proud to be one of New Delhi's most reliable
              construction partners, known for our integrity, craftsmanship, and
              customer-first approach.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our Achievements
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-4xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Expert Workers</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Excellence */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
              <FaAward className="text-4xl text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Quality Workmanship</h3>
              <p className="text-gray-600">
                We use only premium materials and follow strict quality
                standards in every project.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
              <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our skilled professionals bring decades of combined experience
                to your project.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
              <FaTools className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Modern Equipment</h3>
              <p className="text-gray-600">
                We invest in the latest tools and technology for efficient,
                precise construction.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
              <FaHandshake className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen, understand, and
                deliver beyond expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <FaHeart className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional construction services that exceed client
              expectations while maintaining the highest standards of quality,
              safety, and integrity. We build not just structures, but lasting
              relationships.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <FaCertificate className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and preferred construction partner in New
              Delhi, known for innovation, reliability, and excellence. We
              envision a future where every project contributes to building
              better communities.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <FaHandshake className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• Integrity in all our dealings</li>
              <li>• Quality without compromise</li>
              <li>• Customer satisfaction first</li>
              <li>• Continuous improvement</li>
              <li>• Environmental responsibility</li>
              <li>• Fair and transparent pricing</li>
            </ul>
          </div>
        </div>

        {/* Founder Message */}
        <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-8 rounded-2xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Message from Our Founder
            </h2>
            <img
              src="/images/PIC.jpg"
              alt="Mr. Deepak Gupta - Founder"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-blue-600 flex items-center justify-center border-4 border-white shadow-lg" style={{display: 'none'}}>
              <span className="text-white text-2xl font-bold">DG</span>
            </div>
            <h3 className="text-xl font-semibold">Mr. Deepak Gupta</h3>
            <p className="text-gray-600">Founder & Managing Director</p>
          </div>
          <blockquote className="text-lg text-gray-700 italic text-center max-w-4xl mx-auto">
            "When I started Gupta Contractor 5 years ago, I had one simple
            belief: every family deserves a home built with care, honesty, and
            expertise. Today, as I see the smiles on our customers' faces when
            they receive their dream homes, I know we're on the right path. Our
            success is measured not just in projects completed, but in
            relationships built and trust earned."
          </blockquote>
        </div>

        {/* Certifications & Awards */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            Certifications & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaCertificate className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Licensed Contractor</h3>
              <p className="text-gray-600">
                Fully licensed and insured construction company in New Delhi
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaAward className="text-4xl text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">
                Recognized for outstanding quality and customer service
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaUsers className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Choice</h3>
              <p className="text-gray-600">
                Preferred contractor with 98% customer satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
