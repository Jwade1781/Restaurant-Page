import {renderHeader} from "./header.js"

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        document.querySelector(".container").append(renderHeader);
    }
})