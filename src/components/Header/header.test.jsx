import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from ".";
import { Link } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
	it("should have 2 navigation items", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find(Link)).toHaveLength(2);
	});
});
