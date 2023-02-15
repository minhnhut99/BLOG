import React from "react";

const Loading = () => {
  return (
    <div className="fixed w-screen h-screen bg-slate-400 z-50">
      <div class="flex items-center justify-center">
        <div
          class="spinner-border border-color_primary animate-spin inline-block w-14 h-14 border-4 rounded-full"
          role="status"
        >
          <span class=" w-12 h-12 bg-slate-50 block"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
