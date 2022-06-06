import {renderHeader} from "./header.js"
import {backgroundShifter} from "./background.js"

const DEBUG = false;

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        document.querySelector("#headerContainer").append(renderHeader);

        if (!DEBUG) setInterval(function(){backgroundShifter();}, 2000)
    }
})