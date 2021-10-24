import {hot} from 'react-hot-loader/root'
import * as React from "react";
import {Example} from "./Example";
import styles from "./header.css";
import stylesScss from "./header.scss";

function HeaderComponent() {
    return (<header>
        <Example/>
        <h1 className={styles.example}>Reddit for our own))) _</h1>
        <h1 className={stylesScss.example}>scss Reddit for our own))) _</h1>
        <h1 className={stylesScss.helloReact}>Hello React</h1>
    </header>);
}

export const Header = hot(HeaderComponent);
