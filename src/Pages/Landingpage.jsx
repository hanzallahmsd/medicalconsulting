import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPills,
  faHeartbeat,
  faCapsules,
  faSyringe,
  faUserCheck,
  faFileAlt,
  faSmokingBan,
  faHeart,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle mouse enter and leave for the "Services" link
  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  return (
    <div>
       <Header
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isDropdownVisible={isDropdownVisible}
      />
     

      <main className="relative">
        <section className="flex overflow-x-auto space-x-4 h-[600px]">
          <div className="relative flex-none w-full h-full">
            <img
              src="https://media.istockphoto.com/id/2158054172/photo/asian-caregiver-nurse-wearing-blue-scrubs-explains-a-medical-procedure-and-medical-record-to.jpg?s=1024x1024&w=is&k=20&c=AfcfGrWa3n5FXmWJc6r82ZWTaZWL0Mrw8BRGrEJ1zGI=" // Replace with your image URL
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 text-white">
              <div>
                <h2 className="text-3xl font-bold">
                  Trusted Medical Care Center
                </h2>
                <p className="text-lg mt-2">
                  WE OFFER MEDICAL HOME CONSULTING SERVICE AND MORE.
                </p>
                <button className="mt-4 px-8 py-4 font-bold  bg-blue-600 text-white text-md  hover:bg-blue-500">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex-none w-full h-full">
            <img
              src="https://media.istockphoto.com/id/1237592470/photo/doctor-using-digital-tablet-for-explaining-medication-to-woman-patient-in-his-office-at.jpg?s=1024x1024&w=is&k=20&c=HZcrTg4zA-YBDa_HnhOHu23fd4p3QPx3zAca_Qn_n5M=" // Replace with your image URL
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 text-white">
              <div>
                <h2 className="text-3xl font-bold">
                  Trusted Medical Care Center
                </h2>
                <p className="text-lg mt-2">
                  WE OFFER MEDICAL HOME CONSULTING SERVICE AND MORE.
                </p>
                <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* Add more images as needed */}
          <div className="relative flex-none w-full h-full">
            <img
              src="https://media.istockphoto.com/id/1237592473/photo/doctor-using-digital-tablet-for-explaining-medication-to-woman-patient-in-his-office-at.jpg?s=1024x1024&w=is&k=20&c=FF9HPL2ZbBTCH6ET6UgcGvQWzKCYHTYQsTbvornM0dM=" // Replace with your image URL
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 text-white">
              <div>
                <h2 className="text-3xl font-bold">
                  Trusted Medical Care Center
                </h2>
                <p className="text-lg mt-2">
                  WE OFFER MEDICAL HOME CONSULTING SERVICE AND MORE.
                </p>
                <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-section bg-gray-100 p-8"
          style={{ backgroundColor: " #f8f8f8" }}
        >
          <div className="container mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#de5445" }}
            >
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon icon={faPills} className="text-xl" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Medication Counselling
                </h3>
                <p className="text-gray-700">
                  Our pharmacists offer patient counseling on proper medication
                  use, including dosage, administration, potential side effects,
                  and interactions with other medications.
                </p>
              </div>

              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon icon={faHeartbeat} className="text-xl" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Chronic Disease Management
                </h3>
                <p className="text-gray-700">
                  We assist in managing chronic diseases such as diabetes,
                  hypertension, and asthma by providing education, monitoring,
                  and support to help patients manage their conditions
                  effectively.
                </p>
              </div>

              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon icon={faCapsules} className="text-xl" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Medication Management
                </h3>
                <p className="text-gray-700">
                  Our pharmacists assess and manage medication therapy, conduct
                  medication reviews, identify drug therapy problems, and
                  provide recommendations to optimize therapy.
                </p>
              </div>

              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon icon={faSyringe} className="text-xl" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Vaccinations and Immunizations
                </h3>
                <p className="text-gray-700">
                  Our pharmacists are authorized to administer a variety of
                  vaccinations, including flu shots, travel vaccines, and other
                  routine immunizations recommended by public health
                  authorities.
                </p>
              </div>

              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="text-white text-xl"
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Patient Assessment and Screening
                </h3>
                <p className="text-gray-700">
                  Before administering an injection, pharmacists conduct a brief
                  assessment of the patient's medical history, current health
                  status, and any contraindications or precautions.
                </p>
              </div>

              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Documentation and Reporting
                </h3>
                <p className="text-gray-700">
                  We document the administration of injections, including
                  details such as the type of vaccine, dosage, lot number, and
                  injection site, and may report immunization data to public
                  health authorities.
                </p>
              </div>

              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon icon={faSmokingBan} className="text-xl" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Smoking Cessation Program
                </h3>
                <p className="text-gray-700">
                  Many pharmacies offer smoking cessation programs, counseling,
                  and nicotine replacement therapy. Inquire at your local
                  pharmacy about available options.
                </p>
              </div>

              <div className="service-item p-4 bg-white rounded-lg shadow-lg">
                <div className="service-icon bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto">
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#de5445" }}
                >
                  Cardiovascular Program
                </h3>
                <p className="text-gray-700">
                  This program is available to patients in Ontario who have both
                  high blood pressure and high cholesterol, have extended health
                  coverage with Green Shield Canada, and are under 65 years of
                  age.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
            <Link
            to="/services"
           
          >
              <button className="bg-blue-600 font-bold  text-white py-3 px-8 text-md hover:bg-blue-500 transition duration-300  rounded-full">
                Make an Appointment
              </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="todo-checklist-section bg-gray-100 p-8">
  <div className="container mx-auto text-center">
    <h2
      className="text-4xl font-bold mb-6"
      style={{ color: "#de5445" }}
    >
      To Do Checklist
    </h2>

    {/* Responsive Flexbox: Stacking on Small Screens */}
    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
      {/* First Checklist Item: Phone Icon */}
      <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <FontAwesomeIcon
          icon={faPhoneAlt}
          className="text-blue-500 text-4xl"
        />
        <p className="text-xl text-gray-700">
          Call your local pharmacist to schedule a MedsCheck appointment.
        </p>
      </div>

      {/* Second Checklist Item: Pills Icon */}
      <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <FontAwesomeIcon
          icon={faPills}
          className="text-blue-500 text-4xl"
        />
        <p className="text-xl text-gray-700">
          Bring ALL of your medications to your MedsCheck appointment.
          Medications include: prescriptions and non-prescriptions, herbal products, vitamins, ear or eye drops, inhalers, sprays, and patches.
        </p>
      </div>

      {/* Third Checklist Item: File Icon */}
      <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-blue-500 text-4xl"
        />
        <p className="text-xl text-gray-700">
          Bring the MedsCheck form that the pharmacist completed as well as all the medications that you take at home to your doctor.
        </p>
      </div>
    </div>
  </div>
