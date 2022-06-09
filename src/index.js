import { renderHeader } from "./header.js"
import {setupDebug} from "./debug.js";
import { renderHome } from "./home.js"



const main = () => {
    const debug = false;
    let startingPage;
    
    (debug) ? startingPage = setupDebug : startingPage = renderHome;

    document.querySelector("#headerContainer").append(renderHeader);
    document.querySelector("#contentContainer").append(startingPage);
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        main();
    }
})