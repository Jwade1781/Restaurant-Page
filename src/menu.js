import './css/menu.css'
import { Food } from './food';

const renderMenu = (() => {
    let menuDiv = document.createElement("div");
    menuDiv.id = "menu";

    //createAppetizers();
    //console.log(createAppetizers());
    menuDiv.append(createAppetizers());
    menuDiv.append(createEntrees());

    if (document.querySelector("#contentContainer")){
        document.getElementById("contentContainer").append(menuDiv);
    }
    //document.querySelector("#contentContainer").append(menuDiv);
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
        ]
    }
    return createDom(entrees)
}

function createDom(foods) {
    let foodCatDiv = document.createElement("div");
    foodCatDiv.classList.add("foodCategory");
    foodCatDiv.id = foods["type"] +'s';
    
    let i = 0;
    for (const [key] of Object.entries(foods["foods"])) {
        //console.log(`---------------------------------------------\n\n${foods["foods"][key]["Name"]}\n\n-----------------------------------------------\n\n`);
        let food = new Food(foods["type"], foods["foods"][key]["Name"], foods["foods"][key]["Price"], foods["foods"][key]["imgSrc"], foods["foods"][key]["description"]);
        foodCatDiv.append(food);
    }
    //console.log(foodDiv);
    console.log(foodCatDiv);
    return foodCatDiv;
}
export { renderMenu };