import React from "react";

const Loading = () => {
  return (
    <div className="text-center my-10 py-10">
      <button type="button" class="bg-gray" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
