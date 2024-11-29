//ServicePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faSmokingBan, faBookMedical } from "@fortawesome/free-solid-svg-icons";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate(); 

  const services = {
    "Minor Ailments": ["Morning Sickness", "Heartburn", "Allergy"],
    "Smoking Cessation": [ "Nicotine Replacement Therapy","Behavioral Support","Prescription Method",],
    "Diabetic Education": ["Blood Sugar Management","Nutrition Counseling", "Lifestyle Management",],
  };

  const handleServiceClick = (service) => {
    setSelectedService(selectedService === service ? null : service); // Toggle the service
  };

  const handleOptionClick = (option) => {
    navigate("/bookingpage", { state: { selectedService, selectedOption: option } });

  };
  

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: "#f49e1e" }}>
          Services
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Select Services to Book Appointment
        </h2>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Minor Ailments Service */}
          <div
            onClick={() => handleServiceClick("Minor Ailments")}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 group transition-all cursor-pointer"
          >
            <div className="text-orange-500 text-5xl mb-4">
              <FontAwesomeIcon icon={faStethoscope} className="group-hover:text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600">
              Minor Ailments
            </h3>
            <p className="mt-2 text-gray-700">
              Receive consultation and treatment for minor health concerns.
            </p>
          </div>

          {/* Smoking Cessation Service */}
          <div
            onClick={() => handleServiceClick("Smoking Cessation")}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 group transition-all cursor-pointer"
          >
            <div className="text-red-500 text-5xl mb-4">
              <FontAwesomeIcon icon={faSmokingBan} className="group-hover:text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600">
              Smoking Cessation
            </h3>
            <p className="mt-2 text-gray-700">
              Receive support to quit smoking and improve your health.
            </p>
          </div>

          {/* Diabetic Education Service */}
          <div
            onClick={() => handleServiceClick("Diabetic Education")}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 group transition-all cursor-pointer"
          >
            <div className="text-blue-500 text-5xl mb-4">
              <FontAwesomeIcon icon={faBookMedical} className="group-hover:text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">
              Diabetic Education
            </h3>
            <p className="mt-2 text-gray-700">
              Learn how to manage diabetes with professional guidance.
            </p>
          </div>
        </div>

        {/* Options Section */}
        {selectedService && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#f49e1e" }}>
              {selectedService} Options:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {services[selectedService].map((option, index) => (
                <li
                  key={index}
                  className="mb-2 cursor-pointer text-blue-500 hover:underline"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default ServicePage;
