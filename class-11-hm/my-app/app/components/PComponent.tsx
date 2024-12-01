import React from "react";
import CComponent from "./CComponent";
const PComponent = () => {
  let car = "Suzuki Alto";
  let price = "2800000";
  let image = "alto1.jpg";

  let car2 = "Honda City";
  let price2 = "7400000";
  let image2 = "city1.jpg";

  let car3 = "Nissan Juke";
  let price3 = "6300000";
  let image3 = "juke1.png";
  return (
    <div>
      <CComponent
        img={image}
        car={car}
        rs={price}
        img2={image2}
        car2={car2}
        rs2={price2}
        img3={image3}
        car3={car3}
        rs3={price3}
      />
    </div>
  );
};

export default PComponent;
