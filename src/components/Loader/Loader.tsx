import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
