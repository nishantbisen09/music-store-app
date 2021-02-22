import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from ".";
import Album from "../Album/Album";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
	let wrapper;

	beforeAll(() => {
		wrapper = shallow(<Home />);
	});

	it("should Load 0 Albums initially", () => {
		expect(wrapper.find(Album)).toHaveLength(0);
	});
});
