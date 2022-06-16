import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";
import { renderContact } from "./contact.js";
import { renderHome } from "./home.js"

const setupDebug = (() => {
    const debugSettings = {
        "pageDebug": {
            "debug": true,
            "pages": {
                "currentDebug": "menu",
                "home": renderHome,
                "menu": renderMenu,
                "about": renderAbout,
                "contact": renderContact
            }
        }
    }

    if (debugSettings["pageDebug"]["debug"]) {
        let debugName = debugSettings["pageDebug"]["pages"]["currentDebug"];
        return debugSettings["pageDebug"]["pages"][debugName];
    }
})();

export { setupDebug };