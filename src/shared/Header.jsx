import {hot} from 'react-hot-loader/root'
import * as React from "react";
import {Example} from "./Example";

function HeaderComponent() {
    return (<header>
        <Example/>
        <h1>Reddit for our own))) _</h1>
    </header>);
}

export const Header = hot(HeaderComponent);
