import React from "react";
import { genrealMenu, toolsMenu } from "../../data/menu";
import { Settings } from "lucide-react";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <h2 className="logo" style={{ color: "#02dded" }}>
          Health
        </h2>
        <h2 className="logo">care.</h2>
      </div>
      <div className="menu">
        <div className="menu-main">
          <div className="menu-group">
            <p>General</p>
            <div className="menu-general">
              <div className="menu-items">
              {genrealMenu.map((item, index) => (
                <div className="menu-item" key={`general-${index}`}>
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
              </div>
            </div>
          </div>
          <div className="menu-group">
            <p>Tools</p>
            <div className="menu-general">
               <div className="menu-items">
              {toolsMenu.map((item, index) => (
                <div className="menu-item" key={`tools-${index}`}>
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className="menu-settings">
          <div className="menu-item">
            <span className="settings-icon">
              <Settings />
            </span>
            <span className="settings-text">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;