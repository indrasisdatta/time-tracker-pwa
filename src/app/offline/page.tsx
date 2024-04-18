import React from "react";

const OfflinePage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-4">Oops!</h1>
      <p className="text-lg text-center mb-6">It seems you are offline.</p>
      <p className="text-lg text-center mb-6">
        Please check your internet connection and try again.
      </p>
    </div>
  );
};

export default OfflinePage;
