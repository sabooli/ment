import React from "react";


export default function SearchResultsPopup({
  results,
  onClose,
  filteredConsts,
}) {
  return (
    <div>
      {/* Add styling for the pop-up */}
      <div>
        <button onClick={onClose}>Close</button>
      </div>
      {/* Render the search results */}
      {filteredConsts.length > 0 ? (
        filteredConsts.map((doctor) => (
          <div key={doctor.id}>
            <h2>{doctor.name}</h2>
            {/* Render other service details */}
          </div>
        ))
      ) : (
        <p>No services found.</p>
      )}
    </div>
  );
}
