import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";

function Spotlight() {
  const [spotlight, setSpotlight] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/hunt`)
      .then((res) => res.json())
      .then((data) => setSpotlight(data))
      .catch((err) => console.error("Error fetching spotlight:", err));
  }, []);

  return (
    <div>
      <h2>🔥 Spotlight</h2>
      <ul>
        {spotlight.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.highlight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Spotlight;
