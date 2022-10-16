import React from "react";
import TestRenderer from "react-test-renderer";
import {Provider} from "react-redux";
import {store} from "src/redux/store";
import {Form} from "src/pages/Home/components";

describe("<Form>", () => {
    const renderer = TestRenderer.create(<Provider store={store}><Form/></Provider>)
    it("renders correctly", () => {
        expect(renderer.toJSON()).toMatchSnapshot()
    })
})