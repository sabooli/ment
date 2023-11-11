import React, { useState } from "react";

export default function Mfaq({ question, answer, index }) {
   const [isExpanded, setIsExpanded] = useState(index === 0);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={isExpanded ? "qa" : 'qb'}
      onClick={handleClick}
    >
        <div className="fq">
          {question} <span className="minus">{isExpanded ? "-" : "+"}</span>
        </div>
        {isExpanded && <p className="aa">{answer}</p>}
       
    </div>
  );
}
