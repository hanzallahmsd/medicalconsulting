//QuestionareViewer.jsx
import React from "react";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
const QuestionnaireViewer = (questions ) => {
    const { id } = useParams();  // Get the id from the URL
  console.log('Questionnaire ID from URL:', id);  // Log the id to ensure it's correct

  const responseData = JSON.parse(localStorage.getItem(id));
  console.log('Retrieved data from localStorage:', responseData);
  if (!responseData) {
    return <p className="text-red-500">No data found or the link has expired.</p>;
  }
  const handleOnClick = () => {
    const element = document.querySelector("#invoice");
    if (!element) {
      console.error('Element with ID "invoice" not found');
      return;
    }
  
    // Hide the button before generating the PDF
    const downloadButton = document.querySelector("button");
    if (downloadButton) {
      downloadButton.style.display = "none";
    }
  
    // Set options for the PDF generation
    const options = {
      margin: 1,
      filename: "questionnaire.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    // Generate the PDF and then show the button again
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        if (downloadButton) {
          downloadButton.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        if (downloadButton) {
          downloadButton.style.display = "block";
        }
      });
  };
  
  
  return (
    <div id="invoice" className="container mx-auto p-4">
      <button onClick={handleOnClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Download pdf
      </button>
      <h1 className="text-2xl font-bold">User Questionnaire Response</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <strong>Full Name:</strong> {responseData.fullName}
        </li>
        {/* <li>
          <strong>Email:</strong> {responseData.email}
        </li>
        <li>
          <strong>Country:</strong> {responseData.country}
        </li>
        <li>
          <strong>State:</strong> {responseData.state}
        </li>
        <li>
          <strong>City:</strong> {responseData.city}
        </li> */}
        <li>
          <strong> {responseData.Q1}</strong> {responseData.A1}
        </li>
        <li>
          <strong>{responseData.Q2}</strong> {responseData.A2}
        </li>
        <li>
          <strong>{responseData.Q3}</strong> {responseData.A3}
        </li>
       
      
        
      </ul>
    </div>
  );
};

export default QuestionnaireViewer;
