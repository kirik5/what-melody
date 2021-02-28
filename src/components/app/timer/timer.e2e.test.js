import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Timer from "./timer";


Enzyme.configure({adapter: new Adapter()});

describe(`Проверяем компонент Timer`, () => {
    const timer = shallow(<Timer time={10} maxTime={30}/>);

    it(`Count of minutes`, () => {
        expect(timer.find(`.timer__mins`).text()).toEqual(`00`)
    });

    it(`Count of seconds`, () => {
        expect(timer.find(`.timer__secs`).text()).toEqual(`10`)
    });

    it(`Count of seconds`, () => {
        expect(timer.find(`.timer__line`).prop(`style`).strokeDashoffset).toEqual(1549)
    });
});