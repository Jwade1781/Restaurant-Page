import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";
import { renderContact } from "./contact.js";
import { backgroundShifter } from "./background.js";
import { renderHome } from "./home.js"

const setupDebug = (() => {
    const debugSettings = {
        "background": true,
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

    if (debugSettings["background"]) setInterval(function () { backgroundShifter(); }, 2000)
    if (debugSettings["pageDebug"]["debug"]) {
        let debugName = debugSettings["pageDebug"]["pages"]["currentDebug"];
        return debugSettings["pageDebug"]["pages"][debugName];
    }
})();

export { setupDebug };