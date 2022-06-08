import './home.css';

const renderHome = (() => {
    const home = document.createElement("div");
    home.id = "homeContent";

    home.append(createHomeHeader());

    let contentDiv = document.createElement("div");
    contentDiv.append(createHomeInformation());
    contentDiv.append(createHours());
    home.append(contentDiv);

    home.append(createOrderButton());
    return home;
})();

function createHomeHeader() {
    const mainHomeHeader = {
        "foodStyle": {
            "tag": "h1",
            "description": "New York Style"
        },

        "slogan": {
            "tag": "h3",
            "description": "Best Chinese Food Take Out in Central Florida!"
        },

        "foodType": {
            "tag": "h4",
            "description": "Hunan - Szechuan - Mandarin Cuisine"
        },

        "phone": {
            "tag": "h5",
            "description": "(352)-241-8081"
        }
    };

    let childDiv = DictionarytoDom(mainHomeHeader);
    return childDiv;
}

function createHomeInformation(){
    let elements = {
        "callToAction" : {
            "tag" : "h2",
            "description" : "Come Visit Us!"
        },

        "address" : {
            "tag" : "address",
            "description" : "2430 US Highway 27 Suite 340, Clermont, FL 34714"
        },

        "gmap" : {
            "id" : "gmap",
            "tag" : "iframe",
            "src" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.224586491107!2d-81.6865363!3d28.382283899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7d2dc5b09bdf%3A0x2181c1c7720fd549!2s2430%20US-27%20%23340%2C%20Clermont%2C%20FL%2034714!5e0!3m2!1sen!2sus!4v1654229115747!5m2!1sen!2sus"
        }
    };

    let childDiv = DictionarytoDom(elements);
    return childDiv;
}

function createHours(){
    let lunchHours = {
        "LunchHours" : {
            "tag" : "h2",
            "description" : "Lunch Hours"
        },

        "MondayL" : {
            "tag" : "time",
            "description" : "Mon: Closed"
        },


        "TuesSatL" : {
            "tag" : "time",
            "description" : "Tues-Sat: 11:00AM to 3:00PM"
        },


        "SunL" : {
            "tag" : "time",
            "description" : "Sun: 12:00PM to 3:00PM"
        }
    };

    let dinnerHours = {
        "DinnerHours" : {
            "tag" : "h2",
            "description" : "Dinner Hours"
        },

        "MondayD" : {
            "tag" : "time",
            "description" : "Mon: Closed"
        },

        "TuesSatD" : {
            "tag" : "time",
            "description" : "Tues-Sat: 11:00AM to 9:00PM"
        },

        "SunD" : {
            "tag" : "time",
            "description" : "Sun: 12:00PM to 9:00PM"
        },
    };

    let childDiv = document.createElement("div");
    let hoursDiv = DictionarytoDom(lunchHours);
    hoursDiv.classList.add("hours");
    hoursDiv.id = "lunchHours";
    childDiv.append(hoursDiv);


    hoursDiv = DictionarytoDom(dinnerHours);
    hoursDiv.classList.add("hours");
    hoursDiv.id = "dinnerHours";
    childDiv.append(hoursDiv);
    return childDiv;
}

function DictionarytoDom(elements){
    let childDiv = document.createElement("div");
    for (const [key] of Object.entries(elements)) {
        let element = elements[key];
        let newDom = document.createElement(element["tag"]);
        

        if (element["description"] !== undefined)
            newDom.textContent = element["description"];
        
        if (element["src"] !== undefined)
            newDom.src = element["src"]

        if (element["id"]!== undefined)
            newDom.id = element["id"];
        childDiv.append(newDom);
    }
    return childDiv;
}

function createOrderButton(){
    let button = document.createElement("button");
    button.classList.add("hoverDarkBg");
    button.textContent = "Order Now";
    return button;
}

export { renderHome };