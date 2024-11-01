import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/Dropdown.css";
import { dateArray } from "../constants/datesConstants";
import { useDateContext } from "../context/DateProvider";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { date, setDate } = useDateContext();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setDate(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {date.replace(/-/g, " ")}
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>
          <IoIosArrowDown size={28} color="#3f71dd" />
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {dateArray.map((date) => (
            <div
              key={date}
              onClick={() => handleOptionClick(date)}
              className="dropdown-item"
            >
              {date.replace(/-/g, " ")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
