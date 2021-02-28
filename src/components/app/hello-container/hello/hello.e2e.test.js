import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Hello from "./hello.jsx";


Enzyme.configure({adapter: new Adapter()});

describe('ТЕСТИРУЕМ КОМПОНЕНТ HELLO...', () => {
  const clickHandler = jest.fn();

  const hello = shallow(<Hello
    time={5}
    maxMistakes={3}
    startGameHandler={clickHandler}
  />);

  it(`Проверяем нажатие на кнопку...`, () => {
    const startButton = hello.find(`.welcome__button`);
    startButton.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Ищем параграф и проверяем его текст`, () => {
    expect(hello.find(`p.welcome__text`).first().text()).toBe(`Правила просты:`);
  });

});




