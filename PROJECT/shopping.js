console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
//remeber to call the array that you are gonna keep everything
console.log(getShoppingListMsg(shoppingList));
 
console.log("this seem like too much junk food.")
console.log(shoppingList.pop());

console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
console.log(shoppingList.unshift("Chocolate Cake"))
console.log(getShoppingListMsg(shoppingList));
console.log("On second thoguht, maybe we should be more haelth conscious");
console.log(shoppingList.shift());
console.log(shoppingList[0]="Canola Oil");
console.log(getShoppingListMsg(shoppingList));