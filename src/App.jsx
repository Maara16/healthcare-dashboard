import "./App.css";
import Appointments from "./components/appointments";
import DashboardMain from "./components/dasboardMain";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <div className="container">
          <Sidebar />
        <div className="content-area">
          <div class="dashboard-main">
            <DashboardMain />
          </div>
          <div class="appointments">
            <Appointments />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
