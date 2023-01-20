import React from "react";
const Hero = () => {
  return (
    <div>
      <div className="flex h-auto w-full pt-24 lg:pt-20">
        <div className="w-2/3 md:hidden h-fit">
          <p className="text-9xl lg:text-8xl">Viva</p>
          <p className="text-9xl lg:text-8xl ml-44 lg:ml-32 mt-12">la Vida</p>
        </div>
        <div className="w-1/3 md:w-full h-fit">
          <img
            className="h-96 w-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1673790982411-3abb6a610351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
