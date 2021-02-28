import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Mistakes from "./mistakes";


Enzyme.configure({adapter: new Adapter()});

describe(`Тестируем компонент MISTAKES`, () => {
    const mistakes = shallow(<Mistakes countOfMistakes={3}/>);

    it(`Отрисовывается правильное количество ошибок!`, () => {
        expect(mistakes.find(`.wrong`).length).toEqual(3);
    })
});