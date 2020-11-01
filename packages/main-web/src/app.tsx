import * as React from 'react';


import Router from "./router"
import './mobster.css';
import './maicons.css'

import { Provider } from 'react-redux';
import Configure from "./redux/store"

const store = Configure()


export default function App():JSX.Element {

    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
}