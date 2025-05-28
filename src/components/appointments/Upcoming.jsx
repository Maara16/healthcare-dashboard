const Upcoming = ({ data }) => {
  return (
    <div className="upcoming-container">
      <h3>The Upcoming Schedule</h3>
      <div className="upcoming-appointments-container">
        {data.map((item, index) => (
          <div className="upcoming-appointments-item" key={index}>
            <p style={{color: "#9d9da8", margin: "0px"}}>On {item.day}</p>
            <div
              className="upcoming-appointments"
              //style={{ justifyContent: index === 1 ? "flex-start" : "center" }}
            >
              {item?.apppointments?.map((apppointment, apppointmentIndex) => (
                <div
                  className="upcoming-appointment-item"
                  style={{
                    width:
                      index === 0 && apppointmentIndex === 0 ? "50%" : "30%",
                  }}
                  key={apppointmentIndex}
                >
                  <div
                    className="appointments-today-header"
                  >
                    <b>{apppointment.for}</b>
                    <img
                      src={apppointment.img}
                      alt={apppointment.for}
                      className="appointments-today-icon"
                    />
                  </div>
                  <p>{apppointment.time}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
