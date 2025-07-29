import { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    isVisible && (
      <div className="cookie-banner">
        <p>
          This site uses cookies and related technologies for site operation, analytics, and third-party advertising purposes as described in our{" "}
          <a href="/privacy-policy" target="_blank">Privacy Policy</a>. You may choose to consent to our use of these technologies, reject non-essential technologies, or manage your preferences.
        </p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    )
  );
};

export default CookieBanner;