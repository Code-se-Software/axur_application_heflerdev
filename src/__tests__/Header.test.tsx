import React from "react";
import TestRenderer from "react-test-renderer"
import {Form} from "src/pages/Home/components";
import {Provider} from "react-redux";
import {store} from "src/redux/store";

describe("<Header>", () => {
    const testRenderer = TestRenderer.create(<Provider store={store}><Form/></Provider>)
    it("renders correctly", () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
    })
})