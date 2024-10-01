import React from "react";

const Iframe = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h2>App B</h2>
      <iframe
        src="http://localhost:3001" // Change this to your AppB's URL
        style={{ width: "100%", height: "100%", border: "none" }}
        title="App B"
      />
    </div>
  );
};

export default Iframe;
