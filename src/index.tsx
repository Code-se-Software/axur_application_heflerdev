import React from "react";

import App from "./App";
import "./app.scss";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./redux/store";


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

createRoot(document.getElementById("root")).render(app);
