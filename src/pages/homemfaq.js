import React, { useState } from "react";

export default function HMfaq({ question, answer, index }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={isExpanded ? "hqa" : "hqb"} onClick={handleClick}>
      <div className="hfq">
        {question} <span className="minus">{isExpanded ? "-" : "+"}</span>
      </div>
      {isExpanded && <p className="haa">{answer}</p>}
    </div>
  );
}
