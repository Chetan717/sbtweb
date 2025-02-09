"use client"; // Ensure this is a client component

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ProTypeRed } from "../Redux/Slice/ProductTypeSlice";
import { setLastIndex } from "../Redux/Slice/LoadMore";

export default function Categoriespro() {
  const dispatch = useDispatch(); // Fix missing dispatch

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
    <div className="flex justify-center mt-[20px] items-center p-5">
      <div className="flex gap-16 flex-wrap justify-center items-center">
        {img.map((item) => (
          <div
            key={item.src}
            className="flex flex-col gap-2 justify-center items-center cursor-pointer"
            onClick={() => handleSelectType(item.value)}
          >
            <Link href="#prod">
              <div className="rounded-full border border-gray-400 p-4 relative">
                <Image src={item.src} alt={item.name} width={50} height={50} />
              </div>
            </Link>
            <p className="flex text-xs text-gray-600 font-semibold items-center justify-center text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
