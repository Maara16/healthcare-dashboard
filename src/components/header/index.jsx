import { Menu } from "lucide-react";
import Avatar from "../../assets/avatar.png";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <Menu onC/>
      <div className="button-box" style={{ backgroundColor: "#02dded" }}>
        <img src={Avatar} alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
