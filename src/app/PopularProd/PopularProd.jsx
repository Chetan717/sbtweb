"use client";
import React from "react";
import PopularProdList from "./Comp/PopularProdList";
export default function PopularProd() {
  const img = [
    { value: "", name: "All" },
    { value: "soil", name: "Soil Health" },
    { value: "plant", name: "Plant Growth" },
    { value: "insectiside", name: "Insectiside" },
    { value: "pesticide", name: "Pestisides" },
    { value: "fertilizer", name: "Fertilizers" },
    { value: "cow", name: "Cow Feeds" },
  ];
  const [selType, setSelType] = React.useState("");
  return (
    <>
      <main className="flex flex-col bg-white justify-center  items-center  gap-7  ">
        <h1 className="text- font-bold text-xl"> Popular Products</h1>
        <div className="flex lg:flex-row flex-col gap-[15px]  justify-center items-center ">
          <div className="flex mt-3 flex-wrap gap-4 lg:gap-10 justify-center items-center">
            {img?.map((i) => {
              return (
                <>
                  <p
                    key={i}
                    onClick={() => setSelType(i.value)}
                    className={
                      selType === i.value
                        ? `font-semibold text-xs lg:text-sm  bg-teal-500 rounded-lg p-2 text-white  hover:-translate-y-1 cursor-pointer`
                        : `font-semibold text-xs bg-gray-50 rounded-lg p-2 text-gray-800  hover:-translate-y-1 cursor-pointer`
                    }
                  >
                    {i.name}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <PopularProdList selType={selType} />
      </main>
    </>
  );
}
