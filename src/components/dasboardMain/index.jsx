import "./style.css";
import SearchInput from "./SearchInput";
import HumanAnatomy from "./HumanAnatomy";
import { bodyParts } from "../../data/dashboard";

const DashboardMain = () => {
  return (
    <div className="dashboard-main-container">
      <SearchInput />
      <div className="dashboard-main-header">
        <h2>Dashboard</h2>
        <p>This Week</p>
      </div>
      <HumanAnatomy data={bodyParts} />
    </div>
  );
};

export default DashboardMain;
