import React from 'react';
import Hello from './hello.js';
import renderer from 'react-test-renderer';

it(`Снэпшот-тест приветственного экрана`, () => {

  const tree = renderer
    .create(<Hello
      time={5}
      errors={3}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
