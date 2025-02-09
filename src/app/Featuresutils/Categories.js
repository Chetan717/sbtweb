import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ProTypeRed } from "../Redux/Slice/ProductTypeSlice";
import { setLastIndex } from "../Redux/Slice/LoadMore";

export default function Categoriespro() {
  const handleSelectType = (selectedType) => {
    dispatch(ProTypeRed(selectedType));
    dispatch(setLastIndex(8));
  };

  const img = [
    { src: "/img/brands/soil.png", name: "Soil Health", value: "organic" },
    { src: "/img/plant.png", name: "Plant Growth", value: "plant" },
    { src: "/img/insectiside.png", name: "Insectiside", value: "insectiside" },
    { src: "/img/pestiside.png", name: "Herbi/Fungi/side", value: "herbicide" },
    { src: "/img/ferti.png", name: "Organic Fertilizers", value: "organic" },
    { src: "/img/cow.png", name: "Cow Feeds", value: "cow" },
  ];

  return (
    <>
      <div className="flex justify-center mt-[20px] items-center p-5">
        <div className="flex gap-16 flex-wrap justify-center items-center">
          {img.map((i) => {
            return (
              <>
                <Link onClick={() => handleSelectType(i.value)} href="#prod">
                  <div
                    key={i.src}
                    className="flex flex-col gap-2 justify-center items-center"
                  >
                    <div className="rounded-full border cursor-pointer border-gray-400 hover: p-4 relative">
                      <Image src={i.src} alt="S" width={50} height={50} />
                    </div>
                    <p className="flex text-xs text-gray-600 font-semibold items-center justify-center text-center">
                      {i.name}
                    </p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
