import React from "react";
import Sliders from "../Sliders/Sliders";
import Schedule from "../Schedule/Schedule";
import Features from "../Features/Features";
import Help from "../Help/Help";
import Counter from "../Counter/Counter";
import TopDoctor from "../TopDoctor/TopDoctor";
import Partner from "../Partner/Partner";
import TopHospital from "../TopHospital/TopHospital";
import TopDiagnostic from "../TopDiagnostic/TopDiagnostic";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <section className="">
        <Sliders></Sliders>
        <Schedule></Schedule>
        <Help></Help>
        <Counter></Counter>
        <TopDoctor></TopDoctor>
        <TopHospital></TopHospital>
        <TopDiagnostic></TopDiagnostic>
        <Partner></Partner>
        <Newsletter></Newsletter>
      </section>
    </>
  );
};

export default Home;
