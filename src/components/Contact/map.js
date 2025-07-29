import React from "react";

const Map = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.434296140658!2d-121.38738692432031!3d38.79904515250182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b245b1060a761%3A0x4432a072aeaf4a4d!2s424%20Fuchsia%20Ct%2C%20Roseville%2C%20CA%2095747%2C%20USA!5e1!3m2!1sen!2s!4v1734054198679!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
