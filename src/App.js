import React, { useEffect, useState } from "react";

let progressInterval = null;

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  return (
    <div class="card">
      <div className="m-5">
        <h5 className="mb-3">Order Status</h5>
        <h7 classname="mb-4">Tracking id #</h7>
        <div className="progress w-100" style={{ height: 30 }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
