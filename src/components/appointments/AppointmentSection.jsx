import React from "react";

const AppointmentSection = ({ data }) => {
  return (
    <div className="appointments-today">
      {data.map((item, index) => (
        <div
          className="appointments-today-item"
          style={{ width: index === 0 ? "30%" : "50%" }}
          key={index}
        >
          <div className="appointments-today-header">
            <h4>{item.for}</h4>
            <img src={item.img} alt={item.for} className="appointments-today-icon" />
          </div>
          <div>
            <p>{item.time}</p>
            <p>{item.by}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentSection;
