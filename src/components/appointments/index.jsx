import { Plus } from "lucide-react";
import "./style.css";
import CalendarSection from "./CalendarSection";
import {
  appointments,
  calendarAppointments,
  upcoming,
} from "../../data/dashboard";
import AppointmentSection from "./AppointmentSection";
import Upcoming from "./Upcoming";
import Avatar from "../../assets/avatar.png";
const Appointments = () => {
  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <div className="profile">
          <div className="button-box" style={{ backgroundColor: "#02dded"}}>
            <img src={Avatar} alt="Avatar" className="avatar" />
          </div>
          <div className="button-box">
            <Plus />
          </div>
        </div>
      </div>
      <CalendarSection data={calendarAppointments} />
      <AppointmentSection data={appointments} />
      <Upcoming data={upcoming} />
    </div>
  );
};

export default Appointments;
