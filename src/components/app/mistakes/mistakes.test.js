import React from "react";
import Mistakes from "./mistakes";
import renderer from "react-test-renderer";

it(`Снэп-шот тест компонента ОШИБКА`, () => {
   const mistakes = renderer.create(<Mistakes countOfMistakes={3}/>).toJSON();

   expect(mistakes).toMatchSnapshot();
});