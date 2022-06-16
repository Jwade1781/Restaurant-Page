import './css/menu.css'
import { Food } from './food';

const renderMenu = (() => {
    let menuDiv = document.createElement("div");
    menuDiv.id = "menu";
    menuDiv.append(createAppetizers());
    menuDiv.append(createEntrees());
    return menuDiv;
})();

function createAppetizers() {
    const Appetizers = {
        "type": "Appetizer",
        "foods": [
            {
                "Name": "Pork Egg Roll",
                "Price": "$1.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Veg Egg Roll",
                "Price": "$1.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Spring Roll",
                "Price": "$1.35",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Fried Wonton",
                "Price": "$5.25",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Krab Rangoon",
                "Price": "$5.25",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Steamed Dumplings",
                "Price": "$7.45",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Fried Dumplings",
                "Price": "$7.45",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },
        ]
    }
    return createDom(Appetizers);
}

function createEntrees() {
    const entrees =
    {
        "type": "Entree",
        "foods": [
            {
                "Name": "Chicken Lo Mein",
                "Price": "$7.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Beef Lo Mein",
                "Price": "$7.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Shrimp Lo Mein",
                "Price": "$8.35",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Honey Chicken",
                "Price": "$7.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Curry Chicken",
                "Price": "$7.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Sweet & Sour Chicken",
                "Price": "$7.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },

            {
                "Name": "Beef with Garlic Sauce",
                "Price": "$7.75",
                "imgSrc": "../dist/assets/images/bg1.jpg",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus beatae voluptas unde doloribus inventore. Nulla minus dolorem necessitatibus fuga blanditiis accusantium aut nesciunt ratione tempore, unde adipisci repudiandae corrupti aspernatur?"
            },
        ]
    }
    return createDom(entrees)
}

function createDom(foods) {
    let foodCatDiv = document.createElement("div");
    foodCatDiv.classList.add("foodCategory");
    foodCatDiv.id = foods["type"] +'s';
    
    let foodTypeHeader = document.createElement("h1");
    foodTypeHeader.textContent = foods["type"] +'s';
    foodCatDiv.append(foodTypeHeader);

    for (const [key] of Object.entries(foods["foods"])) 
        foodCatDiv.append(new Food(foods["type"], foods["foods"][key]["Name"], foods["foods"][key]["Price"], foods["foods"][key]["imgSrc"], foods["foods"][key]["description"]));
    return foodCatDiv;
}
export { renderMenu };