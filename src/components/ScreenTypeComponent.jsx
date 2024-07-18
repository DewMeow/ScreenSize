import React, { useState, useEffect } from "react";

const useScreenType = () => {
  const [screenType, setScreenType] = useState("");

  useEffect(() => {
    const determineScreenType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenType("Mobile");
      } else if (width >= 768 && width <= 1024) {
        setScreenType("Tabletka");
      } else {
        setScreenType("Desktop");
      }
    };

    determineScreenType();

    window.addEventListener("resize", determineScreenType);

    return () => {
      window.removeEventListener("resize", determineScreenType);
    };
  }, []);

  return screenType;
};

const ScreenTypeComponent = () => {
  const screenType = useScreenType();

  return (
    <div>
      <h1>Display screen type: {screenType}</h1>
    </div>
  );
};

export default ScreenTypeComponent;
