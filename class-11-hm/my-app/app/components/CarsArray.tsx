import Image from "next/image";
import React from "react";

const CarsArray = () => {
  const carsName = [
    {
      carname: "Alto",
      carprice: 2800000,
      image: "/alto1.jpg",
    },
    {
      carname: "City",
      carprice: 7400000,
      image: "/city1.jpg",
    },
    {
      carname: "Juke",
      carprice: 6300000,
      image: "/juke1.png",
    },
  ];

  return (
    <div>
      {carsName.map((cn, index) => (
        <div
          key={index}
          className="bg-slate-300 flex items-center justify-center gap-2 py-12"
        >
          <div className="bg-blue-300 flex flex-col items-center justify-center w-3/12 text-center p-4">
            <Image
              src={cn.image}
              alt={cn.carname}
              height={400}
              width={400}
              className="object-cover"
            />
            <h1
              key={`name-${index}`}
              className="text-black text-base font-semibold"
            >
              {cn.carname}
            </h1>
            <p
              key={`price-${index}`}
              className="text-black text-base font-semibold"
            >
              {cn.carprice.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarsArray;