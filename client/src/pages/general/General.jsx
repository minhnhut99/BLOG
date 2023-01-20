import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Hero from "../../components/common/hero/Hero";
const General = () => {
  return (
    <>
      <section className="w-full h-full  bg-slate-50 px-20 lg:px-2 md:px-1 mx-auto">
        <Header />
        <div className="px-2">
          <Hero />
        </div>
        <div className="px-2">
          <Outlet />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default General;
