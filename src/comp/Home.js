import React, { useState } from "react";
import { data, count } from "./Data";

const Home = () => {
  const [selected, setSelected] = useState("");
  const [active, setActive] = useState([]);
  const [desc, setDesc] = useState("");

  const handleNthSelection = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="home-main">
        <div className="title">{"CSS :nth-child() pseudo-class"}</div>
        <div className="nth-indicator">
          {count.map((num, index) => (
            <div key={index} className={active.includes(num) ? "active" : ""}>
              {index + 1}
            </div>
          ))}
        </div>
        <div className="nth-input">
          {data.map((variation, index) => (
            <label key={index}>
              <input
                type="radio"
                name="nthSelector"
                value={variation.id}
                checked={selected === variation.id}
                onChange={handleNthSelection}
                onClick={() => {
                  setActive(variation.element);
                  setDesc(variation.desc);
                }}
              />

              {variation.id}
            </label>
          ))}
          <br />
        </div>
        {desc && (
          <div className="desc">{"Selector " + selected + " - " + desc}</div>
        )}
      </div>
    </>
  );
};

export default Home;
