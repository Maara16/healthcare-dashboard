import { ArrowRight } from "lucide-react";
import human from "../../assets/human-body-frontal.png";
import ActivityChart from "./Activity";
import { barHeights, days } from "../../data/dashboard";
const HumanAnatomy = ({ data }) => {
  return (
    <div className="human-anatomy">
      <div className="human-anatomy-container">
        <div className="human-anatomy-muscles">
          <img src={human} alt="" className="human-anatomy-image" />
        </div>
        <div className="human-anatomy-list">
          {data.map((item, index) => (
            <div className="human-anatomy-item" key={index}>
              <div className="human-anatomy-item-header">
                <img src={item.img} alt="" className="human-anatomy-icon" />
                <b>{item.label}</b>
              </div>
              <p>Date: {item.date}</p>
            </div>
          ))}
          <p className="human-anatomy-item-details">
            Details{" "}
            <span>
              <ArrowRight />
            </span>
          </p>
        </div>
      </div>
      <div className="human-anatomy-activity">
        <ActivityChart days={days} barHeights={barHeights} />
      </div>
    </div>
  );
};

export default HumanAnatomy;
