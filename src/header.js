const renderHeader = (() => {
    const nav = document.createElement("nav");
    const siteName = "Mozzafiato";
    const siteHeader = document.createElement("h1");
    siteHeader.textContent = siteName;

    const ul = document.createElement("ul");
    const redirects = {
        "Home" : [
            "navSelected",
            "hoverBounce"
        ],

        "Menu" : ["hoverBounce"],
        "About" : ["hoverBounce"],
        "Contact" : ["hoverBounce"]
    }

    const constructRedirects = (redirectName, classArray) => {
        let listEntry = document.createElement("li");
        listEntry.textContent = redirectName;
        for (const className of classArray)
            listEntry.classList.add(className);
        return listEntry;
    }

    for (const [key, classArray] of Object.entries(redirects)) {
        ul.append(constructRedirects(key, classArray));
    }

    nav.append(siteHeader);
    nav.append(ul);
    return nav;
})();

export { renderHeader };