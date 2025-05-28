import "./style.css";
const ActivityChart = ({ barHeights, days }) => {
  return (
    <div className="human-anatomy-activity">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointment on this week</span>
      </div>
      <div className="chart">
        {barHeights.map((bars, dayIndex) => (
          <div key={dayIndex} className="chart-day">
            <div className="bars">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <div className="day-label">{days[dayIndex]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
