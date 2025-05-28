import { ArrowLeft, ArrowRight } from "lucide-react";
import "./style.css";
const CalendarSection = ({ data }) => {
  return (
    <div className="appointments-calendar">
      <div className="appointments-calendar-header">
        <h3>October 2021</h3>
        <div>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className="date-section">
        {data.map((item, index) => (
          <div
            className= {item.date === "27" ? "date-item-active" : "date-item"}
            // style={{
            //   backgroundColor:
            //     item.date === "27" ? "rgba(184, 176, 176, 0.2)" : "transparent",
            //   borderRadius: "25px",
            //   height: "165px",
            //   transition: "all 0.3s ease", // Smooth hover/state changes
            // }}
            key={index}
          >
            <b>{item.day}</b>
            <b>{item.date}</b>
            <div>
              {item?.slot?.map((slot, slotIndex) => (
                <div key={slotIndex}>
                  <p
                    style={{
                      backgroundColor: slot.app ? "var(--quaternary)" : "",
                      color: slot.app ? "#fff" : "",
                      padding: "5px",
                      borderRadius: "10px",
                      margin: 0,
                    }}
                  >
                    {slot.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSection;
