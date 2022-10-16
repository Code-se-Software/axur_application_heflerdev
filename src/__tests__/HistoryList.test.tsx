import React from "react";
import TestRenderer from "react-test-renderer";
import {Provider} from "react-redux";
import {store} from "src/redux/store";
import {HistoryList} from "src/pages/Home/components/HistoryList";

describe("<HistoryList>", () => {
    const sampleList = [{
        id: "abcdef",
        keyword: "default"
    }]
    const renderer = TestRenderer.create(
        <Provider store={store}>
            <HistoryList list={sampleList}/>
        </Provider>
    )
    it("renders correctly", () => {
        expect(renderer.toJSON()).toMatchSnapshot();
    })
})