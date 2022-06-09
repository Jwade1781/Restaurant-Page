import './css/header.css'

import { backgroundShifter } from "./background.js"
import { renderHome } from "./home.js"
import { renderMenu } from "./menu.js"
import { renderAbout } from "./about.js"
import { renderContact } from "./contact.js"

const renderHeader = (() => {
    const nav = document.createElement("nav");
    const siteName = "Bamboo Garden";
    const siteHeader = document.createElement("h1");
    siteHeader.textContent = siteName;

    const ul = document.createElement("ul");
    const redirects = {
        "Home": {
            "classes": ["navSelected", "hoverBounce"],
            "onclick": renderHome
        },

        "Menu": {
            "classes": ["hoverBounce"],
            "onclick": renderMenu
        },

        "About": {
            "classes": ["hoverBounce"],
            "onclick": renderAbout
        },

        "Contact": {
            "classes": ["hoverBounce"],
            "onclick": renderContact
        },
    }

    const constructRedirects = (redirectName, dictionary) => {
        let listEntry = document.createElement("li");
        listEntry.textContent = redirectName;

        for (const className of dictionary["classes"])
            listEntry.classList.add(className);

        listEntry.addEventListener("click", () => {
            const contentContainer = document.querySelector("#contentContainer");
            document.querySelector(".navSelected").classList.remove("navSelected");
            listEntry.classList.add("navSelected");
            while(contentContainer.hasChildNodes()) //deletes all previously created doms within the content container
                contentContainer.removeChild(contentContainer.lastChild);
            contentContainer.append(dictionary["onclick"]);
        })
        return listEntry;
    }

    for (const [key, dictionary] of Object.entries(redirects))
        ul.append(constructRedirects(key, dictionary));
    nav.append(siteHeader);
    nav.append(ul);
    return nav;
})();

export { renderHeader };