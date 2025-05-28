import { Bell } from "lucide-react";
import { Search } from "lucide-react";
const SearchInput = () => {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <span className="search-icon">
          <Search size={18} />
        </span>
        <input type="text" className="search-input" />
        <span className="bell-icon">
          <Bell size={18} />
        </span>
      </div>
    </div>
  );
};

export default SearchInput;
