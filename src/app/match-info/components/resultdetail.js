import React from "react";

function ResultDetails({ fixture, teamLogos }) {
  console.log(fixture); // Check if it's an array
  const results = fixture.filter(
    (fixturedetail) =>
      fixturedetail.homeScore !== undefined &&
      fixturedetail.awayScore !== undefined
  );

  return <div>ResultTable</div>;
}

export default ResultDetails;
