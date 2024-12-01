import React from "react";
const CComponent = (props: any) => {
  return (
    <div className="bg-slate-300 flex flex-col items-center justify-center gap-24 py-12">
      <div className="bg-orange-300 w-3/12 text-center p-4">
        <img src={props.img} alt={props.img} />
        <h1 className="text-black text-base font-semibold">{props.car}</h1>
        <p className="text-black text-base font-semibold">{props.rs}</p>
      </div>

      <div className="bg-orange-300 flex-col w-3/12 text-center p-4">
        <img src={props.img2} alt={props.img2} />
        <h1 className="text-black text-base font-semibold">{props.car2}</h1>
        <p className="text-black text-base font-semibold">{props.rs2}</p>
      </div>

      <div className="bg-orange-300 flex-col w-3/12 text-center p-4">
        <img src={props.img3} alt={props.img3} />
        <h1 className="text-black text-base font-semibold">{props.car3}</h1>
        <p className="text-black text-base font-semibold">{props.rs3}</p>
      </div>
    </div>
  );
};

export default CComponent;
