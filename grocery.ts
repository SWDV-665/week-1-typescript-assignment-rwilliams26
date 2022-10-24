// create a class
class Grocery {
    // declare properties and corresponding data type
    name: string;
    quantity: number;
    price: number;

    // add a constructor
    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// create a list of grocery items
// new keyword is used to inititalise objects
let list_of_items = [
    new Grocery("candy", 3, 1),
    new Grocery("soda", 2, 3),
    new Grocery("egg", 12, 5)
]

// access the html element with id app
const ele = document.getElementById("app");

// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});