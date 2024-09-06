import React from "react";
import './loading.css'

function Loading() {
  return (
    <div>
      <ul className="loader">
        <li style={{ "--i": 1 }}>W</li>
        <li style={{ "--i": 2 }}>E</li>
        <li style={{ "--i": 3 }}>L</li>
        <li style={{ "--i": 4 }}>C</li>
        <li style={{ "--i": 5 }}>O</li>
        <li style={{ "--i": 6 }}>M</li>
        <li style={{ "--i": 7 }}>E</li>
      </ul>
    </div>
  );
}

export default Loading;
