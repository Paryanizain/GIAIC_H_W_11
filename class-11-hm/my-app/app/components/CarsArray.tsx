import Image from "next/image"; 
import React from "react";
const CarsArray = () => {
  const carsName = [
    { carname: "Alto", carprice: 2800000, image: <Image src="/alto1.jpg" alt="Suzuki Alto" height={300} width={300}/> },
    { carname: "City", carprice: 7400000, image: <Image src="/city1.jpg" alt="Honda City" height={300} width={300}/> },
    { carname: "Juke", carprice: 6300000, image: <Image src="/juke1.png" alt="Nissan Juke" height={300} width={300}/> },
  ];
  return (
    <div>
      {carsName.map((cn , index) => {
        return (
          <div className="bg-slate-300 flex items-center justify-center gap-2 py-12">
            <div key={index}  className="bg-blue-300 flex-col md:flex-row w-3/12 text-center p-4">
              {cn.image}
              <h1 className="text-black text-base font-semibold">{cn.carname}</h1>
              <p className="text-black text-base font-semibold">{cn.carprice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarsArray;
