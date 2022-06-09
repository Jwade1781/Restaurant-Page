export class Food {
    constructor(type, name, price, imgSrc, description) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.imgSrc = imgSrc;
        this.description = description;

        return this.createFoodDom();
    }

    createFoodDom = () => {
        let parentDiv = document.createElement("div");
        parentDiv.classList.add(this.type);

        let foodNamePriceDiv = this.createFoodName();
        let details = this.createDetail();

        parentDiv.append(foodNamePriceDiv);
        parentDiv.append(details);
        return parentDiv;
    }

    createFoodName = () => {
        const foodNameStruct = {
            "name": {
                "tag": "h2",
                "description": this.name,
                "class": "foodName"
            },

            "price": {
                "tag": "h3",
                "description": this.price,
                "class": "foodPrice"
            }
        }

        let foodNamePriceDiv = document.createElement("div");
        foodNamePriceDiv.classList.add("foodNamePrice");
        this.createDomFromStructure(foodNamePriceDiv, foodNameStruct);
        return foodNamePriceDiv;
    }

    createDetail = () => {
        const detailsStruct = {
            "summary": {
                "tag": "summary",
                "description": "See More!"
            },

            "img": {
                "tag": "img",
                "src": this.imgSrc,
                "class": "foodImage"
            },

            "foodDescription": {
                "tag": "h5",
                "description": this.description
            }
        }

        let details = document.createElement("details");
        this.createDomFromStructure(details, detailsStruct);
        return details;
    }

    createDomFromStructure = (parentDiv, structure) => {
        for (const [key] of Object.entries(structure)) {
            let structureKey = structure[key];
            let newElement = document.createElement(structureKey["tag"]);

            if (structureKey["description"] !== undefined)
                newElement.textContent = structureKey["description"];

            if (structureKey["src"] !== undefined)
                newElement.src = structureKey["src"]

            if (structureKey["id"] !== undefined)
                newElement.id = structureKey["id"];

            if (structureKey["class"] !== undefined)
                newElement.classList.add(structureKey["class"]);
            parentDiv.append(newElement);
        }
    }
}