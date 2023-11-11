import React from "react";


export default function Filters({ clickFunction, checkedSpecialty }) {
const options = [
  { value: "Depression", label: "Depression", category: "Category" },
  { value: "Anxiety", label: "Anxiety", category: "Category" },
  {
    value: "Mental",
    label: "Mental",
    category: "Category",
  },
  {
    value: "Adults",
    label: "Adults",
    category: "Category",
  },
  {
    value: "Adjustment Issues",
    label: "Adjustment Issues",
    category: "Category",
  },
  { value: "Online Only", label: "Online Only", category: "Status" },
];

 const groups = options.reduce((accumulator, option) => {
   if (accumulator[option.category]) {
     accumulator[option.category].push(option);
   } else {
     accumulator[option.category] = [option];
   }
   return accumulator;
  }, {});  


    return (
      <div className="box">
        <div className="filter">Filters</div>
        {Object.entries(groups).map(([category, options]) => (
          <div key={category}>
            <h2 className="title">{category}</h2>
            <ul onChange={(e) => clickFunction(e.target.value)}>
              {options.map((option) => (
                <li>
                  {" "}
                  <label key={option.value.toLowerCase()} className="labell">
                    <input
                      type="checkbox"
                      value={option.value.toLowerCase()}
                      checked={checkedSpecialty.includes(
                        option.value.toLowerCase()
                      )} // Check if the value is included in the checkedItems array
                      onChange={(e) => clickFunction(e.target.value)}
                    />
                    {option.label}
                  </label>
                </li>
              ))}{" "}
            </ul>
          </div>
        ))}
      </div>
    );
  }