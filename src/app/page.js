import Hero from "./CompUtils/Hero.tsx/Hero";
import React from "react";
import PopularProd from "./PopularProd/PopularProd";
import Categoriespro from "./Featuresutils/Categories";
import Offer from "../app/Offer/Offer";
import { ToastContainer } from "react-toastify";

export default function Page() { // ✅ Rename "page" to "Page"
  const [selType, setSelType] = React.useState("organic");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col justify-center items-center lg:gap-5 gap-5 p-2">
        <Categoriespro selType={selType} setSelType={setSelType} />
        {/* <Hero /> */}
        <Offer />
        <PopularProd selType={selType} setSelType={setSelType} />
      </div>
    </>
  );
}
