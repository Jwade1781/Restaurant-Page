import { renderHeader } from "./header.js"
import { setupDebug } from "./debug.js";
import { renderHome } from "./home.js"
import { backgroundShifter } from "./background.js";

const main = () => {
    const debug = false;
    let startingPage;
    debug ? startingPage = setupDebug : startingPage = renderHome;
    backgroundShifter();

    document.querySelector("#headerContainer").append(renderHeader);
    document.querySelector("#contentContainer").append(startingPage);
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") main();
})