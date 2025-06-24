import React, { useEffect, useState } from 'react';

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("https://REPLACE-WITH-APIGEE-URL/api/hello")
      .then(res => res.text())
      .then(setResponse);
  }, []);

  return (
    <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
      <h1>Frontend + Apigee + Backend</h1>
      <p>{response}</p>
    </div>
  );
}

export default App;
