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
          <div className="date-item" key={index}>
            <b>{item.day}</b>
            <b>{item.date}</b>
            <div>
              {item?.slot?.map((slot, slotIndex) => (
                <div key={slotIndex}>
                  <p>{slot.time}</p>
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