</section>


        <section className="flex flex-col md:flex-row items-center justify-between p-14 ">
        <div className="w-full md:w-1/2 text-center md:text-left relative">

  <img
    src="https://plus.unsplash.com/premium_photo-1661768289109-c814be8d7c3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Doctor Consultation"
    className="w-full h-auto rounded-lg shadow-lg"
  />
  
  
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Book Now</h2>

  {/* Button with Dropdown */}
  <div className="relative group inline-block">
  <Link
            to="/services"
           
          >
    <button className="bg-blue-500 text-white py-3 px-6 font-bold hover:bg-blue-400 rounded-md">
      Select Service 
      <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-sm" />
    </button>
    </Link>
    {/* Dropdown Menu */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-44 bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-300">
  <ul>
    <li className="px-4 py-2 hover:text-gray-300 cursor-pointer">Minor Ailments Booking</li>
    <li className="px-4 py-2 hover:text-gray-300 cursor-pointer">Medscheck Services Booking</li>
    <li className="px-4 py-2 hover:text-gray-300 cursor-pointer">Smoking Cessation Booking</li>
    <li className="px-4 py-2 hover:text-gray-300 cursor-pointer">Injections Services Booking</li>
  </ul>
</div>

  </div>
</div>

</div>


  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
    <h2 className="text-3xl font-bold mb-6" style={{ color: "#de5445" }}>Get Right Health Care Book With Your Doctor</h2>

    <p className="mb-6 text-lg text-gray-700">
      At United Medical Consulting, we tackle complex medical cases
      head-on. Our experienced team collaborates to find innovative
      solutions, whether it’s a rare condition, a challenging diagnosis,
      or a multifaceted treatment plan. Our approach combines
      evidence-based medicine, cutting-edge technology, and
      compassionate patient support.
    </p>
  </div>
</section>
<section className=" text-white py-8"style={{ backgroundColor: "#de5445" }}>
  <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
  
    <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold">
        Book Your Appointment To Get Quality Services From Us!
      </h2>
    </div>

  
    <div className="md:w-1/2 text-center md:text-right ">
    <Link
            to="/services"
           
          ><button className="bg-transparent border border-white text-white py-4 px-8 rounded-md transition duration-300 hover:bg-blue-500 hover:border-blue-500">
        Online Appointment
      </button>
      </Link>
    </div>
  </div>
</section>


      </main>
     
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
  <div className="container mx-auto px-4">
    {/* Footer Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1: Logo and Description */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#de5445" }}>
          United Medical Consulting
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Dedicated to delivering personalized medical solutions and exceptional healthcare services. Your health, our priority.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h3 className="text-xl text-center md:text-left font-semibold mb-4" style={{ color: "#de5445" }}>
          Quick Links
        </h3>
        <ul className="space-y-2 text-center md:text-left">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Contact Details */}
      <div className="text-center md:text-right">
        <h3 className="text-xl font-semibold mb-4" style={{ color: "#de5445" }}>
          Contact Us
        </h3>
        <ul className="space-y-2">
          <li className="text-gray-600">Phone: 1-877-431-3456</li>
          <li className="text-gray-600">Email: umcg.group@gmail.com</li>
          <li className="text-gray-600">Address: 42 Tuxedo Ct, Scarborough
</li>
        </ul>
      </div>
    </div>

    {/* Footer Divider */}
    <hr className="my-8 border-gray-300" />

    {/* Footer Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
        © 2024 United Medical Consulting. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12.07a10 10 0 10-10 10 10 10 0 0010-10zm-9-5.93a1.07 1.07 0 111.07 1.07 1.07 1.07 0 01-1.07-1.07zm2 11.7a1.1 1.1 0 01-.83.4h-2.4a1.08 1.08 0 01-1-1V11h1.1v5.07h1.07v-5.57h1.1v5.57h1.1z" />
          </svg>
          Facebook
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.7 8.7a8.3 8.3 0 00-1.8-1.5A7.5 7.5 0 0012 6a7.5 7.5 0 00-8 1.2 8.3 8.3 0 00-1.8 1.5v1.5a7.3 7.3 0 00.8 4A6.6 6.6 0 003.4 16v.3a2.3 2.3 0 00-.7 1.6 2.4 2.4 0 002.4 2.4h16.2a2.4 2.4 0 002.4-2.4 2.3 2.3 0 00-.7-1.6v-.3a6.6 6.6 0 00-.7-1.8 7.3 7.3 0 00.8-4v-1.5z" />
          </svg>
          Twitter
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm8 8h-2v5h-2v-5H9v-2h2V9a3 3 0 013-3h2v2h-2a1 1 0 00-1 1v2h3v2z" />
          </svg>
          Instagram
        </a>
      </div>
    </div>
  </div>
</footer>





    </div>
  );
};

export default LandingPage;
