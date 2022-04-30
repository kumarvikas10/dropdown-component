import React, { useState } from "react";
import './App.css'

const options = ["YES", "Probably Not"];

export default function App() {
  const [option, setOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setOption(!option);

  const onSelctedOption = (value) => () => {
    setSelectedOption(value);
    setOption(false);
    console.log(selectedOption);
  };

  return (
    <div className="App">
      <div className="main">
        <h2>Should You Use Dropdown?</h2>
        <div className="dropdownContainer">
          <i class="fa-solid fa-caret-down icon" onClick={toggling} ><span className="option">{selectedOption || "Select"}</span></i>
          <div className="dropdownHeader" >
          {option && (
            <div>
              <ul className="dropdownList">
                {options.map((option) => (
                  <li
                    className="listItem"
                    onClick={onSelctedOption(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
