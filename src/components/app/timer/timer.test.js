import React from "react";
import renderer from "react-test-renderer";
import Timer from "./timer";


it(`Правильная отрисовка таймера`, () => {
   const timer = renderer.create(<Timer time={10} maxTime={30} />).toJSON();

   expect(timer).toMatchSnapshot();
});