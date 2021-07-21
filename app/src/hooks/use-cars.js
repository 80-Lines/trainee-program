import React from "react";
import getCarsService from "../services/get-cars-service";

const useCars = () => {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    getCarsService().then((data) => {
      setCars(data);
    });
  }, []);

  return { cars };
};

export default useCars;
