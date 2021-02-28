import React from "react";
import Hello from "./hello";
import renderer from "react-test-renderer";

it(`Снэпшот-тест приветственного экрана`, () => {

  const tree = renderer
    .create(<Hello
      time={5}
      maxMistakes={3}
      startGameHandler={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
