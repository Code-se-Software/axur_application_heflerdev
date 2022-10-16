import React from "react";
import TestRenderer from "react-test-renderer";
import {Provider} from "react-redux";
import {store} from "src/redux/store";
import HomeView from "src/pages/Home/HomeView";

describe("<HomeView>", () => {
    const testRenderer = TestRenderer.create(<Provider store={store}><HomeView/></Provider>)
    it("renders correctly", () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
    })
})