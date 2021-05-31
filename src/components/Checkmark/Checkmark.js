 // Ported from Alexander Haniotis' code here: https://codepen.io/haniotis/pen/KwvYLO
import React from "react";

export const Checkmark = () => {
  return (
    <svg 
      className="checkmark"
      viewBox="0 0 52 52">
        <circle 
          className="checkmark__circle" 
          cx="26" 
          cy="26"
          r="25" 
          fill="none"
        />
        <path 
          className="checkmark__check" 
          fill="none" 
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
    </svg>
  );
}