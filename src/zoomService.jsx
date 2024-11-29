import axios from "axios";
import ZOOM_CONFIG from "./zoomConfig";

// Function to generate an OAuth token using client credentials (OAuth 2.0)
const getZoomToken = async () => {
  const tokenUrl = `https://cors-anywhere.herokuapp.com/https://zoom.us/oauth/token?grant_type=client_credentials&client_id=${ZOOM_CONFIG.clientId}&client_secret=${ZOOM_CONFIG.clientSecret}`;
  
  try {
    const response = await axios.post(tokenUrl);
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Zoom token:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to create a Zoom meeting
const createZoomMeeting = async (token, meetingData) => {
  try {
    const response = await axios.post(
      `${ZOOM_CONFIG.apiUrl}/users/me/meetings`,
      meetingData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating Zoom meeting:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export { getZoomToken, createZoomMeeting };
