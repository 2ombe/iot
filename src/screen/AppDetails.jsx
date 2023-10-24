import React from 'react';
import './AppExplanation.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

function AppExplanation() {
    const navigate=useNavigate()
  return (
    <div className="app-explanation-container">
      <div className="background-image">
        <h1>Welcome to Our IoT Sensor Data App</h1>
        <button onClick={()=>navigate("/login")} className="get-started-button">Get Started</button>
        <p>
          Our app is a powerful platform designed to help farmers collect and
          analyze data from IoT sensors, ensuring optimal crop growth and
          efficient fertilizer management. We believe that data-driven farming is
          the future, and our app is here to make that future a reality for you.
        </p>
        <p>
          With our app, you can monitor soil conditions, track weather patterns,
          and receive real-time data from your sensors. We make it easy for you
          to make informed decisions, reduce waste, and increase your farm's
          productivity.
        </p>
        <p>
          Explore our user-friendly interface, and take advantage of the
          technology that empowers modern agriculture. The sky is the limit when
          it comes to what you can achieve with our IoT Sensor Data App.
        </p>
        
      </div>
    </div>
  );
}

export default AppExplanation;
