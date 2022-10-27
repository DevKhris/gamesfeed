import React, { useState, useEffect } from "react";

const Alert = ({ error, setError }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
    setError("");
  };

  useEffect(() => {
    error && setShowAlert(true);
  }, [error]);

  return (
    <div
      className={`absolute top-0 left-0 z-50 ${
        showAlert ? "flex" : "hidden"
      } items-center justify-between w-full p-8 text-white bg-red-500 h-14`}
    >
      {error}
      <i
        onClick={handleCloseAlert}
        className="cursor-pointer lni lni-cross-circle"
      ></i>
    </div>
  );
};

export default Alert;
